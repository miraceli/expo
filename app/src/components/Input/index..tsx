import { Container, InputStyled } from "./styles";

interface InputProps {
  label: string;
  uri: string;
  onChange: Function;
}

export default function Input(props: InputProps) {
  return (
    <Container>
      <label>{props.label}</label>
      <InputStyled
        required
        name={props.uri}
        onChange={() => {}}
      />
    </Container>
  );
}
