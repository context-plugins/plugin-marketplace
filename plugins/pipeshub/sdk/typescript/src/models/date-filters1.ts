import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRange1Schema, type DateRange1 } from "./date-range1.js";

export type DateFilters1 = {
  dateRange?: DateRange1;
};

export const dateFilters1Schema: Schema<DateFilters1> = s.object<DateFilters1>({
  dateRange: s.optional(s.lazy(() => dateRange1Schema)),
});
