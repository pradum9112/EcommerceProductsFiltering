
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  border-bottom: 2px solid #f3f3f3;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 999;
  margin-left: 12rem;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  margin-right: 20px;
  border-radius: 5px;
  position: relative;
  width: 14rem;
`;



const Nav = ({ handleInputChange, query }) => {
  return (
    <NavContainer>
      <div className="nav-container">
        <SearchInput
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      
    </NavContainer>
  );
};

export default Nav;
