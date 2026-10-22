import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { usageGroupBySchema, type UsageGroupBy } from "../usage-group-by.js";

/**
 * Group the usage by the specified fields. Support fields include `model`, `product_type`,
 * `user_id` and any combination of them.
 */
export type GroupBy1 = UsageGroupBy[];

export const groupBy1Schema: Schema<GroupBy1> = s.of<GroupBy1>(
  s.union([s.array(s.lazy(() => usageGroupBySchema))]),
);
