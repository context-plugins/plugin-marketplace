import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallbackEvent = {
  ShippingAddress: "SHIPPING_ADDRESS",
  ShippingOptions: "SHIPPING_OPTIONS",
} as const;
export type CallbackEvent = (typeof CallbackEvent)[keyof typeof CallbackEvent] | (string & {});

export const callbackEventSchema: EnumSchema<CallbackEvent> = s.enumOf<CallbackEvent>(CallbackEvent);
