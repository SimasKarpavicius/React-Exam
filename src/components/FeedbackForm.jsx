import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FeedbackForm.module.scss";

const validationSchema = Yup.object({
  title: Yup.string().required().min(3),
  feedback: Yup.string().required().min(3),
});

const FeedbackForm = () => {
  const handleSubmit = (values, formikHelpers) => {
    alert("yeahhh");
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        feedback: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.row}>
          <Field name="Name" placeholder="Name..." className={styles.input} />
          <ErrorMessage name="name" />
        </div>
        <div className={styles.row}>
          <Field
            name="feedback"
            placeholder="Feedback..."
            className={styles.input}
          />
          <ErrorMessage name="name" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
