import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";
import {
  subscriptionEventDtoInternalSchema,
  subscriptionEventDtoSchema,
  type SubscriptionEventDto,
} from "./subscription-event-dto.js";

/** Update a subscription (name updated) */
export type SubscriptionUpdateRequestDto = {
  /** Subscription name */
  name?: string;
  status?: Status2;
  /**
   * Subscription events information. You can retrieve event `type` and `version` with `GET
   * /v3/events/catalog`.
   */
  events?: SubscriptionEventDto[];
  /**
   * Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event
   * notifications.
   */
  notificationUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionUpdateRequestDtoProperties: s.Shape<SubscriptionUpdateRequestDto> = {
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => status2Schema)),
  events: s.optional(s.array(s.lazy(() => subscriptionEventDtoInternalSchema))),
  notificationUrl: s.optional(s.string()),
};

export const subscriptionUpdateRequestDtoInternalSchema: Schema<SubscriptionUpdateRequestDto> =
  s.object<SubscriptionUpdateRequestDto>(subscriptionUpdateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const subscriptionUpdateRequestDtoSchema: Schema<SubscriptionUpdateRequestDto> = s.lazySchema(() =>
  s.object<SubscriptionUpdateRequestDto>(
    {
      ...subscriptionUpdateRequestDtoProperties,
      events: s.optional(s.array(s.lazy(() => subscriptionEventDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
