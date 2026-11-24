import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteEndpointRequest = {
  /** The Amazon Resource Number (ARN) of the endpoint being deleted. */
  endpointArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteEndpointRequestSchema: Schema<DeleteEndpointRequest> = s.object<DeleteEndpointRequest>(
  {
    endpointArn: s.string(),
    _keysMap: {
      endpointArn: "EndpointArn",
    },
  },
  { additionalProperties: s.json() },
);
