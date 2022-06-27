import useScanner from "hooks/useScanner";
import QrScanner from "qr-scanner";
import React, { useEffect, useRef } from "react";
import { ViewFinder } from "viewFinders/ViewFinder";
import { QrReaderProps, ScannerSettings } from "../interfaces/index";
import styles from "./QrReader.module.css";

const QrReader = (props: QrReaderProps) => {
  const vid = useRef<HTMLVideoElement>(null);

  const scannerSettings: ScannerSettings = {
    color: props.qrColor,
    onResult: props.onResult,
    onError: props.onError,
    maxScansPerSecond: props.maxScansPerSecond
  };

  useScanner(vid, scannerSettings);

  return (
    <section>
      <div className={styles.container}>
        {!!ViewFinder && <ViewFinder />}
        <video
          style={{ transform: `translateX(50%)` }}
          className={styles.video}
          ref={vid}
        ></video>
      </div>
    </section>
  );
};
export default QrReader;
