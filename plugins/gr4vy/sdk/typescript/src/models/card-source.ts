import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardSource = {
  ApplePay: "apple-pay",
  GooglePay: "google-pay",
} as const;
export type CardSource = (typeof CardSource)[keyof typeof CardSource] | (string & {});

export const cardSourceSchema: EnumSchema<CardSource> = s.enumOf<CardSource>(CardSource);
