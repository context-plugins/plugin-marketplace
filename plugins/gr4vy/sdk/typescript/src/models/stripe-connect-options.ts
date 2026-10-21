import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationFeeAmountSchema, type ApplicationFeeAmount } from "./unions/application-fee-amount.js";
import { onBehalfOfSchema, type OnBehalfOf } from "./unions/on-behalf-of.js";
import { stripeAccountSchema, type StripeAccount } from "./unions/stripe-account.js";
import {
  transferDataDestinationSchema,
  type TransferDataDestination,
} from "./unions/transfer-data-destination.js";
import { transferGroupSchema, type TransferGroup } from "./unions/transfer-group.js";

export type StripeConnectOptions = {
  /** The Stripe Connect account to target using the `Stripe-Account` header. */
  stripeAccount?: StripeAccount;
  /** The fee to charge the connected account. */
  applicationFeeAmount?: ApplicationFeeAmount;
  /** The Stripe Connect account to target using the `on_behalf_of` request parameter. */
  onBehalfOf?: OnBehalfOf;
  /**
   * The Stripe Connect account to target using the `transfer_data.destination` request parameter.
   */
  transferDataDestination?: TransferDataDestination;
  /** A string that identifies the payment as part of a group. */
  transferGroup?: TransferGroup;
};

export const stripeConnectOptionsSchema: Schema<StripeConnectOptions> = s.object<StripeConnectOptions>({
  stripeAccount: s.optional(s.lazy(() => stripeAccountSchema)),
  applicationFeeAmount: s.optional(s.lazy(() => applicationFeeAmountSchema)),
  onBehalfOf: s.optional(s.lazy(() => onBehalfOfSchema)),
  transferDataDestination: s.optional(s.lazy(() => transferDataDestinationSchema)),
  transferGroup: s.optional(s.lazy(() => transferGroupSchema)),
  _keysMap: {
    stripeAccount: "stripe_account",
    applicationFeeAmount: "application_fee_amount",
    onBehalfOf: "on_behalf_of",
    transferDataDestination: "transfer_data_destination",
    transferGroup: "transfer_group",
  },
});
