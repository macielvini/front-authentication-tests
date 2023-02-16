import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 25px;

  * {
    width: 100%;
    height: 46px;
    border-radius: 15px;
  }

  input {
    font-size: ${({ theme }) => theme.FONT_SIZES.TEXT_NORMAL};
    border-color: ${({ theme }) => theme.COLORS.GRAY_700};

    padding: 5px 15px;
  }

  input:active {
    border: none;
    outline: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  width: 80%;

  h1 {
    font-size: ${({ theme }) => theme.FONT_SIZES.TITLE};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: ${({ theme }) => theme.FONT_SIZES.TEXT_SMALL};
    margin-bottom: 15px;
  }

  .footer {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    line-height: 0.1em;
    margin: 10px 0 20px;

    span {
      background: ${({ theme }) => theme.COLORS.WHITE};
      padding: 0 10px;
    }
  }
`;
