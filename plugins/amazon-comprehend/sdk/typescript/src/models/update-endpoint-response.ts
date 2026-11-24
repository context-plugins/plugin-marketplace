import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateEndpointResponse = {
  /** The Amazon Resource Number (ARN) of the new model. */
  desiredModelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateEndpointResponseSchema: Schema<UpdateEndpointResponse> = s.object<UpdateEndpointResponse>(
  {
    desiredModelArn: s.optional(s.string()),
    _keysMap: {
      desiredModelArn: "DesiredModelArn",
    },
  },
  { additionalProperties: s.json() },
);
