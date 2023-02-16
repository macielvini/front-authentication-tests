import { Container, StyledForm } from "./styles";

export default function Form({ title, subtitle, children, footer, ...rest }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <StyledForm {...rest}>{children}</StyledForm>
      <p className="footer">
        <span>{footer}</span>
      </p>
    </Container>
  );
}
