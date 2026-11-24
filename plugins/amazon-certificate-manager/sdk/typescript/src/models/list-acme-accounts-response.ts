import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acmeAccountSummarySchema, type AcmeAccountSummary } from "./acme-account-summary.js";

export type ListAcmeAccountsResponse = {
  /** The list of ACME accounts. */
  acmeAccounts?: AcmeAccountSummary[];
  /** A token for pagination. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAcmeAccountsResponseSchema: Schema<ListAcmeAccountsResponse> =
  s.object<ListAcmeAccountsResponse>(
    {
      acmeAccounts: s.optional(s.array(s.lazy(() => acmeAccountSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        acmeAccounts: "AcmeAccounts",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
