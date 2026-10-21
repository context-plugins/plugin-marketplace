import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SortBy5 = {
  values?: string[];
  default?: string;
  description?: string;
  current?: string;
  applied?: boolean;
};

export const sortBy5Schema: Schema<SortBy5> = s.object<SortBy5>({
  values: s.optional(s.array(s.string())),
  default: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optional(s.string()),
  applied: s.optional(s.boolean()),
});
