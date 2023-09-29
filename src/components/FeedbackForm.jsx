import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./FeedbackForm.module.scss";

const validationSchema = Yup.object({
  title: Yup.string().required().min(3),
  feedback: Yup.string().required().min(3),
});

const FeedbackForm = () => {
  const handleSubmit = (values, formikHelpers) => {
    alert("woohoo");
    console.log(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        title: "",
        feedback: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.row}>
          <Field name="title" placeholder="Title..." className={styles.input} />
          <ErrorMessage name="title" />
        </div>
        <div className={styles.row}>
          <Field
            name="feedback"
            placeholder="Feedback..."
            component="textarea"
            className={styles.input}
          />
          <ErrorMessage name="feedback" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
