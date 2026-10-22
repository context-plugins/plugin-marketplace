import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { current1Schema, type Current1 } from "./current1.js";

export type DateRange1 = {
  type?: string;
  description?: string;
  format?: string;
  current?: Current1;
  applied?: boolean;
};

export const dateRange1Schema: Schema<DateRange1> = s.object<DateRange1>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  format: s.optional(s.string()),
  current: s.optional(s.lazy(() => current1Schema)),
  applied: s.optional(s.boolean()),
});
