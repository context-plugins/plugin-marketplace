import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error body Grist returns on 4xx responses. */
export type GristErrorError = {
  error?: string;
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gristErrorErrorSchema: Schema<GristErrorError> = s.object<GristErrorError>(
  {
    error: s.optional(s.string()),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
