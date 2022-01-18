const Pagination = (props) => (
  <nav
    role="navigation"
    aria-label="Entries pagination navigation"
    className="pagination"
  >
    <ul>
      <li>
        <a
          className={props.currentPage == 1 ? "disabled" : ""}
          href="#"
          role="button"
          aria-label="Load next page of entries"
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
          className={props.currentPage == props.totalPages ? "disabled" : ""}
          href="#"
          role="button"
          aria-label="Load next page of entries"
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
