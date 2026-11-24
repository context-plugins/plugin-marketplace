import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney7Schema, type GoogleTypeMoney7 } from "./google-type-money7.js";

/** Request for CreditDeveloperBalance. */
export type GoogleCloudApigeeV1CreditDeveloperBalanceRequest = {
  /**
   * The amount of money to be credited. The wallet corresponding to the currency specified within
   * `transaction_amount` will be updated. For example, if you specified `currency_code` within
   * `transaction_amount` as "USD", then the amount would be added to the wallet which has the "USD"
   * currency or if no such wallet exists, a new wallet will be created with the "USD" currency.
   */
  transactionAmount?: GoogleTypeMoney7;
  /**
   * Each transaction_id uniquely identifies a credit balance request. If multiple requests are
   * received with the same transaction_id, only one of them will be considered.
   */
  transactionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CreditDeveloperBalanceRequestSchema: Schema<GoogleCloudApigeeV1CreditDeveloperBalanceRequest> =
  s.object<GoogleCloudApigeeV1CreditDeveloperBalanceRequest>(
    {
      transactionAmount: s.optional(s.lazy(() => googleTypeMoney7Schema)),
      transactionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
