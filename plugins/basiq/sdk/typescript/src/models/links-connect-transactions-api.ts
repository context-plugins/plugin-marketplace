import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksConnectTransactionsApi = {
  /** Url of the account. */
  account: string;
  /** Url of the institution. */
  institution: string;
  /** Transaction self reference. */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksConnectTransactionsApiSchema: Schema<LinksConnectTransactionsApi> =
  s.object<LinksConnectTransactionsApi>(
    {
      account: s.string(),
      institution: s.string(),
      self: s.string(),
    },
    { additionalProperties: s.json() },
  );
