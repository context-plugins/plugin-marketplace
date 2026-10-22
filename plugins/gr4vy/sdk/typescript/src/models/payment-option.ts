import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { Type54, type54Schema } from "./type54.js";
import { contextSchema, type Context } from "./unions/context.js";
import { iconUrl1Schema, type IconUrl1 } from "./unions/icon-url1.js";
import { label3Schema, type Label3 } from "./unions/label3.js";

export type PaymentOption = {
  /** @default Type54.PaymentOption */
  type?: Type54;
  method: string;
  iconUrl?: IconUrl1;
  mode: Mode;
  label?: Label3;
  canStorePaymentMethod: boolean;
  canDelayCapture: boolean;
  context?: Context;
};

export const paymentOptionSchema: Schema<PaymentOption> = s.object<PaymentOption>({
  type: s.defaulted(type54Schema, Type54.PaymentOption),
  method: s.string(),
  iconUrl: s.optional(s.lazy(() => iconUrl1Schema)),
  mode: modeSchema,
  label: s.optional(s.lazy(() => label3Schema)),
  canStorePaymentMethod: s.boolean(),
  canDelayCapture: s.boolean(),
  context: s.optional(s.lazy(() => contextSchema)),
  _keysMap: {
    iconUrl: "icon_url",
    canStorePaymentMethod: "can_store_payment_method",
    canDelayCapture: "can_delay_capture",
  },
});
