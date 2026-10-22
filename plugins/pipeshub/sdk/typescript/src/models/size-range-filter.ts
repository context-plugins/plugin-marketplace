import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Size range filter with optional inclusive bounds (bytes). */
export type SizeRangeFilter = {
  /** Greater-than-or-equal bound (bytes). */
  gte?: number | null;
  /** Less-than-or-equal bound (bytes). */
  lte?: number | null;
};

export const sizeRangeFilterSchema: Schema<SizeRangeFilter> = s.object<SizeRangeFilter>({
  gte: s.optionalNullable(s.int()),
  lte: s.optionalNullable(s.int()),
});
