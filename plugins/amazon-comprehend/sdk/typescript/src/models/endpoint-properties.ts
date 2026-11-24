import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type EndpointProperties = {
  /** The Amazon Resource Number (ARN) of the endpoint. */
  endpointArn?: string;
  /**
   * Specifies the status of the endpoint. Because the endpoint updates and creation are
   * asynchronous, so customers will need to wait for the endpoint to be Ready status before making
   * inference requests.
   */
  status?: Status3;
  /** Specifies a reason for failure in cases of Failed status. */
  message?: string;
  /** The Amazon Resource Number (ARN) of the model to which the endpoint is attached. */
  modelArn?: string;
  /**
   * ARN of the new model to use for updating an existing endpoint. This ARN is going to be
   * different from the model ARN when the update is in progress
   */
  desiredModelArn?: string;
  /**
   * The desired number of inference units to be used by the model using this endpoint. Each
   * inference unit represents of a throughput of 100 characters per second.
   */
  desiredInferenceUnits?: number;
  /** The number of inference units currently used by the model using this endpoint. */
  currentInferenceUnits?: number;
  /** The creation date and time of the endpoint. */
  creationTime?: Date;
  /** The date and time that the endpoint was last modified. */
  lastModifiedTime?: Date;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * trained custom models encrypted with a customer managed key (ModelKmsKeyId).
   */
  dataAccessRoleArn?: string;
  /** Data access role ARN to use in case the new model is encrypted with a customer KMS key. */
  desiredDataAccessRoleArn?: string;
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointPropertiesSchema: Schema<EndpointProperties> = s.object<EndpointProperties>(
  {
    endpointArn: s.optional(s.string()),
    status: s.optional(s.lazy(() => status3Schema)),
    message: s.optional(s.string()),
    modelArn: s.optional(s.string()),
    desiredModelArn: s.optional(s.string()),
    desiredInferenceUnits: s.optional(s.int()),
    currentInferenceUnits: s.optional(s.int()),
    creationTime: s.optional(s.dateTime()),
    lastModifiedTime: s.optional(s.dateTime()),
    dataAccessRoleArn: s.optional(s.string()),
    desiredDataAccessRoleArn: s.optional(s.string()),
    flywheelArn: s.optional(s.string()),
    _keysMap: {
      endpointArn: "EndpointArn",
      status: "Status",
      message: "Message",
      modelArn: "ModelArn",
      desiredModelArn: "DesiredModelArn",
      desiredInferenceUnits: "DesiredInferenceUnits",
      currentInferenceUnits: "CurrentInferenceUnits",
      creationTime: "CreationTime",
      lastModifiedTime: "LastModifiedTime",
      dataAccessRoleArn: "DataAccessRoleArn",
      desiredDataAccessRoleArn: "DesiredDataAccessRoleArn",
      flywheelArn: "FlywheelArn",
    },
  },
  { additionalProperties: s.json() },
);
