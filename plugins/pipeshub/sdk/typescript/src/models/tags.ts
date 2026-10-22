import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tags = {
  type?: string;
  description?: string;
  current?: string | null;
  applied?: boolean;
};

export const tagsSchema: Schema<Tags> = s.object<Tags>({
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  current: s.optionalNullable(s.string()),
  applied: s.optional(s.boolean()),
});
