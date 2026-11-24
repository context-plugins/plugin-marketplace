import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountNumberMatchInternalSchema,
  accountNumberMatchSchema,
  type AccountNumberMatch,
} from "./account-number-match.js";
import {
  accountTypeMatchInternalSchema,
  accountTypeMatchSchema,
  type AccountTypeMatch,
} from "./account-type-match.js";

export type AccountInsightData = {
  /** Unique identifier for the account */
  accountId: string;
  accountNumber: AccountNumberMatch;
  accountType?: AccountTypeMatch;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountInsightDataProperties: s.Shape<AccountInsightData> = {
  accountId: s.string(),
  accountNumber: accountNumberMatchInternalSchema,
  accountType: s.optional(s.lazy(() => accountTypeMatchInternalSchema)),
};

export const accountInsightDataInternalSchema: Schema<AccountInsightData> = s.object<AccountInsightData>(
  accountInsightDataProperties,
  { additionalProperties: s.json() },
);

export const accountInsightDataSchema: Schema<AccountInsightData> = s.lazySchema(() =>
  s.object<AccountInsightData>(
    {
      ...accountInsightDataProperties,
      accountNumber: accountNumberMatchSchema,
      accountType: s.optional(s.lazy(() => accountTypeMatchSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
