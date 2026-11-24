import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobTitle1 = {
  title?: string | null;
  departments?: string[];
  seniority?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobTitle1Schema: Schema<JobTitle1> = s.object<JobTitle1>(
  {
    title: s.optionalNullable(s.string()),
    departments: s.optional(s.array(s.string())),
    seniority: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
