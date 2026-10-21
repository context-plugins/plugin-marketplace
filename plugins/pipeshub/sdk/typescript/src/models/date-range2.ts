import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { current3Schema, type Current3 } from "./current3.js";

export type DateRange2 = {
  type?: string;
  description?: string;
  /** Expected date format for `startDate` and `endDate` inputs */
  format?: string;
  current?: Current3;
  applied?: boolean;
};

export const dateRange2Schema: Schema<DateRange2> = s.object<DateRange2>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  format: s.optional(s.string()),
  current: s.optional(s.lazy(() => current3Schema)),
  applied: s.optional(s.boolean()),
});
