import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetType2Schema, type DatasetType2 } from "./dataset-type2.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DatasetProperties = {
  /** The ARN of the dataset. */
  datasetArn?: string;
  /** The name of the dataset. */
  datasetName?: string;
  /** The dataset type (training data or test data). */
  datasetType?: DatasetType2;
  /** The S3 URI where the dataset is stored. */
  datasetS3Uri?: string;
  /** Description of the dataset. */
  description?: string;
  /**
   * The dataset status. While the system creates the dataset, the status is CREATING. When the
   * dataset is ready to use, the status changes to COMPLETED.
   */
  status?: Status1;
  /** A description of the status of the dataset. */
  message?: string;
  /** The number of documents in the dataset. */
  numberOfDocuments?: number;
  /** Creation time of the dataset. */
  creationTime?: Date;
  /** Time when the data from the dataset becomes available in the data lake. */
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetPropertiesSchema: Schema<DatasetProperties> = s.object<DatasetProperties>(
  {
    datasetArn: s.optional(s.string()),
    datasetName: s.optional(s.string()),
    datasetType: s.optional(s.lazy(() => datasetType2Schema)),
    datasetS3Uri: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
    message: s.optional(s.string()),
    numberOfDocuments: s.optional(s.int()),
    creationTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      datasetArn: "DatasetArn",
      datasetName: "DatasetName",
      datasetType: "DatasetType",
      datasetS3Uri: "DatasetS3Uri",
      description: "Description",
      status: "Status",
      message: "Message",
      numberOfDocuments: "NumberOfDocuments",
      creationTime: "CreationTime",
      endTime: "EndTime",
    },
  },
  { additionalProperties: s.json() },
);
