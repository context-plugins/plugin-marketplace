import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullableSchema, type AmountNullable } from "./amount-nullable.js";
import { amount28Schema, type Amount28 } from "./amount28.js";
import { links11Schema, type Links11 } from "./links11.js";
import { reasonSchema, type Reason } from "./reason.js";
import { settlementModeSchema, type SettlementMode } from "./settlement-mode.js";

export type SettlementChargebackResponse = {
  /**
   * Indicates the response contains a chargeback object. Will always contain the string
   * `chargeback` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this chargeback. Example: `chb_n9z0tp`. */
  id: string;
  /** The amount charged back by the customer. */
  amount: Amount28;
  /**
   * Reason for the chargeback as given by the bank. Only available for chargebacks of SEPA Direct
   * Debit payments.
   */
  reason?: Reason | null;
  /**
   * The unique identifier of the payment this chargeback was created for. For example:
   * `tr_5B8cwPMGnU6qLbRvo7qEZo`. The full payment object can be retrieved via the payment URL in
   * the `_links` object.
   */
  paymentId: string;
  /**
   * The identifier referring to the settlement this payment was settled with. For example,
   * `stl_BkEjN2eBb`. This field is omitted if the refund is not settled (yet).
   */
  settlementId?: string | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The date and time the chargeback was reversed if applicable, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  reversedAt?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links11;
  /**
   * Whether this entity was created in live mode or in test mode. Settlements are always in live
   * mode.
   */
  mode?: SettlementMode;
  /**
   * The amount deducted from your account balance for this chargeback, converted to the currency
   * your account is settled in. Always a **negative** amount.
   */
  settlementAmount?: AmountNullable | null;
};

export const settlementChargebackResponseSchema: Schema<SettlementChargebackResponse> =
  s.object<SettlementChargebackResponse>({
    resource: s.string(),
    id: s.string(),
    amount: amount28Schema,
    reason: s.optionalNullable(s.lazy(() => reasonSchema)),
    paymentId: s.string(),
    settlementId: s.optionalNullable(s.string()),
    createdAt: s.string(),
    reversedAt: s.optionalNullable(s.string()),
    links: links11Schema,
    mode: s.optional(s.lazy(() => settlementModeSchema)),
    settlementAmount: s.optionalNullable(s.lazy(() => amountNullableSchema)),
    _keysMap: {
      links: "_links",
    },
  });
