import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request to update a user */
export type V1UpdateUserRequest = {
  /** User properties to update as key-value pairs */
  properties?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UpdateUserRequestSchema: Schema<V1UpdateUserRequest> = s.object<V1UpdateUserRequest>(
  {
    properties: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
