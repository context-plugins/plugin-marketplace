import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Change = {
  field: string;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeSchema: Schema<Change> = s.object<Change>(
  {
    field: s.string(),
    from: s.optional(s.record(s.string(), s.unknown())),
    to: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
