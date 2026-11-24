import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Condition = {
  field?: string;
  op?: string;
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSchema: Schema<Condition> = s.object<Condition>(
  {
    field: s.optional(s.string()),
    op: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
