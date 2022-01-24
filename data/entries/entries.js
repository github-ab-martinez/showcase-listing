const getEntryIdsUrl =
  "https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryIds";
const getEntryByIdUrl =
  "https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryById?id=";

class FetchError extends Error {}

async function fetchWithRetry(url, retries) {
  try {
    let request = await fetch(url);

    if (!request.ok) {
      throw new FetchError(`Request returned status: ${request.status}`);
    } else {
      let response = await request.json();
      if (response.error) {
        throw new FetchError(`Request returned error: ${response.error}`);
      } else {
        return response;
      }
    }
  } catch (error) {
    if (error instanceof FetchError) {
      console.log("fetchWithRetry error", error);
      if (retries >= 1) {
        return await fetchWithRetry(url, retries - 1);
      } else {
        return null;
      }
    } else {
      throw error;
    }
  }
}

async function getEntries(entryIds) {
  let entries = await Promise.all(
    entryIds.map(async (entryId) => {
      let entry = await fetchWithRetry(getEntryByIdUrl + entryId, 5);

      return entry;
    })
  );

  return entries;
}

export async function getEntriesData() {
  let entryIds = await fetchWithRetry(getEntryIdsUrl, 5);
  let entries = !entryIds ? null : await getEntries(entryIds);

  return entries;
}
