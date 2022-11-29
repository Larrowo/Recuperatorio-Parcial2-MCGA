import React, { useEffect } from "react";
import SharedInput from "../../Components/SharedInput";
import SharedButton from "../../Components/SharedButton";
import { useForm } from "react-hook-form";
import styles from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, postUsers } from "../../Redux/Users/thunks";

const Users = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    users: usersList,
    error,
    message,
  } = useSelector((state) => state);
  console.log(usersList, "USUARIOS");

  useEffect(() => {
    if (!usersList.length) {
      dispatch(getUsers());
      console.log("use effect ejecutado");
    }
  }, [usersList]);

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }

    data.age = getAge(data.birthDate);

    console.log(data);
    dispatch(postUsers(data));
  };

  if (isLoading) {
    return <p>LOADING....</p>;
  }

  return (
    <>
      <div>INGRESE LOS DATOS DEL USUARIO</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SharedInput
          type="text"
          name="name"
          label="Nombre"
          errors={errors}
          register={register}
          validationSchema={{
            required: "El nombre es requerido",
            minLength: {
              value: 3,
              message: "Por favor ingrese al menos 3 caracteres",
            },
          }}
          required
        />
        <SharedInput
          type="text"
          name="surname"
          label="Apellido"
          errors={errors}
          register={register}
          validationSchema={{
            required: "El apellido es requerido",
            minLength: {
              value: 3,
              message: "Por favor ingrese al menos 3 caracteres",
            },
          }}
          required
        />
        <SharedInput
          type="date"
          name="birthDate"
          label="Fecha de nacimiento"
          errors={errors}
          register={register}
          validationSchema={{
            required: "fecha de nacimiento es requerido",
          }}
          required
        />
        <SharedInput
          type="number"
          name="dni"
          label="DNI"
          errors={errors}
          register={register}
          validationSchema={{
            required: "DNI es requerido",
          }}
          required
        />
        <SharedInput
          type="text"
          name="nationality"
          label="nacionalidad"
          errors={errors}
          register={register}
          validationSchema={{
            required: "La nacionalidad es requerida",
            minLength: {
              value: 3,
              message: "Por favor ingrese al menos 3 caracteres",
            },
          }}
          required
        />
        <SharedInput
          type="text"
          name="email"
          label="email"
          errors={errors}
          register={register}
          validationSchema={{
            required: "El emial es requerido",
            minLength: {
              value: 3,
              message: "Por favor ingrese al menos 3 caracteres",
            },
          }}
          required
        />
        <SharedInput
          type="text"
          name="password"
          label="contraseña"
          errors={errors}
          register={register}
          validationSchema={{
            required: "La contraseña es requerida",
            minLength: {
              value: 3,
              message: "Por favor ingrese al menos 3 caracteres",
            },
          }}
          required
        />

        <div>
          <SharedButton className={styles.button} type="submit" name="Enviar">
            Confirm
          </SharedButton>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th className={styles.textLeft}>Nombre</th>
            <th className={styles.textLeft}>Apellido</th>
            <th className={styles.textLeft}>Fecha de nacimiento</th>
            <th className={styles.textLeft}>DNI</th>
            <th className={styles.textLeft}>Edad</th>
            <th className={styles.textLeft}>Nacionalidad</th>
            <th className={styles.textLeft}>Email</th>
            <th className={styles.textLeft}>Contraseña</th>
            <th className={styles.button}></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user._id}>
                <td className={styles.textLeft}>{user.name}</td>
                <td className={styles.textLeft}>{user.surname}</td>
                <td className={styles.textLeft}>{user.birthDate}</td>
                <td className={styles.textLeft}>{user.DNI}</td>
                <td className={styles.textLeft}>{user.age}</td>
                <td className={styles.textLeft}>{user.nationality}</td>
                <td className={styles.textLeft}>{user.email}</td>
                <td className={styles.textLeft}>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        {usersList.map((user) => {
          return (
            <li key={user._id}>
              {user.name} {user.surname}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Users;
