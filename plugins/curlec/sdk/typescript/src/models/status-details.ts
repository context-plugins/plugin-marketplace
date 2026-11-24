import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusDetails = {
  description?: string;
  source?: string;
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusDetailsSchema: Schema<StatusDetails> = s.object<StatusDetails>(
  {
    description: s.optional(s.string()),
    source: s.optional(s.string()),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
