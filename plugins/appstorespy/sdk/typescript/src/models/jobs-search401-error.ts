import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobsSearch401Error = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsSearch401ErrorSchema: Schema<JobsSearch401Error> = s.object<JobsSearch401Error>(
  {
    message: s.string(),
    code: s.int(),
  },
  { additionalProperties: s.json() },
);
