import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleTypeMoney2Schema, type GoogleTypeMoney2 } from "./google-type-money2.js";

/** Request for CreditAppGroupBalance. */
export type GoogleCloudApigeeV1CreditAppGroupBalanceRequest = {
  /**
   * Required. The amount of money to be credited. The wallet corresponding to the currency
   * specified within `transaction_amount` will be updated. For example, if you specified
   * `currency_code` within `transaction_amount` as "USD", then the amount would be added to the
   * wallet which has the "USD" currency or if no such wallet exists, a new wallet will be created
   * with the "USD" currency.
   */
  transactionAmount?: GoogleTypeMoney2;
  /**
   * Required. Each transaction_id uniquely identifies a credit balance request. If multiple
   * requests are received with the same transaction_id, only one of them will be considered.
   */
  transactionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CreditAppGroupBalanceRequestSchema: Schema<GoogleCloudApigeeV1CreditAppGroupBalanceRequest> =
  s.object<GoogleCloudApigeeV1CreditAppGroupBalanceRequest>(
    {
      transactionAmount: s.optional(s.lazy(() => googleTypeMoney2Schema)),
      transactionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
