import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10px;
  padding: 4px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 8px;
`;

export const LabelName = styled.label`
  margin-bottom: 4px;
`;

export const Button = styled.button`
  margin-top: 10px;
  &:hover {
    background-color: darkgray;
  }
`;
