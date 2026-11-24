import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RepeatedEnumValue = {
  setValues?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repeatedEnumValueSchema: Schema<RepeatedEnumValue> = s.object<RepeatedEnumValue>(
  {
    setValues: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
