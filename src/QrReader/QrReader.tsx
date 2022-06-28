import useScanner from "hooks/useScanner";
import React, { useRef } from "react";
import ViewFinder from "ViewFinder/ViewFinder";
import { QrReaderProps, ScannerSettings } from "../interfaces/index";
import styles from "./QrReader.module.css";

const QrReader = (props: QrReaderProps) => {
  const vid = useRef<HTMLVideoElement>(null);

  const scannerSettings: ScannerSettings = {
    color: props.config?.qrColor,
    onResult: props.onResult,
    onError: props.onError,
    maxScansPerSecond: props.config?.maxScansPerSecond,
  };

  useScanner(vid, scannerSettings);

  const videoClasses = `${props.centered && styles.centered} ${
    props["full-width"] && styles["full-width"]
  }`;

  let viewFinder;

  if (props.viewFinderConfig?.visible)
    viewFinder = props.viewFinderConfig.custom ? (
      props.viewFinderConfig.custom
    ) : (
      <ViewFinder {...props.viewFinderConfig} />
    );

  return (
    <div style={props.styles?.container}>
      <div className={styles.container} style={props.styles?.videoContainer}>
        <>{viewFinder}</>
        <video
          style={props.styles?.video}
          className={`${styles.video} ${videoClasses}`}
          ref={vid}
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};
export default QrReader;
