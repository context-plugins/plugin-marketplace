import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterOption1 = {
  value?: string;
  label?: string;
};

export const filterOption1Schema: Schema<FilterOption1> = s.object<FilterOption1>({
  value: s.optional(s.string()),
  label: s.optional(s.string()),
});
