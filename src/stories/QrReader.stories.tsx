import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ViewFinder } from "viewFinders/ViewFinder";
import QrReader from "../QrReader/QrReader";
import { ScanError, ScanResult } from "interfaces";

const styles = {
  container: {
    width: "400px",
    margin: "auto",
  },
};

export default {
  title: "QrReader",
  component: QrReader,
} as ComponentMeta<typeof QrReader>;

//👇 We create a “template” of how args map to rendering
const QrReaderTemplate: ComponentStory<typeof QrReader> = (args) => {
  // <QrReader {...args} />

  const [error, setError] = useState<ScanError | undefined>(undefined);
  const [data, setData] = useState<ScanResult | undefined>(undefined);

  return (
    <div style={styles.container}>
      <QrReader
        {...args}
        styles={{
          video: {},
          videoContainer: {},
          container: {},
        }}
        // onResult={(result) => {
        //   setData(result);
        // }}
        // onError={(error) => {
        //   setError(error);
        // }}
      />
      <p>The value is: {JSON.stringify(data, null, 2)}</p>
      {/* <p>The error is: {console.log(error)}</p> */}
    </div>
  );
};

export const QrReaderMain = QrReaderTemplate.bind({});

QrReaderMain.args = {
  ViewFinder,
};
