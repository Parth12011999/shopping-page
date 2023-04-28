import React from "react";
import styled from "styled-components";

function Header() {
  const Container = styled.div`
    &:nth-child(1) {
      position: sticky;
      top: -53px;
    }
  `;
  const SmallText = styled.span`
    font-size: 0.9rem;
    color: black
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    font-weight: bold;
    `;

  const Top = styled.div`
    padding: 0px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Usermenu = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const Usermenulist = styled.li`
    padding: 0px 10px;
    list-style-type: none;
    font-size: 1.15rem;
    margin: 0 5px;
    position: relative;
    cursor: pointer;
    &::after {
      height: 2px;
      position: absolute;
      content: "";
      width: 0%;
      background-color: black;
      left: 0px;
      bottom: -5px;
      width: 0%;
      transition: 0.5s;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
  `;
  const Optionlist = styled.select`
    border: none;
    font-weight: bold;
  `;

  const Navigation = styled.div`
    padding: 10px 100px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: skyblue;
  `;
  const Logo = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: yellow;
  `;

  return (
    <Container>
      <Top>
        <SmallText>Order Online or Call us on 1234567890</SmallText>
        <Usermenu>
          <Usermenulist>
            <SmallText>Search</SmallText>
          </Usermenulist>
          <Usermenulist>
            <SmallText>Wishlist</SmallText>
          </Usermenulist>
          <Usermenulist>
            <SmallText>
              <Optionlist>
                <option value="">
                  <SmallText>USD</SmallText>
                </option>
                <option value="">
                  <SmallText>EUR</SmallText>
                </option>
                <option value="">
                  <SmallText>CAD</SmallText>
                </option>
              </Optionlist>
            </SmallText>
          </Usermenulist>
          <Usermenulist>
            <SmallText>My Account</SmallText>
          </Usermenulist>
        </Usermenu>
      </Top>
      <Navigation>
        <Logo> Parth </Logo>
        <Usermenu>
          <Usermenulist>Home</Usermenulist>
          <Usermenulist>Collection</Usermenulist>
          <Usermenulist>Catalog</Usermenulist>
          <Usermenulist>Sale</Usermenulist>
          <Usermenulist>Blog</Usermenulist>
          <Usermenulist>Contact Us</Usermenulist>
        </Usermenu>
        <Usermenu>
          <Usermenulist>
            <b>MY CART:</b>0 item(s)
          </Usermenulist>
        </Usermenu>
      </Navigation>
    </Container>
  );
}

export default Header;
