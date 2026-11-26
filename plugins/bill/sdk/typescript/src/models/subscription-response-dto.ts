import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import {
  subscriptionEventDtoInternalSchema,
  subscriptionEventDtoSchema,
  type SubscriptionEventDto,
} from "./subscription-event-dto.js";

/** Subscription response information. */
export type SubscriptionResponseDto = {
  /** BILL-generated ID of the subscription */
  id?: string;
  /** Subscription name */
  name?: string;
  /**
   * BILL-generated ID of the organization. BILL sends you event notifications only for the BILL
   * organization used to set up a subscription.
   */
  organizationId?: string;
  status?: Status;
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
  /** Subscription created date and time */
  createdTime?: Date;
  /** Subscription updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionResponseDtoProperties: s.Shape<SubscriptionResponseDto> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  organizationId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  events: s.optional(s.array(s.lazy(() => subscriptionEventDtoInternalSchema))),
  notificationUrl: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
};

export const subscriptionResponseDtoInternalSchema: Schema<SubscriptionResponseDto> =
  s.object<SubscriptionResponseDto>(subscriptionResponseDtoProperties, { additionalProperties: s.json() });

export const subscriptionResponseDtoSchema: Schema<SubscriptionResponseDto> = s.lazySchema(() =>
  s.object<SubscriptionResponseDto>(
    {
      ...subscriptionResponseDtoProperties,
      events: s.optional(s.array(s.lazy(() => subscriptionEventDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
