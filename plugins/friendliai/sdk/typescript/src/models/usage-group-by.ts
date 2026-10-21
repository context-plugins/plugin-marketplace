import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Usage group-by option. */
export const UsageGroupBy = {
  Model: "model",
  ProductType: "product_type",
  UserId: "user_id",
} as const;
export type UsageGroupBy = (typeof UsageGroupBy)[keyof typeof UsageGroupBy] | (string & {});

export const usageGroupBySchema: EnumSchema<UsageGroupBy> = s.enumOf<UsageGroupBy>(UsageGroupBy);
