import React, { useState } from "react";
import QrReader from "../QrReader/QrReader";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ViewFinder } from "viewFinders/ViewFinder";

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

  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  return (
    <div style={styles.container}>
      <QrReader
        {...args}
        styles={{
          video : {

          },
          videoContainer : {

          },
          container : {
            
          }
        }}
      />
      <p>The value is: {JSON.stringify(data, null, 2)}</p>
      <p>The error is: {error}</p>
    </div>
  );
};

export const QrReaderMain = QrReaderTemplate.bind({});

QrReaderMain.args = {
  ViewFinder,
};
