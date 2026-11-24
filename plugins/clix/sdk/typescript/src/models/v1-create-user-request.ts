import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request to create a new user */
export type V1CreateUserRequest = {
  /** Unique identifier for the user in your project */
  projectUserId: string;
  /** User properties as key-value pairs */
  properties?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateUserRequestSchema: Schema<V1CreateUserRequest> = s.object<V1CreateUserRequest>(
  {
    projectUserId: s.string(),
    properties: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      projectUserId: "project_user_id",
    },
  },
  { additionalProperties: s.json() },
);
