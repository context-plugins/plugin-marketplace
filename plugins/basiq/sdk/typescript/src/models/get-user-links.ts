import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Object containing links to resources. */
export type GetUserLinks = {
  /** Accounts reference url. */
  accounts: string;
  /** Connections reference url. */
  connections: string;
  /** User self reference url. */
  self: string;
  /** Transactions reference url. */
  transactions: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getUserLinksSchema: Schema<GetUserLinks> = s.object<GetUserLinks>(
  {
    accounts: s.string(),
    connections: s.string(),
    self: s.string(),
    transactions: s.string(),
  },
  { additionalProperties: s.json() },
);
