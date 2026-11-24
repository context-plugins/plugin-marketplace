import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subAccountSchema, type SubAccount } from "./sub-account.js";

export type AccountsSubAccountsResponse = {
  subAccounts?: SubAccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountsSubAccountsResponseSchema: Schema<AccountsSubAccountsResponse> =
  s.object<AccountsSubAccountsResponse>(
    {
      subAccounts: s.optional(s.array(s.lazy(() => subAccountSchema))),
      _keysMap: {
        subAccounts: "sub_accounts",
      },
    },
    { additionalProperties: s.json() },
  );
