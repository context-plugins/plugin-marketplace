import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnumerationValue = {
  /** The value of the slot type. */
  value: string;
  /** Additional values related to the slot type value. */
  synonyms?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumerationValueSchema: Schema<EnumerationValue> = s.object<EnumerationValue>(
  {
    value: s.string(),
    synonyms: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
