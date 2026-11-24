import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata about who manages the network for the organization. */
export type NetworkManagedBy = {
  /** Network managed by name */
  name?: string;
  /** Network managed by email address */
  email?: string;
  /** Verified email address domain */
  emailDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkManagedBySchema: Schema<NetworkManagedBy> = s.object<NetworkManagedBy>(
  {
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    emailDomain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
