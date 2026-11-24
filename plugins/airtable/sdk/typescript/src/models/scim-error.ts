import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A SCIM 2.0 error response. */
export type ScimError = {
  schemas?: string[];
  /** A human-readable description of the error. */
  detail?: string;
  /** The HTTP status code as a string. */
  status?: string;
  /** The SCIM error type. */
  scimType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimErrorSchema: Schema<ScimError> = s.object<ScimError>(
  {
    schemas: s.optional(s.array(s.string())),
    detail: s.optional(s.string()),
    status: s.optional(s.string()),
    scimType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
