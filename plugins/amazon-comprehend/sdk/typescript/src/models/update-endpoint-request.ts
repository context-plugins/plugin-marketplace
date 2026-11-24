import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateEndpointRequest = {
  /** The Amazon Resource Number (ARN) of the endpoint being updated. */
  endpointArn: string;
  /** The ARN of the new model to use when updating an existing endpoint. */
  desiredModelArn?: string;
  /**
   * The desired number of inference units to be used by the model using this endpoint. Each
   * inference unit represents of a throughput of 100 characters per second.
   */
  desiredInferenceUnits?: number;
  /** Data access role ARN to use in case the new model is encrypted with a customer CMK. */
  desiredDataAccessRoleArn?: string;
  /** The Amazon Resource Number (ARN) of the flywheel */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateEndpointRequestSchema: Schema<UpdateEndpointRequest> = s.object<UpdateEndpointRequest>(
  {
    endpointArn: s.string(),
    desiredModelArn: s.optional(s.string()),
    desiredInferenceUnits: s.optional(s.int()),
    desiredDataAccessRoleArn: s.optional(s.string()),
    flywheelArn: s.optional(s.string()),
    _keysMap: {
      endpointArn: "EndpointArn",
      desiredModelArn: "DesiredModelArn",
      desiredInferenceUnits: "DesiredInferenceUnits",
      desiredDataAccessRoleArn: "DesiredDataAccessRoleArn",
      flywheelArn: "FlywheelArn",
    },
  },
  { additionalProperties: s.json() },
);
