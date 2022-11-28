import React, { useEffect } from "react";
import SharedInput from "../../Components/SharedInput";
import SharedButton from "../../Components/SharedButton";
import { useForm } from "react-hook-form";
import styles from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/Users/thunks";

const Users = () => {
  const dispatch = useDispatch();

  const { isLoading, users: usersList, error } = useSelector((state) => state);

  console.log(usersList, "USUARIOS");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div>Test</div>
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
          type="number"
          name="quantity"
          label="Cantidad"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Cantidad es requerido",
          }}
          required
        />

        <div>
          <SharedButton className={styles.confirm} type="submit" name="Enviar">
            Confirm
          </SharedButton>
        </div>
      </form>

      <ul>
        {usersList.map((product) => {
          return <li key={product.id}>{(product.id, product.description)}</li>;
        })}
      </ul>
    </>
  );
};

export default Users;
