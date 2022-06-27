import QrScanner from "qr-scanner";
import React, { useEffect, useRef } from "react";
import { ViewFinder } from "viewFinders/ViewFinder";
import { QrReaderProps } from "../interfaces/index";
import styles from "./QrReader.module.css";

const QrReader = (props: QrReaderProps) => {
  const vid = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (vid.current) {
      const qrScanner = new QrScanner(
        vid.current,
        (result) => console.log("decoded qr code:", result)
        // No options provided. This will use the old api and is deprecated in the current version until next major version.
      );
      qrScanner.start();

      return () => {
        qrScanner.stop();
      };
    }

    return;
  }, [vid.current]);

  return (
    <section>
      <div className={styles.container}>
        {!!ViewFinder && <ViewFinder />}
        <video className={styles.video} ref={vid}></video>
      </div>
    </section>
  );
};
export default QrReader;
