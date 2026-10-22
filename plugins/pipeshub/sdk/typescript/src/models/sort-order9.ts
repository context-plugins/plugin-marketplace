import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { current2Schema, type Current2 } from "./current2.js";
import { defaultSchema, type Default } from "./default.js";
import { values2Schema, type Values2 } from "./values2.js";

export type SortOrder9 = {
  values?: Values2[];
  default?: Default;
  description?: string;
  current?: Current2;
  applied?: boolean;
};

export const sortOrder9Schema: Schema<SortOrder9> = s.object<SortOrder9>({
  values: s.optional(s.array(s.lazy(() => values2Schema))),
  default: s.optional(s.lazy(() => defaultSchema)),
  description: s.optional(s.string()),
  current: s.optional(s.lazy(() => current2Schema)),
  applied: s.optional(s.boolean()),
});
