import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelType1Schema, type ModelType1 } from "./model-type1.js";
import { status6Schema, type Status6 } from "./status6.js";

export type FlywheelSummary = {
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  /** ARN of the active model version for the flywheel. */
  activeModelArn?: string;
  /** Amazon S3 URI of the data lake location. */
  dataLakeS3Uri?: string;
  /** The status of the flywheel. */
  status?: Status6;
  /** Model type of the flywheel's model. */
  modelType?: ModelType1;
  /** A description of the status of the flywheel. */
  message?: string;
  /** Creation time of the flywheel. */
  creationTime?: Date;
  /** Last modified time for the flywheel. */
  lastModifiedTime?: Date;
  /** The most recent flywheel iteration. */
  latestFlywheelIteration?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flywheelSummarySchema: Schema<FlywheelSummary> = s.object<FlywheelSummary>(
  {
    flywheelArn: s.optional(s.string()),
    activeModelArn: s.optional(s.string()),
    dataLakeS3Uri: s.optional(s.string()),
    status: s.optional(s.lazy(() => status6Schema)),
    modelType: s.optional(s.lazy(() => modelType1Schema)),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModifiedTime: s.optional(s.dateTime()),
    latestFlywheelIteration: s.optional(s.string()),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      activeModelArn: "ActiveModelArn",
      dataLakeS3Uri: "DataLakeS3Uri",
      status: "Status",
      modelType: "ModelType",
      message: "Message",
      creationTime: "CreationTime",
      lastModifiedTime: "LastModifiedTime",
      latestFlywheelIteration: "LatestFlywheelIteration",
    },
  },
  { additionalProperties: s.json() },
);
