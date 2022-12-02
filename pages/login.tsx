import Head from "next/head";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import icon from "../assets/icon.png";
import useAuth from "../hooks/useAuth";

type Props = {};

interface Inputs {
  email: string;
  password: string;
}
const login = (props: Props) => {
  const [login, setLogin] = React.useState(false);
  const { signIn, signUp } = useAuth();
  React.useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
      resetField("email");
      resetField("password");
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br  from-black/90  to-transparent ">
      <Head>
        <title>Netflox - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-40 !hidden  opacity-60 sm:!inline"
        object-fit="cover"
        alt="asds"
      />
      <Image
        src={icon}
        width={150}
        height={200}
        alt="icon"
        className="cursor-pointer object-contain absolute top-1 left-1"
      />
      <form
        className="relative  mt-20 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:px-14 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Sign In</h1>
        <div className="space-y-4 ">
          <label htmlFor="" className="inline-block w-full">
            <input
              type="email"
              id=""
              className="input"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="font-light text-sm text-orange-600">
                This field is required
              </span>
            )}
          </label>
          <label htmlFor="" className="inline-block w-full">
            <input
              type="password"
              id=""
              className="input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="font-light text-sm text-orange-600">
                This field is required
              </span>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] p-1"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div>
          <small className="text-gray-400">New to Netflix ?</small>
          <button
            type="submit"
            className="rounded w-[80] px-2 font-bold text-sm hover:underline text-white/90"
            onClick={() => setLogin(false)}
          >
            Sign Up Right Now..
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
