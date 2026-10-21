import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount49Schema, type Amount49 } from "./amount49.js";
import { applicationFee4Schema, type ApplicationFee4 } from "./application-fee4.js";
import { links46Schema, type Links46 } from "./links46.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  subscriptionMethodResponseSchema,
  type SubscriptionMethodResponse,
} from "./subscription-method-response.js";
import {
  subscriptionStatusResponseSchema,
  type SubscriptionStatusResponse,
} from "./subscription-status-response.js";
import { metadata1Schema, type Metadata1 } from "./unions/metadata1.js";

export type EntitySubscription = {
  /**
   * Indicates the response contains a subscription object. Will always contain the string
   * `subscription` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this subscription. Example: `sub_rVKGtNd6s3`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  status: SubscriptionStatusResponse;
  /**
   * The amount for each individual payment that is charged with this subscription. For example, for
   * a monthly subscription of €10, the subscription amount should be set to €10.
   */
  amount: Amount49;
  /**
   * Total number of payments for the subscription. Once this number of payments is reached, the
   * subscription is considered completed.
   *
   * Test mode subscriptions will get canceled automatically after 10 payments.
   */
  times?: number | null;
  /** Number of payments left for the subscription. */
  timesRemaining?: number | null;
  /**
   * Interval to wait between payments, for example `1 month` or `14 days`.
   *
   * The maximum interval is one year (`12 months`, `52 weeks`, or `365 days`).
   *
   * Possible values: `... days`, `... weeks`, `... months`.
   */
  interval: string;
  /** The start date of the subscription in `YYYY-MM-DD` format. */
  startDate: string;
  /**
   * The date of the next scheduled payment in `YYYY-MM-DD` format. If the subscription has been
   * completed or canceled, this parameter will not be returned.
   */
  nextPaymentDate?: string | null;
  /**
   * The subscription's description will be used as the description of the resulting individual
   * payments and so showing up on the bank statement of the consumer.
   *
   * **Please note:** the description needs to be unique for the Customer in case it has multiple
   * active subscriptions.
   */
  description?: string;
  /**
   * The payment method used for this subscription. If omitted, any of the customer's valid mandates
   * may be used.
   */
  method?: SubscriptionMethodResponse | null;
  /**
   * With Mollie Connect you can charge fees on payments that your app is processing on behalf of
   * other Mollie merchants.
   *
   * Setting an application fee on the subscription will ensure this fee is charged on each
   * individual payment.
   *
   * Refer to the `applicationFee` parameter on the [Get payment endpoint](get-payment)
   * documentation for more information.
   */
  applicationFee?: ApplicationFee4;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   *
   * Any metadata added to the subscription will be automatically forwarded to the payments
   * generated for it.
   */
  metadata?: Metadata1 | null;
  /**
   * We will call this URL for any payment status changes of payments resulting from this
   * subscription.
   *
   * This webhook will receive **all** events for the subscription's payments. This may include
   * payment failures as well. Be sure to verify the payment's subscription ID and its status.
   */
  webhookUrl?: string | null;
  /** The customer this subscription belongs to. */
  customerId: string;
  /** The mandate used for this subscription, if any. */
  mandateId?: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The subscription's date and time of cancellation, in ISO 8601 format. This parameter is omitted
   * if the subscription is not canceled (yet).
   */
  canceledAt?: string | null;
  profileId?: string;
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
  links: Links46;
};

export const entitySubscriptionSchema: Schema<EntitySubscription> = s.object<EntitySubscription>({
  resource: s.string(),
  id: s.string(),
  mode: modeSchema,
  status: subscriptionStatusResponseSchema,
  amount: amount49Schema,
  times: s.optionalNullable(s.int()),
  timesRemaining: s.optionalNullable(s.int()),
  interval: s.string(),
  startDate: s.string(),
  nextPaymentDate: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  method: s.optionalNullable(s.lazy(() => subscriptionMethodResponseSchema)),
  applicationFee: s.optional(s.lazy(() => applicationFee4Schema)),
  metadata: s.optionalNullable(s.lazy(() => metadata1Schema)),
  webhookUrl: s.optionalNullable(s.string()),
  customerId: s.string(),
  mandateId: s.optional(s.string()),
  createdAt: s.string(),
  canceledAt: s.optionalNullable(s.string()),
  profileId: s.optional(s.string()),
  testmode: s.optionalNullable(s.boolean()),
  links: links46Schema,
  _keysMap: {
    links: "_links",
  },
});
