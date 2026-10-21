import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DateRange = {
  start?: string | null;
  end?: string | null;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>({
  start: s.optionalNullable(s.string()),
  end: s.optionalNullable(s.string()),
});
