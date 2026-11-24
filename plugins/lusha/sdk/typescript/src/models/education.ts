import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Refinement-only — must be paired with a base filter. */
export type Education = {
  degrees?: string[];
  fieldsOfStudy?: string[];
  schools?: string[];
  startYearGte?: number;
  graduationYearLte?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const educationSchema: Schema<Education> = s.object<Education>(
  {
    degrees: s.optional(s.array(s.string())),
    fieldsOfStudy: s.optional(s.array(s.string())),
    schools: s.optional(s.array(s.string())),
    startYearGte: s.optional(s.int()),
    graduationYearLte: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
