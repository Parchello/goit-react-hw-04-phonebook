import { Formik, Field } from 'formik';
import { Wrapper, Error, LabelName, Button } from './PhoneBook.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d{7}$/, 'Exactly 7 numbers')
    .required('Required'),
});

export const PhoneBook = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Wrapper>
          <LabelName>Name</LabelName>
          <Field id="firstName" name="name" placeholder="Place name here" />
          <Error name="name" component="span" />

          <LabelName>Number</LabelName>
          <Field
            id="number"
            name="number"
            type="number"
            placeholder="Phone number"
          />
          <Error name="number" component="span" />

          <Button type="submit">Add contact</Button>
        </Wrapper>
      </Formik>
    </div>
  );
};
