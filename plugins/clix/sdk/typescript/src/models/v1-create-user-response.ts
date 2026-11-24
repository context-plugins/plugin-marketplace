import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response containing the created user properties */
export type V1CreateUserResponse = {
  /** User properties as key-value pairs */
  properties?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateUserResponseSchema: Schema<V1CreateUserResponse> = s.object<V1CreateUserResponse>(
  {
    properties: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
