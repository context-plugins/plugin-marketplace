import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseInheritanceSchema, type BaseInheritance } from "../base-inheritance.js";
import {
  customCategoryRestrictionUpdateSchema,
  type CustomCategoryRestrictionUpdate,
} from "../custom-category-restriction-update.js";

/** Restriction updates keyed by custom category name, or BaseInheritance to reset to base. */
export type CustomCategories = Record<string, CustomCategoryRestrictionUpdate> | BaseInheritance;

export const customCategoriesSchema: Schema<CustomCategories> = s.of<CustomCategories>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => customCategoryRestrictionUpdateSchema),
    ),
    s.lazy(() => baseInheritanceSchema),
  ]),
);
