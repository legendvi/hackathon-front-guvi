// This component gives all the dropdown JSX required

import { NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
// import store from "../store/app-store";
export default function Dropdown() {
  // this returns dropdown Coomponents imported from reat-bootstrap to render in Header
  return (
    <>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {/* Dropdown to filter by Category */}

        <NavDropdown
          //   onSelect={(e) => store.categoryHandler(e)}
          title="Category"
          id="navbarScrollingCategory"
        >
          {/* eventKey defines the value of the event in NavItem
        onSelect is the function that is invoked when a item is selected
        and eventKey is passed as argument to selected item
         */}
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WF">Womens Formalwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MF">Mens Formalwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MC">Mens Casualwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WC">Womens Casualwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="WFT">Womens Footwear</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="MFT">Mens Footwear</NavDropdown.Item>
        </NavDropdown>
        {/* Dropdown to filter by Rating */}
        <NavDropdown
          //   onSelect={(e) => store.ratingHandler(e)}
          title="Rating"
          id="navbarScrollingRating"
        >
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="BelowFour">Below 4</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoFourAndHalf">4-4.5</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="AboveFourAndHalf">
            Above 4.5
          </NavDropdown.Item>
        </NavDropdown>
        {/* Dropdown to filter by Price */}
        <NavDropdown
          //   onSelect={(e) => store.priceHandler(e)}
          title="Price"
          id="navbarScrollingPrice"
        >
          <NavDropdown.Item eventKey="ALL">---</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoFifty">Rs 1 - Rs 50</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="UptoOneFifty">
            Rs 50 - Rs 150
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="AboveOneFifty">
            Above Rs 150
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav>
        {/* Dropdown to sort Elements */}

        <div style={{ width: 230, border: "1px solid black" }}>
          <span style={{ display: "inline-block", padding: 8 }}>
            Sort By:
            <select
              aria-label="Default select example"
              //   onChange={(e) => {
              //     store.sortHandler(e.target.value);
              //   }}
              style={{
                border: 0,
                display: "inline-block",
                outline: 0,
                fontWeight: "bold",
              }}
            >
              <option value="NoSort">Recommended</option>
              <option value="Name">Name</option>
              <option value="Category">Category</option>
              <option value="Price">Price</option>
            </select>
          </span>
        </div>
      </Nav>
    </>
  );
}
