import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Mode, modeSchema } from "./mode.js";

export type TrackLeadRequest = {
  /**
   * The unique ID of the click that the lead conversion event is attributed to. You can read this
   * value from `cq_id` cookie. If an empty string is provided, CodeQR will try to find an existing
   * customer with the provided `customerExternalId` and use the `clickId` from the customer if
   * found.
   */
  clickId: string;
  /**
   * The name of the lead event to track. Can also be used as a unique identifier to associate a
   * given lead event for a customer for a subsequent sale event (via the `leadEventName` prop in
   * `/track/sale`).
   */
  eventName: string;
  /**
   * The unique ID of the customer in your system. Will be used to identify and attribute all future
   * events to this customer.
   */
  customerExternalId: string;
  /**
   * The name of the customer. If not passed, a random name will be generated (e.g. “Big Red
   * Caribou”).
   */
  customerName?: string | null;
  /** The email address of the customer. */
  customerEmail?: string | null;
  /** The avatar URL of the customer. */
  customerAvatar?: string | null;
  /**
   * The mode to use for tracking the lead event. `async` will not block the request; `wait` will
   * block the request until the lead event is fully recorded in CodeQR; `deferred` will defer the
   * lead event creation to a subsequent request.
   *
   * @default Mode.Async
   */
  mode?: Mode;
  /**
   * The numerical value associated with this lead event (e.g., number of provisioned seats in a
   * free trial). If defined as N, the lead event will be tracked N times.
   */
  eventQuantity?: number | null;
  /** Additional metadata to be stored with the lead event. Max 10,000 characters. */
  metadata?: Record<string, unknown> | null;
  /**
   * Deduplication key shared with your own browser pixel. When your site also fires a Meta or
   * TikTok pixel for this conversion, pass the same event id here so the platform counts it once.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const trackLeadRequestProperties: s.Shape<TrackLeadRequest> = {
  clickId: s.string(),
  eventName: s.string(),
  customerExternalId: s.string(),
  customerName: s.optionalNullable(s.string()),
  customerEmail: s.optionalNullable(s.string()),
  customerAvatar: s.optionalNullable(s.string()),
  mode: s.defaulted(modeSchema, Mode.Async),
  eventQuantity: s.optionalNullable(s.float64()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  eventId: s.optional(s.string()),
};

export const trackLeadRequestInternalSchema: Schema<TrackLeadRequest> = s.object<TrackLeadRequest>(
  trackLeadRequestProperties,
  { additionalProperties: s.json() },
);

export const trackLeadRequestSchema: Schema<TrackLeadRequest> = s.lazySchema(() =>
  s.object<TrackLeadRequest>(
    {
      ...trackLeadRequestProperties,
      eventName: s.string().check(s.minLength(1), s.maxLength(255)),
      customerExternalId: s.string().check(s.minLength(1), s.maxLength(100)),
      customerName: s.optionalNullable(s.string().check(s.maxLength(100))),
      customerEmail: s.optionalNullable(s.string().check(s.maxLength(100), s.email())),
      eventId: s.optional(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
