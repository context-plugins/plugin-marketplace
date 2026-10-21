import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackEventsSchema, type CallbackEvents } from "./unions/callback-events.js";
import { callbackUrlSchema, type CallbackUrl } from "./unions/callback-url.js";

export type PaypalOrderUpdateCallbackConfig = {
  /** The URL for the webhook endpoint you provide for PayPal to send you order update events. */
  callbackUrl?: CallbackUrl;
  /** The events that trigger a callback. */
  callbackEvents?: CallbackEvents;
};

export const paypalOrderUpdateCallbackConfigSchema: Schema<PaypalOrderUpdateCallbackConfig> =
  s.object<PaypalOrderUpdateCallbackConfig>({
    callbackUrl: s.optional(s.lazy(() => callbackUrlSchema)),
    callbackEvents: s.optional(s.lazy(() => callbackEventsSchema)),
    _keysMap: {
      callbackUrl: "callback_url",
      callbackEvents: "callback_events",
    },
  });
