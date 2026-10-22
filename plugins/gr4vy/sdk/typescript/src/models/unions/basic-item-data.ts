import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsCartItemBasicItemDataSchema,
  type ForterAntiFraudOptionsCartItemBasicItemData,
} from "../forter-anti-fraud-options-cart-item-basic-item-data.js";

/** Basic information about the cart item. */
export type BasicItemData = ForterAntiFraudOptionsCartItemBasicItemData;

export const basicItemDataSchema: Schema<BasicItemData> = s.of<BasicItemData>(
  s.union([s.lazy(() => forterAntiFraudOptionsCartItemBasicItemDataSchema)]),
);
