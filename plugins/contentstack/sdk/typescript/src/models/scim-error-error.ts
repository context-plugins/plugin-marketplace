import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A SCIM 2.0 error response. */
export type ScimErrorError = {
  /** SCIM schema URN for error responses. */
  schemas?: string[];
  /** HTTP status code as a string. */
  status?: string;
  /** Human-readable description of the error. */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimErrorErrorSchema: Schema<ScimErrorError> = s.object<ScimErrorError>(
  {
    schemas: s.optional(s.array(s.string())),
    status: s.optional(s.string()),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
