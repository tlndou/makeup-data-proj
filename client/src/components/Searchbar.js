import "../styles/searchbar.scss";

export default function Searchbar() {
  return (
    <div className="search-area">
      <form>
        <input className="searchbar" type="text" placeholder="Search..." />
        <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
        </label>
      </form>
    </div>
  );
}
