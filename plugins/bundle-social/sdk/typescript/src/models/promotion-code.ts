import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coupon1Schema, type Coupon1 } from "./coupon1.js";

export type PromotionCode = {
  code: string;
  coupon: Coupon1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promotionCodeSchema: Schema<PromotionCode> = s.object<PromotionCode>(
  {
    code: s.string(),
    coupon: coupon1Schema,
  },
  { additionalProperties: s.json() },
);
