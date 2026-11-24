import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Links to the resources. */
export type JobsLinks = {
  /** URL of the resource */
  self: string;
  /**
   * Resource that initiated creation of this Job. For example, for operations on Connection, this
   * is a Connection URL. This is only returned for Connection jobs and not for Statement jobs.
   */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobsLinksSchema: Schema<JobsLinks> = s.object<JobsLinks>(
  {
    self: s.string(),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
