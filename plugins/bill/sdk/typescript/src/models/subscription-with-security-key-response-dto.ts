import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import {
  subscriptionEventDtoInternalSchema,
  subscriptionEventDtoSchema,
  type SubscriptionEventDto,
} from "./subscription-event-dto.js";

/** Subscription and security key information. */
export type SubscriptionWithSecurityKeyResponseDto = {
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
  /**
   * BILL-generated security key.
   *
   * When you create a new subscription, a one-time `securityKey` is generated and all event
   * notifications sent to your `notificationUrl` are signed with this key.
   */
  securityKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const subscriptionWithSecurityKeyResponseDtoProperties: s.Shape<SubscriptionWithSecurityKeyResponseDto> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  organizationId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  events: s.optional(s.array(s.lazy(() => subscriptionEventDtoInternalSchema))),
  notificationUrl: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  securityKey: s.optional(s.string()),
};

export const subscriptionWithSecurityKeyResponseDtoInternalSchema: Schema<SubscriptionWithSecurityKeyResponseDto> =
  s.object<SubscriptionWithSecurityKeyResponseDto>(subscriptionWithSecurityKeyResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const subscriptionWithSecurityKeyResponseDtoSchema: Schema<SubscriptionWithSecurityKeyResponseDto> =
  s.lazySchema(() =>
    s.object<SubscriptionWithSecurityKeyResponseDto>(
      {
        ...subscriptionWithSecurityKeyResponseDtoProperties,
        events: s.optional(s.array(s.lazy(() => subscriptionEventDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
