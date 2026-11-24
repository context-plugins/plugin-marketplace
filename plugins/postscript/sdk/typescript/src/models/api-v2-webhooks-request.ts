import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Event, eventSchema } from "./event.js";

export type ApiV2WebhooksRequest = {
  /** Destination URL for webhook deliveries (HTTPS only). */
  callbackUrl: string;
  /** Webhook subscription event type. @default Event.ShopTest */
  event?: Event;
  /** Custom key:value pairs to be sent as headers in every callback. */
  headers?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksRequestSchema: Schema<ApiV2WebhooksRequest> = s.object<ApiV2WebhooksRequest>(
  {
    callbackUrl: s.string(),
    event: s.defaulted(eventSchema, Event.ShopTest),
    headers: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      callbackUrl: "callback_url",
    },
  },
  { additionalProperties: s.json() },
);
