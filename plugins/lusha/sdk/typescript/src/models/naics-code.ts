import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NaicsCode = {
  code?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const naicsCodeSchema: Schema<NaicsCode> = s.object<NaicsCode>(
  {
    code: s.optional(s.string()),
    label: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
