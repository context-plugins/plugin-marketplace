import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EducationApi = {
  /** Primary field of study of the educational experience */
  major?: string | null;
  /** School/University of the educational experience */
  school?: string | null;
  /** Degree obtained through the educational experience */
  degree?: string | null;
  /** Start date of the educational experience */
  start?: number | null;
  /** End date of the educational experience */
  end?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const educationApiSchema: Schema<EducationApi> = s.object<EducationApi>(
  {
    major: s.optionalNullable(s.string()),
    school: s.optionalNullable(s.string()),
    degree: s.optionalNullable(s.string()),
    start: s.optionalNullable(s.int()),
    end: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
