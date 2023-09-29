import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./App.module.scss";

const validationSchema = Yup.object({
  title: Yup.string().required().min(3),
  feedback: Yup.string().required().min(3),
});

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values, formikHelpers) => {
    formikHelpers.resetForm();
    handleClose();
  };

  return (
    <div className={styles.form}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign up form</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            To sign up please enter your name, email and password.
          </DialogContentText>
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
                <Field
                  name="Name"
                  placeholder="Name..."
                  className={styles.input}
                />
                <ErrorMessage name="feedback" />
              </div>
              <div className={styles.row}>
                <Field
                  name="email"
                  placeholder="Email..."
                  className={styles.input}
                />
                <ErrorMessage name="feedback" />
              </div>
              <div className={styles.row}>
                <Field
                  name="password"
                  placeholder="Password..."
                  className={styles.input}
                />
                <ErrorMessage name="feedback" />
              </div>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
