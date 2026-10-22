import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount24Schema, type Amount24 } from "./amount24.js";
import { externalReference1Schema, type ExternalReference1 } from "./external-reference1.js";
import { links51Schema, type Links51 } from "./links51.js";
import { modeSchema, type Mode } from "./mode.js";
import { refundStatusResponseSchema, type RefundStatusResponse } from "./refund-status-response.js";
import { routingReversal1Schema, type RoutingReversal1 } from "./routing-reversal1.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

export type ListEntityRefund = {
  /**
   * Indicates the response contains a refund object. Will always contain the string `refund` for
   * this endpoint.
   */
  resource?: string;
  /**
   * The identifier uniquely referring to this refund. Mollie assigns this identifier at refund
   * creation time. Mollie will always refer to the refund by this ID. Example: `re_4qqhO89gsT`.
   */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /**
   * The description of the refund that may be shown to your customer, depending on the payment
   * method used.
   */
  description?: string | null;
  /**
   * The amount refunded to your customer with this refund. The amount is allowed to be lower than
   * the original payment amount.
   */
  amount?: Amount24;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata?: Metadata | null;
  /**
   * The unique identifier of the payment this refund was created for. The full payment object can
   * be retrieved via the payment URL in the `_links` object.
   */
  paymentId?: string;
  /**
   * The identifier referring to the settlement this refund was settled with. This field is omitted
   * if the refund is not settled (yet).
   */
  settlementId?: string | null;
  status?: RefundStatusResponse;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  externalReference?: ExternalReference1;
  /**
   * *This feature is only available to marketplace operators.*
   *
   * With Mollie Connect you can charge fees on payments that your app is processing on behalf of
   * other Mollie merchants, by providing the `routing` object during [payment
   * creation](create-payment).
   *
   * When creating refunds for these *routed* payments, by default the full amount is deducted from
   * your balance.
   *
   * If you want to pull back the funds that were routed to the connected merchant(s), you can set
   * this parameter to `true` when issuing a full refund.
   *
   * For more fine-grained control and for partial refunds, use the `routingReversals` parameter
   * instead.
   */
  reverseRouting?: boolean | null;
  /**
   * *This feature is only available to marketplace operators.*
   *
   * When creating refunds for *routed* payments, by default the full amount is deducted from your
   * balance.
   *
   * If you want to pull back funds from the connected merchant(s), you can use this parameter to
   * specify what amount needs to be reversed from which merchant(s).
   *
   * If you simply want to fully reverse the routed funds, you can also use the `reverseRouting`
   * parameter instead.
   */
  routingReversals?: RoutingReversal1[] | null;
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
  links?: Links51;
};

export const listEntityRefundSchema: Schema<ListEntityRefund> = s.object<ListEntityRefund>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  description: s.optionalNullable(s.string()),
  amount: s.optional(s.lazy(() => amount24Schema)),
  metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
  paymentId: s.optional(s.string()),
  settlementId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => refundStatusResponseSchema)),
  createdAt: s.optional(s.string()),
  externalReference: s.optional(s.lazy(() => externalReference1Schema)),
  reverseRouting: s.optionalNullable(s.boolean()),
  routingReversals: s.optionalNullable(s.array(s.lazy(() => routingReversal1Schema))),
  testmode: s.optionalNullable(s.boolean()),
  links: s.optional(s.lazy(() => links51Schema)),
  _keysMap: {
    links: "_links",
  },
});
