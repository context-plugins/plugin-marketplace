import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Which fields to retrieve. */
export type IncludeSurfePeopleApi = {
  email?: boolean;
  mobile?: boolean;
  linkedInUrl?: boolean;
  jobHistory?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const includeSurfePeopleApiSchema: Schema<IncludeSurfePeopleApi> = s.object<IncludeSurfePeopleApi>(
  {
    email: s.optional(s.boolean()),
    mobile: s.optional(s.boolean()),
    linkedInUrl: s.optional(s.boolean()),
    jobHistory: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
