import styled from "styled-components";
import Category from "./Category/Category";
import Price from "./Price/Price";

const SidebarContainer = styled.section`
  width: 15%;
  position: fixed;
  height: 100%;
  border-right: 2px solid #e5e5e5;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 4rem;
  margin-top: 1.3rem;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
`;

const Sidebar = ({ handleChange }) => {
  // console.log(handleChange)
  return (
    <>
      <SidebarContainer>
        <LogoContainer>
          <LogoText>🛒</LogoText>
        </LogoContainer>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
