import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Date range filter with optional inclusive bounds (epoch ms). */
export type DateRangeFilter = {
  /** Greater-than-or-equal bound (epoch ms). */
  gte?: number | null;
  /** Less-than-or-equal bound (epoch ms). */
  lte?: number | null;
};

export const dateRangeFilterSchema: Schema<DateRangeFilter> = s.object<DateRangeFilter>({
  gte: s.optionalNullable(s.int()),
  lte: s.optionalNullable(s.int()),
});
