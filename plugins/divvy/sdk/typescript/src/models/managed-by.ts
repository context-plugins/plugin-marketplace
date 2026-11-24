import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ManagedBy = {
  /** Network managed by name */
  name?: string;
  /** Network managed by email address */
  email?: string;
  /** Verified email address domain */
  emailDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const managedBySchema: Schema<ManagedBy> = s.object<ManagedBy>(
  {
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    emailDomain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
