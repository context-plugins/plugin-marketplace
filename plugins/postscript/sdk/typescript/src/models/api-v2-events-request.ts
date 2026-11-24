import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { propertiesSchema, type Properties } from "./properties.js";

export type ApiV2EventsRequest = {
  /**
   * The type of event that you are creating. This is the name of the event that will show in the
   * Postscript application. **Note:** when creating this event, we will *automatically* prefix your
   * partner/shop name in front of the event. For example, if sending an event called "OrderPlaced",
   * we'll show it in our UI as "[Your Partner/Shop Name] - OrderPlaced" to distinguish it from
   * others of a similar name. We accept the follow characters in the value field: lowercase letters
   * (a-z), uppercase letters (A-Z), digits (0-9), and underscores (_).
   */
  type: string;
  /** The ID of the subscriber that you are creating the event for. */
  subscriberId?: string;
  /**
   * The phone number of the subscriber that you are creating the event for. E.164 format is
   * recommended, but other formats will be accepted.
   */
  phone?: string;
  /** The email of the subscriber that you are creating the event for. */
  email?: string;
  /**
   * When the event occurred. This parameter is optional but allows you to set the exact time that
   * the event occurred on your system. If it is not sent to us, we will just use the current time
   * when we receive it. The following UTC time format is supported: %Y-%m-%d %H:%M:%S.%f
   */
  occurredAt?: string;
  /**
   * These are the properties of the event. These properties will be exposed in the Postscript
   * platform for things like filtering and merge tags to merchants.
   */
  properties?: Properties;
  /**
   * The unique id of the event on your system. This is an optional field. If a value is not
   * provided, we will create a default id ourselves based on time of event received.
   */
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2EventsRequestSchema: Schema<ApiV2EventsRequest> = s.object<ApiV2EventsRequest>(
  {
    type: s.string(),
    subscriberId: s.optional(s.string()),
    phone: s.optional(s.string()),
    email: s.optional(s.string()),
    occurredAt: s.optional(s.dateOnly()),
    properties: s.optional(s.lazy(() => propertiesSchema)),
    externalId: s.optional(s.string()),
    _keysMap: {
      subscriberId: "subscriber_id",
      occurredAt: "occurred_at",
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
