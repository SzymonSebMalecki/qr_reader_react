import { CSSProperties } from "react";
import QrScanner from "qr-scanner";

export interface QrReaderProps {
  viewFinderConfig?: ViewFinderConfig;
  loaderConfig?: LoaderConfig;
  onResult?: OnResultFunction;
  onError?: OnErrorFunction;
  styles?: QrReaderStyles;
  config?: {
    qrColor?: QrColor;
    maxScansPerSecond?: number;
    cameraPreference?: CameraPreference;
  };
  "full-width"?: boolean;
}
export interface ViewFinderProps {
  outerColor?: string;
  strokeWidth?: string;
  borderColor?: string;
  radius?: string;
  length?: string;
}
export interface ViewFinderConfig extends ViewFinderProps {
  visible?: boolean;
  custom?: React.JSXElementConstructor<any>;
}

export interface LoaderConfig {
  visible?: boolean;
  custom?: React.JSXElementConstructor<any>;
}

export type QrReaderStyles = {
  video?: CSSProperties;
  videoContainer?: CSSProperties;
  container?: CSSProperties;
};
export type ScannerSettings = {
  color: QrColor | undefined;
  onResult: OnResultFunction | undefined;
  onError: OnErrorFunction | undefined;
  maxScansPerSecond: number | undefined;
};

export type QrColor = "dark" | "light" | "both";
export type OnResultFunction = (result: QrScanner.ScanResult) => void;
export type OnErrorFunction = (error: ScanError) => void;
export type CameraPreference = QrScanner.FacingMode | QrScanner.DeviceId;

export type UseScanner = (
  vid: React.RefObject<HTMLVideoElement>,
  scannerSettings: ScannerSettings
) => void;

export type ScanResult = QrScanner.ScanResult;
export type ScanError = Error | string;
