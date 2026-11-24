import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Job = {
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobSchema: Schema<Job> = s.object<Job>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
