import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Contentstack organization that groups stacks and users. */
export type Organization = {
  /** Unique identifier of the organization. */
  uid?: string;
  /** Display name of the organization. */
  name?: string;
  /** The subscription plan identifier for the organization. */
  planId?: string;
  /** ISO 8601 timestamp when the organization was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    planId: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      planId: "plan_id",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
