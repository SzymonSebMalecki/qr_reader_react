import QrScanner from "qr-scanner";
import React, { useEffect } from "react";

const useScanner = (vid: React.RefObject<HTMLVideoElement>) => {
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
};

export default useScanner;
