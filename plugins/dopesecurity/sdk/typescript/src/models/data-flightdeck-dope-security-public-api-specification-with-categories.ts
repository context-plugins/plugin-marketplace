import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoriesSchema, type Categories } from "./unions/categories.js";
import { customCategoriesSchema, type CustomCategories } from "./unions/custom-categories.js";

export type DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories = {
  /** Restriction updates keyed by category name, or BaseInheritance to reset to base. */
  categories?: Categories;
  /** Restriction updates keyed by custom category name, or BaseInheritance to reset to base. */
  customCategories?: CustomCategories;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesSchema: Schema<DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories> =
  s.object<DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories>(
    {
      categories: s.optional(s.lazy(() => categoriesSchema)),
      customCategories: s.optional(s.lazy(() => customCategoriesSchema)),
    },
    { additionalProperties: s.json() },
  );
