import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateRange2Schema, type DateRange2 } from "./date-range2.js";

export type DateFilters2 = {
  dateRange?: DateRange2;
};

export const dateFilters2Schema: Schema<DateFilters2> = s.object<DateFilters2>({
  dateRange: s.optional(s.lazy(() => dateRange2Schema)),
});
