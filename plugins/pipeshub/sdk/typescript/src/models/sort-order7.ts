import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SortOrder7 = {
  values?: string[];
  default?: string;
  description?: string;
  current?: string;
};

export const sortOrder7Schema: Schema<SortOrder7> = s.object<SortOrder7>({
  values: s.optional(s.array(s.string())),
  default: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optional(s.string()),
});
