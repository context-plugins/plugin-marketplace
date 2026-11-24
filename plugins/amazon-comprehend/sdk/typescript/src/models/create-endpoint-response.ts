import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateEndpointResponse = {
  /** The Amazon Resource Number (ARN) of the endpoint being created. */
  endpointArn?: string;
  /** The Amazon Resource Number (ARN) of the model to which the endpoint is attached. */
  modelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEndpointResponseSchema: Schema<CreateEndpointResponse> = s.object<CreateEndpointResponse>(
  {
    endpointArn: s.optional(s.string()),
    modelArn: s.optional(s.string()),
    _keysMap: {
      endpointArn: "EndpointArn",
      modelArn: "ModelArn",
    },
  },
  { additionalProperties: s.json() },
);
