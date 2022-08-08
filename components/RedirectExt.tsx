import React, { useEffect } from "react";

const RedirectExt = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};

export default RedirectExt;
