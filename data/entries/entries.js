async function fetchWithRetry(url) {
  let request = await fetch(`${url}`);

  if (!request.ok) {
    fetchWithRetry(url);
  } else {
    let json = await request.json();
    if (json.error) {
      fetchWithRetry(url);
    } else {
      return json;
    }
  }
}

async function getEntryIds() {
  try {
    let entryIdsRequest = await fetch(
      "https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryIds"
    );
    if (!entryIdsRequest.ok)
      throw new Error("Something went wrong with the server, please try again");

    let ids = await entryIdsRequest.json();

    if (ids.error) throw new Error(ids.error);

    return ids;
  } catch (err) {
    console.log(err.message);
  }
}

async function getEntries(entryIds) {
  let entries = await Promise.all(
    entryIds.map(async (entryId) => {
      let entriesRequest = await fetchWithRetry(
        `https://www.bigcommerce.com/actions/bcCore/interview/getShowcaseEntryById?id=${entryId}`
      );

      return entriesRequest;
    })
  );

  return entries.filter((entry) => entry !== undefined);
}

export async function getEntriesData() {
  let entryIds = undefined;
  do {
    entryIds = await getEntryIds();
  } while (!entryIds);

  let entries = await getEntries(entryIds);

  return entries;
}
