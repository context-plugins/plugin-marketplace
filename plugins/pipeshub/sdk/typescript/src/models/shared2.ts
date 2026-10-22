import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Shared2 = {
  values?: string[];
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const shared2Schema: Schema<Shared2> = s.object<Shared2>({
  values: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
