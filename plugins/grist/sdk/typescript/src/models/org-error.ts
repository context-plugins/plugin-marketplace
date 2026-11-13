import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error information if org access failed */
export type OrgError = {
  error?: string;
  status?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgErrorSchema: Schema<OrgError> = s.object<OrgError>(
  {
    error: s.optional(s.string()),
    status: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
