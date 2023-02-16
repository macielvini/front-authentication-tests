import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const HalfContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  width: 50vw;
  min-height: 100vh;

  .img-container {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
