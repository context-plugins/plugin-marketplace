import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable13Schema, type AmountNullable13 } from "./amount-nullable13.js";
import { links25Schema, type Links25 } from "./links25.js";
import { modeSchema, type Mode } from "./mode.js";
import { payoutStatusReasonSchema, type PayoutStatusReason } from "./payout-status-reason.js";
import { payoutStatusSchema, type PayoutStatus } from "./payout-status.js";

export type PayoutRequest = {
  /**
   * Indicates the response contains a payout object. Will always contain the string `payout` for
   * this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this payout. Mollie assigns this identifier at payout
   * creation time. Mollie will always refer to the payout by this ID. Example:
   * `payout_j8NvRAM2WNZtsykpLEX8J`.
   */
  id: string;
  /** The identifier of the balance that will be paid out. Example: `bal_gVMhHKqSSRYJyPsuoPNFH`. */
  balanceId: string;
  /**
   * The amount to pay out. When omitted from the request, the full available balance minus any
   * configured balance reserve is paid out.
   *
   * Merchants registered in the United Kingdom cannot specify a custom amount — omit this field to
   * pay out the full available balance.
   *
   * The value in the response reflects the amount paid out, excluding any applicable fees.
   */
  amount?: AmountNullable13 | null;
  /** The description that will appear on the bank statement for this payout. */
  description?: string | null;
  /** The status of the payout. */
  status: PayoutStatus;
  /** The reason for the payout's current status. */
  statusReason: PayoutStatusReason;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The date and time the payout was initiated, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. This is the moment Mollie attempted to
   * reserve the funds on the balance.
   */
  initiatedAt?: string | null;
  /**
   * The date and time the payout was sent to the destination bank account, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` if the payout has not completed
   * yet.
   */
  completedAt?: string | null;
  /**
   * The date and time the payout was canceled, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` if the payout was not canceled.
   */
  canceledAt?: string | null;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links25;
};

export const payoutRequestSchema: Schema<PayoutRequest> = s.object<PayoutRequest>({
  resource: s.string(),
  id: s.string(),
  balanceId: s.string(),
  amount: s.optionalNullable(s.lazy(() => amountNullable13Schema)),
  description: s.optionalNullable(s.string()),
  status: payoutStatusSchema,
  statusReason: payoutStatusReasonSchema,
  createdAt: s.string(),
  initiatedAt: s.optionalNullable(s.string()),
  completedAt: s.optionalNullable(s.string()),
  canceledAt: s.optionalNullable(s.string()),
  mode: modeSchema,
  testmode: s.optionalNullable(s.boolean()),
  links: s.optional(s.lazy(() => links25Schema)),
  _keysMap: {
    links: "_links",
  },
});
