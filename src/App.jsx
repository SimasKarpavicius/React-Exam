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
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit feedback</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
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
                <Field
                  name="title"
                  placeholder="Title..."
                  className={styles.input}
                />
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
