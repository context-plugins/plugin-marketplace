import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Link object containing a link to the resource, self reference. */
export type ResourceAccountLink = {
  /** URL of the resource. */
  self: string;
  /** transactions link to the transactions associated with this account. */
  transactions?: string;
  /** connection associated to User. */
  connection?: string;
  /** institution link to the institution associated with this account. */
  institution?: string;
  statements?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceAccountLinkSchema: Schema<ResourceAccountLink> = s.object<ResourceAccountLink>(
  {
    self: s.string(),
    transactions: s.optional(s.string()),
    connection: s.optional(s.string()),
    institution: s.optional(s.string()),
    statements: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
