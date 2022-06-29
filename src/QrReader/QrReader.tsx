import useScanner from "hooks/useScanner";
import React, { useRef } from "react";
import ViewFinder from "ViewFinder/ViewFinder";
import {
  QrReaderProps,
  ScannerSettings,
  ViewFinderConfig,
} from "../interfaces/index";
import styles from "./QrReader.module.css";

const selectViewFinder = (viewFinderConfig: ViewFinderConfig) => {
  return viewFinderConfig.custom ? (
    viewFinderConfig.custom
  ) : (
    <ViewFinder {...viewFinderConfig} />
  );
};

const QrReader = (props: QrReaderProps) => {
  const vid = useRef<HTMLVideoElement>(null);

  const scannerSettings: ScannerSettings = {
    color: props.config?.qrColor,
    onResult: props.onResult,
    onError: props.onError,
    maxScansPerSecond: props.config?.maxScansPerSecond,
  };

  useScanner(vid, scannerSettings);

  const viewFinder =
    props.viewFinderConfig?.visible && selectViewFinder(props.viewFinderConfig);

  return (
    <div style={props.styles?.container}>
      <div className={styles.container} style={props.styles?.videoContainer}>
        <>{viewFinder}</>
        <video
          style={props.styles?.video}
          className={`${styles.video} ${
            props["full-width"] && styles["full-width"]
          }`}
          ref={vid}
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};
export default QrReader;
