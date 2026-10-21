import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Fractional discount applied to user-facing pricing. */
export type DiscountToUser = number;

export const discountToUserSchema: Schema<DiscountToUser> = s.of<DiscountToUser>(s.union([s.float64()]));
