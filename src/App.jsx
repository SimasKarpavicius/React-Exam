import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./App.module.scss";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string().required("Email is required").min(3),
  password: Yup.string().required("Password is required").min(3),
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
      <div className={styles.centeredcontainer}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Sign Up
        </Button>
      </div>
      <Dialog
        sx={{
          backdropFilter: "blur(5px)",
        }}
        PaperProps={{ sx: { borderRadius: "15px" } }}
        open={open}
        onClose={handleClose}
        maxWidth="xl"
      >
        <DialogContent className={styles.container}>
          <div className={styles.lefthalf}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.righthalf}>
            <div className={styles.content}>
              <h2>Get started</h2>

              <p>Already have an account?</p>
              <a href="http://">Log in</a>
            </div>
            <div className={styles.socialbuttons}>
              <Button
                href="http://google.lt"
                variant="outlined"
                startIcon={<BsGoogle />}
                fullWidth
              >
                Sign up
              </Button>
              <Button
                sx={{
                  backgroundColor: "#9ab5f0",
                }}
                href="http://facebook.com"
                variant="outlined"
                startIcon={<BsFacebook />}
                fullWidth
              >
                Sign up
              </Button>
            </div>
            <div className={styles.breakingpoint}>
              <h3>Or</h3>
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className={styles.row}>
                  <InputLabel htmlFor="name" sx={{ fontSize: "12px" }}>
                    Name
                  </InputLabel>
                  <Field
                    size="small"
                    component={TextField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BsPersonFillCheck />
                        </InputAdornment>
                      ),
                    }}
                    name="name"
                    placeholder="Name..."
                    className={styles.input}
                  />
                  <ErrorMessage name="name" />
                </div>
                <div className={styles.row}>
                  <InputLabel htmlFor="email" sx={{ fontSize: "12px" }}>
                    Email
                  </InputLabel>
                  <Field
                    size="small"
                    component={TextField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdOutlineAlternateEmail />
                        </InputAdornment>
                      ),
                    }}
                    name="email"
                    placeholder="Email..."
                    className={styles.input}
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className={styles.row}>
                  <InputLabel htmlFor="password" sx={{ fontSize: "12px" }}>
                    Password
                  </InputLabel>
                  <Field
                    size="small"
                    component={TextField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RiLockPasswordLine />
                        </InputAdornment>
                      ),
                    }}
                    name="password"
                    type="password"
                    placeholder="Password..."
                    className={styles.input}
                  />
                  <ErrorMessage name="password" />
                </div>

                <Button
                  sx={{
                    backgroundColor: "#4F70B5",
                  }}
                  variant="contained"
                  className={styles.submit}
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Form>
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
