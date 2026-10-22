import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SortBy6 = {
  values?: string[];
  default?: string;
  description?: string;
  current?: string;
};

export const sortBy6Schema: Schema<SortBy6> = s.object<SortBy6>({
  values: s.optional(s.array(s.string())),
  default: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optional(s.string()),
});
