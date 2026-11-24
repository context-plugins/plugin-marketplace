import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobTitle = {
  title?: string;
  departments?: string[];
  seniority?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobTitleSchema: Schema<JobTitle> = s.object<JobTitle>(
  {
    title: s.optional(s.string()),
    departments: s.optional(s.array(s.string())),
    seniority: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
