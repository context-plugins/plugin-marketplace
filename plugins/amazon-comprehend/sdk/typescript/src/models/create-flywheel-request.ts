import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSecurityConfigSchema, type DataSecurityConfig } from "./data-security-config.js";
import { modelTypeSchema, type ModelType } from "./model-type.js";
import { tagSchema, type Tag } from "./tag.js";
import { taskConfigSchema, type TaskConfig } from "./task-config.js";

export type CreateFlywheelRequest = {
  /** Name for the flywheel. */
  flywheelName: string;
  /**
   * To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of
   * the model version. Do not set TaskConfig or ModelType if you specify an ActiveModelArn.
   */
  activeModelArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions
   * required to access the flywheel data in the data lake.
   */
  dataAccessRoleArn: string;
  taskConfig?: TaskConfig;
  /** The model type. You need to set ModelType if you are creating a flywheel for a new model. */
  modelType?: ModelType;
  /**
   * Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an
   * existing S3 bucket. The flywheel creates the data lake at this location.
   */
  dataLakeS3Uri: string;
  dataSecurityConfig?: DataSecurityConfig;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /** The tags to associate with this flywheel. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFlywheelRequestSchema: Schema<CreateFlywheelRequest> = s.object<CreateFlywheelRequest>(
  {
    flywheelName: s.string(),
    activeModelArn: s.optional(s.string()),
    dataAccessRoleArn: s.string(),
    taskConfig: s.optional(s.lazy(() => taskConfigSchema)),
    modelType: s.optional(s.lazy(() => modelTypeSchema)),
    dataLakeS3Uri: s.string(),
    dataSecurityConfig: s.optional(s.lazy(() => dataSecurityConfigSchema)),
    clientRequestToken: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      flywheelName: "FlywheelName",
      activeModelArn: "ActiveModelArn",
      dataAccessRoleArn: "DataAccessRoleArn",
      taskConfig: "TaskConfig",
      modelType: "ModelType",
      dataLakeS3Uri: "DataLakeS3Uri",
      dataSecurityConfig: "DataSecurityConfig",
      clientRequestToken: "ClientRequestToken",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
