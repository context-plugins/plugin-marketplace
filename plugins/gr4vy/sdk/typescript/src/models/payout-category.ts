import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutCategory = {
  OnlineGambling: "online_gambling",
} as const;
export type PayoutCategory = (typeof PayoutCategory)[keyof typeof PayoutCategory] | (string & {});

export const payoutCategorySchema: EnumSchema<PayoutCategory> = s.enumOf<PayoutCategory>(PayoutCategory);
