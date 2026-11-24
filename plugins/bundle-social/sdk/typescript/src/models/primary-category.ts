import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrimaryCategory = {
  name?: string;
};

export const primaryCategorySchema: Schema<PrimaryCategory> = s.object<PrimaryCategory>({
  name: s.optional(s.string()),
});
