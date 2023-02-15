import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Inter', sans-serif;
  }

  ol, ul {
	  list-style: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 200ms;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`;
