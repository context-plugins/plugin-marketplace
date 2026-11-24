import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Object containing links to resources. */
export type GetConnectionsLinks = {
  /** Accounts reference url. */
  accounts?: string;
  /** Institution details. */
  institution: string;
  /** Connection self reference url. */
  self: string;
  /** Transactions reference url. */
  transactions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getConnectionsLinksSchema: Schema<GetConnectionsLinks> = s.object<GetConnectionsLinks>(
  {
    accounts: s.optional(s.string()),
    institution: s.string(),
    self: s.string(),
    transactions: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
