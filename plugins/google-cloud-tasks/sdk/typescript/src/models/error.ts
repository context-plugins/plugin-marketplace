import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  code?: number;
  message?: string;
  status?: string;
  details?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.optional(s.int()),
    message: s.optional(s.string()),
    status: s.optional(s.string()),
    details: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
