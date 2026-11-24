import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSecurityConfigSchema, type DataSecurityConfig } from "./data-security-config.js";
import { modelType1Schema, type ModelType1 } from "./model-type1.js";
import { status6Schema, type Status6 } from "./status6.js";
import { taskConfigSchema, type TaskConfig } from "./task-config.js";

export type FlywheelProperties = {
  /** The Amazon Resource Number (ARN) of the flywheel. */
  flywheelArn?: string;
  /** The Amazon Resource Number (ARN) of the active model version. */
  activeModelArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to
   * access the flywheel data.
   */
  dataAccessRoleArn?: string;
  taskConfig?: TaskConfig;
  /** Amazon S3 URI of the data lake location. */
  dataLakeS3Uri?: string;
  dataSecurityConfig?: DataSecurityConfig;
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

export const flywheelPropertiesSchema: Schema<FlywheelProperties> = s.object<FlywheelProperties>(
  {
    flywheelArn: s.optional(s.string()),
    activeModelArn: s.optional(s.string()),
    dataAccessRoleArn: s.optional(s.string()),
    taskConfig: s.optional(s.lazy(() => taskConfigSchema)),
    dataLakeS3Uri: s.optional(s.string()),
    dataSecurityConfig: s.optional(s.lazy(() => dataSecurityConfigSchema)),
    status: s.optional(s.lazy(() => status6Schema)),
    modelType: s.optional(s.lazy(() => modelType1Schema)),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModifiedTime: s.optional(s.dateTime()),
    latestFlywheelIteration: s.optional(s.string()),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      activeModelArn: "ActiveModelArn",
      dataAccessRoleArn: "DataAccessRoleArn",
      taskConfig: "TaskConfig",
      dataLakeS3Uri: "DataLakeS3Uri",
      dataSecurityConfig: "DataSecurityConfig",
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
