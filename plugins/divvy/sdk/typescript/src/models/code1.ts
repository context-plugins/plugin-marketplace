import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Code1 = {
  /** Name */
  name?: string;
  /** Value */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const code1Schema: Schema<Code1> = s.object<Code1>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
