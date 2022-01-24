const Pagination = (props) => (
  <nav
    className="flex justify-end"
    role="navigation"
    aria-label="Entries pagination navigation"
  >
    <p className="mb-0 mr-5">
      Page {props.currentPage} of {props.totalPages}
    </p>
    <ul className="flex justify-end">
      <li>
        <a
          className={`bg-slate-400 p-3 rounded-sm mr-2 text-white ${
            props.currentPage == 1 ? "pointer-events-none bg-slate-200" : ""
          }`}
          href="#"
          role="button"
          aria-label="Load previous page of entries"
          aria-disabled={props.currentPage == 1 ? true : false}
          onClick={() => {
            props.clickHandler(props.currentPage - 1);
          }}
          tabIndex={props.currentPage == 1 ? -1 : 0}
        >
          Previous Page
        </a>
      </li>
      <li>
        <a
          className={`bg-slate-400 p-3 rounded-sm text-white ${
            props.currentPage == props.totalPages
              ? "pointer-events-none bg-slate-200"
              : ""
          }`}
          href="#"
          role="button"
          aria-label="Load next page of entries"
          aria-disabled={props.currentPage == props.totalPages ? true : false}
          onClick={() => {
            props.clickHandler(props.currentPage + 1);
          }}
          tabIndex={props.currentPage == props.totalPages ? -1 : 0}
        >
          Next Page
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
