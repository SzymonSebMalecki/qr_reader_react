import { CSSProperties } from "react";
import QrScanner from "qr-scanner";

export interface QrReaderProps {
  ViewFinder?: React.JSXElementConstructor<any>;
  onResult?: OnResultFunction;
  onError?: OnErrorFunction;
  styles?: QrReaderStyles;
  config?: {
    qrColor?: QrColor;
    maxScansPerSecond?: number;
    cameraPreference?: CameraPreference;
  };
  "full-width"?: boolean;
  centered?: boolean;
}

export interface QrReaderStyles {
  video?: CSSProperties;
  videoContainer?: CSSProperties;
  container?: CSSProperties;
}

export type QrColor = "dark" | "light" | "both";
export type OnResultFunction = (result: QrScanner.ScanResult) => void;
export type OnErrorFunction = (error: ScanError) => void;
export type CameraPreference = QrScanner.FacingMode | QrScanner.DeviceId;

export type UseScanner = (
  vid: React.RefObject<HTMLVideoElement>,
  scannerSettings: ScannerSettings
) => void;

export interface ScannerSettings {
  color: QrColor | undefined;
  onResult: OnResultFunction | undefined;
  onError: OnErrorFunction | undefined;
  maxScansPerSecond: number | undefined;
}

export type ScanResult = QrScanner.ScanResult;
export type ScanError = Error | string;
