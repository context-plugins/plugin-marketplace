import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetChanges = {
  /**
   * A Base64-encoded binary data object containing one or JSON lines that either update the dataset
   * or are additions to the dataset. You change a dataset by calling UpdateDatasetEntries. If you
   * are using an AWS SDK to call UpdateDatasetEntries, you don't need to encode Changes as the SDK
   * encodes the data for you. For example JSON lines, see Image-Level labels in manifest files and
   * and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer
   * Guide.
   */
  groundTruth: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetChangesSchema: Schema<DatasetChanges> = s.object<DatasetChanges>(
  {
    groundTruth: s.string(),
    _keysMap: {
      groundTruth: "GroundTruth",
    },
  },
  { additionalProperties: s.json() },
);
