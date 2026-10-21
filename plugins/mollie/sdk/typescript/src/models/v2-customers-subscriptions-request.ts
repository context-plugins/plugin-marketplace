import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount66Schema, type Amount66 } from "./amount66.js";
import { metadata4Schema, type Metadata4 } from "./unions/metadata4.js";

export type V2CustomersSubscriptionsRequest = {
  /** Update the amount for future payments of this subscription. */
  amount?: Amount66;
  /**
   * The subscription's description will be used as the description of the resulting individual
   * payments and so showing up on the bank statement of the consumer.
   *
   * **Please note:** the description needs to be unique for the Customer in case it has multiple
   * active subscriptions.
   */
  description?: string;
  /**
   * Interval to wait between payments, for example `1 month` or `14 days`.
   *
   * The maximum interval is one year (`12 months`, `52 weeks`, or `365 days`).
   *
   * Possible values: `... days`, `... weeks`, `... months`.
   */
  interval?: string;
  /** The start date of the subscription in `YYYY-MM-DD` format. */
  startDate?: string;
  /**
   * Total number of payments for the subscription. Once this number of payments is reached, the
   * subscription is considered completed.
   *
   * Test mode subscriptions will get canceled automatically after 10 payments.
   */
  times?: number;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   *
   * Any metadata added to the subscription will be automatically forwarded to the payments
   * generated for it.
   */
  metadata?: Metadata4 | null;
  /**
   * We will call this URL for any payment status changes of payments resulting from this
   * subscription.
   *
   * This webhook will receive **all** events for the subscription's payments. This may include
   * payment failures as well. Be sure to verify the payment's subscription ID and its status.
   */
  webhookUrl?: string;
  /** The mandate used for this subscription, if any. */
  mandateId?: string;
  /**
   * Whether the entity was created in test mode or live mode. This field does not update the mode
   * of the entity.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
};

export const v2CustomersSubscriptionsRequestSchema: Schema<V2CustomersSubscriptionsRequest> =
  s.object<V2CustomersSubscriptionsRequest>({
    amount: s.optional(s.lazy(() => amount66Schema)),
    description: s.optional(s.string()),
    interval: s.optional(s.string()),
    startDate: s.optional(s.string()),
    times: s.optional(s.int()),
    metadata: s.optionalNullable(s.lazy(() => metadata4Schema)),
    webhookUrl: s.optional(s.string()),
    mandateId: s.optional(s.string()),
    testmode: s.optional(s.boolean()),
  });
