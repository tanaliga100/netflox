import React from "react";

type Props = {};

const useAuth = (props: Props) => {
  const [user, setUser] = React.useState();
  return user;
};

export default useAuth;
