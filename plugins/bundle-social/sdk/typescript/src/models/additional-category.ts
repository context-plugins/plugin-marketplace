import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalCategory = {
  name?: string;
};

export const additionalCategorySchema: Schema<AdditionalCategory> = s.object<AdditionalCategory>({
  name: s.optional(s.string()),
});
