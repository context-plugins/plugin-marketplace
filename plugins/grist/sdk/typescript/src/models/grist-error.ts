import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error body Grist returns on 4xx responses. */
export type GristError = {
  error?: string;
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gristErrorSchema: Schema<GristError> = s.object<GristError>(
  {
    error: s.optional(s.string()),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
