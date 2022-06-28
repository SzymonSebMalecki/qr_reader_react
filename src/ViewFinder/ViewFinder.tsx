import react from "react";
import style from "./ViewFinder.module.css";

const ViewFinder = ({
  outerColor = "#00000000",
  strokeWidth = "3px",
  borderColor = "#000",
  radius = "5px",
  length = "40px",
}) => {
  const styleVars = {
    "--border-color": borderColor,
    "--border-radius": radius,
    "--width": strokeWidth,
    "--length": length,
    "--outer-color": outerColor,
  } as React.CSSProperties;

  return (
    <div className={style.viewFinder} style={styleVars}>
      <div style={styleVars}></div>
    </div>
  );
};

export default ViewFinder;
