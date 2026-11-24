import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Failed = {
  label?: string;
  evidence?: string;
  lookup?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedSchema: Schema<Failed> = s.object<Failed>(
  {
    label: s.optional(s.string()),
    evidence: s.optional(s.string()),
    lookup: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
