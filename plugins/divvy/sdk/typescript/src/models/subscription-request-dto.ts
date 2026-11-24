import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";
import {
  subscriptionEventDtoInternalSchema,
  subscriptionEventDtoSchema,
  type SubscriptionEventDto,
} from "./subscription-event-dto.js";

/** Create a subscription */
export type SubscriptionRequestDto = {
  /** Subscription name */
  name: string;
  status: Status2;
  /**
   * Subscription events information. You can retrieve event `type` and `version` with `GET
   * /v3/events/catalog`.
   */
  events: SubscriptionEventDto[];
  /**
   * Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event
   * notifications.
   */
  notificationUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionRequestDtoProperties: s.Shape<SubscriptionRequestDto> = {
  name: s.string(),
  status: status2Schema,
  events: s.array(s.lazy(() => subscriptionEventDtoInternalSchema)),
  notificationUrl: s.string(),
};

export const subscriptionRequestDtoInternalSchema: Schema<SubscriptionRequestDto> =
  s.object<SubscriptionRequestDto>(subscriptionRequestDtoProperties, { additionalProperties: s.json() });

export const subscriptionRequestDtoSchema: Schema<SubscriptionRequestDto> = s.lazySchema(() =>
  s.object<SubscriptionRequestDto>(
    {
      ...subscriptionRequestDtoProperties,
      name: s.string().check(s.minLength(1)),
      events: s.array(s.lazy(() => subscriptionEventDtoSchema)).check(s.minLength(1)),
      notificationUrl: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
