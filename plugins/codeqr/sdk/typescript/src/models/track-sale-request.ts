import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { PaymentProcessor, paymentProcessorSchema } from "./payment-processor.js";

export type TrackSaleRequest = {
  /**
   * The unique ID of the customer in your system. Will be used to identify and attribute all future
   * events to this customer.
   */
  customerExternalId: string;
  /**
   * The amount of the sale in the smallest unit of `currency` — cents for two-decimal currencies,
   * the full integer for zero-decimal ones (e.g. `1437` JPY), thousandths for three-decimal ones
   * (e.g. `1437` KWD fils).
   */
  amount: number;
  /**
   * The currency of the sale, as an ISO 4217 code. Reporting is always in USD: non-USD sales are
   * converted at the exchange rate of the day the sale is recorded, and the original amount and
   * currency are kept on the event. The rate is not re-applied later, so reported totals do not
   * move with the exchange rate.
   *
   * @default "usd"
   */
  currency?: string;
  /**
   * The name of the sale event. Recommended format: `Invoice paid` or `Subscription created`.
   *
   * @default "Purchase"
   */
  eventName?: string;
  /** The payment processor via which the sale was made. @default PaymentProcessor.Custom */
  paymentProcessor?: PaymentProcessor;
  /**
   * The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be
   * recorded for a given invoice ID.
   */
  invoiceId?: string | null;
  /**
   * Additional metadata to be stored with the sale event. Max 10,000 characters when stringified.
   */
  metadata?: Record<string, unknown> | null;
  /**
   * The name of the lead event that occurred before the sale (case-sensitive). This is used to
   * associate the sale event with a particular lead event (instead of the latest lead event for a
   * link-customer combination, which is the default behavior). For direct sale tracking, this field
   * can also be used to specify the lead event name.
   */
  leadEventName?: string | null;
  /**
   * [For direct sale tracking]: The unique ID of the click that the sale conversion event is
   * attributed to. You can read this value from `cq_id` cookie.
   */
  clickId?: string | null;
  /**
   * [For direct sale tracking]: The name of the customer. If not passed, a random name will be
   * generated (e.g. “Big Red Caribou”).
   */
  customerName?: string | null;
  /** [For direct sale tracking]: The email address of the customer. */
  customerEmail?: string | null;
  /** [For direct sale tracking]: The avatar URL of the customer. */
  customerAvatar?: string | null;
  /**
   * Deduplication key shared with your own browser pixel. When your site also fires a Meta or
   * TikTok pixel for this conversion, pass the same event id here so the platform counts it once.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const trackSaleRequestProperties: s.Shape<TrackSaleRequest> = {
  customerExternalId: s.string(),
  amount: s.int(),
  currency: s.defaulted(s.string(), "usd"),
  eventName: s.defaulted(s.string(), "Purchase"),
  paymentProcessor: s.defaulted(paymentProcessorSchema, PaymentProcessor.Custom),
  invoiceId: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  leadEventName: s.optionalNullable(s.string()),
  clickId: s.optionalNullable(s.string()),
  customerName: s.optionalNullable(s.string()),
  customerEmail: s.optionalNullable(s.string()),
  customerAvatar: s.optionalNullable(s.string()),
  eventId: s.optional(s.string()),
};

export const trackSaleRequestInternalSchema: Schema<TrackSaleRequest> = s.object<TrackSaleRequest>(
  trackSaleRequestProperties,
  { additionalProperties: s.json() },
);

export const trackSaleRequestSchema: Schema<TrackSaleRequest> = s.lazySchema(() =>
  s.object<TrackSaleRequest>(
    {
      ...trackSaleRequestProperties,
      customerExternalId: s.string().check(s.minLength(1), s.maxLength(100)),
      amount: s.int().check(s.gte(0)),
      eventName: s.defaulted(s.string().check(s.maxLength(255)), "Purchase"),
      customerName: s.optionalNullable(s.string().check(s.maxLength(100))),
      customerEmail: s.optionalNullable(s.string().check(s.maxLength(100), s.email())),
      eventId: s.optional(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
