import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SicCode = {
  code?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sicCodeSchema: Schema<SicCode> = s.object<SicCode>(
  {
    code: s.optional(s.string()),
    label: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
