import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksConnectionsApi = {
  /** transactions link to the transactions associated with this account */
  transactions: string;
  /** self link to the requested account */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksConnectionsApiSchema: Schema<LinksConnectionsApi> = s.object<LinksConnectionsApi>(
  {
    transactions: s.string(),
    self: s.string(),
  },
  { additionalProperties: s.json() },
);
