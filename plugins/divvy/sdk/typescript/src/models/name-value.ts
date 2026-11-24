import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Class for name value pair. */
export type NameValue = {
  /** Name field */
  name?: string;
  /** Value field */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nameValueSchema: Schema<NameValue> = s.object<NameValue>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
