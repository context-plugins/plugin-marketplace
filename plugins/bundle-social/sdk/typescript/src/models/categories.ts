import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalCategorySchema, type AdditionalCategory } from "./additional-category.js";
import { primaryCategorySchema, type PrimaryCategory } from "./primary-category.js";

export type Categories = {
  primaryCategory?: PrimaryCategory;
  additionalCategories?: AdditionalCategory[];
};

export const categoriesSchema: Schema<Categories> = s.object<Categories>({
  primaryCategory: s.optional(s.lazy(() => primaryCategorySchema)),
  additionalCategories: s.optional(s.array(s.lazy(() => additionalCategorySchema))),
});
