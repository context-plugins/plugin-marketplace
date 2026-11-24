import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetTypeAmazonRekognitionProjectApiSchema,
  type DatasetTypeAmazonRekognitionProjectApi,
} from "./dataset-type-amazon-rekognition-project-api.js";
import {
  statusAmazonRekognitionProjectApiSchema,
  type StatusAmazonRekognitionProjectApi,
} from "./status-amazon-rekognition-project-api.js";
import { statusMessageCodeSchema, type StatusMessageCode } from "./status-message-code.js";

export type DatasetMetadata = {
  /** The Unix timestamp for the date and time that the dataset was created. */
  creationTimestamp?: Date;
  /** The type of the dataset. */
  datasetType?: DatasetTypeAmazonRekognitionProjectApi;
  /** The Amazon Resource Name (ARN) for the dataset. */
  datasetArn?: string;
  /** The status for the dataset. */
  status?: StatusAmazonRekognitionProjectApi;
  /** The status message for the dataset. */
  statusMessage?: string;
  /**
   * The status message code for the dataset operation. If a service error occurs, try the API call
   * again later. If a client error occurs, check the input parameters to the dataset API call that
   * failed.
   */
  statusMessageCode?: StatusMessageCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetMetadataSchema: Schema<DatasetMetadata> = s.object<DatasetMetadata>(
  {
    creationTimestamp: s.optional(s.dateTime()),
    datasetType: s.optional(s.lazy(() => datasetTypeAmazonRekognitionProjectApiSchema)),
    datasetArn: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusAmazonRekognitionProjectApiSchema)),
    statusMessage: s.optional(s.string()),
    statusMessageCode: s.optional(s.lazy(() => statusMessageCodeSchema)),
    _keysMap: {
      creationTimestamp: "CreationTimestamp",
      datasetType: "DatasetType",
      datasetArn: "DatasetArn",
      status: "Status",
      statusMessage: "StatusMessage",
      statusMessageCode: "StatusMessageCode",
    },
  },
  { additionalProperties: s.json() },
);
