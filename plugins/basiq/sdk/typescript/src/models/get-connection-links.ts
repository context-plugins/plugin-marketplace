import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Object containing links to resources. */
export type GetConnectionLinks = {
  /** Accounts reference url. */
  accounts?: string;
  /** Connection self reference url. */
  self: string;
  /** Transactions reference url. */
  transactions?: string;
  /** User reference url. */
  user: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getConnectionLinksSchema: Schema<GetConnectionLinks> = s.object<GetConnectionLinks>(
  {
    accounts: s.optional(s.string()),
    self: s.string(),
    transactions: s.optional(s.string()),
    user: s.string(),
  },
  { additionalProperties: s.json() },
);
