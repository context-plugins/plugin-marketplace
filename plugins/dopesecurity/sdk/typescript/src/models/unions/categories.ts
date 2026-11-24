import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseInheritanceSchema, type BaseInheritance } from "../base-inheritance.js";
import {
  categoryRestrictionUpdateSchema,
  type CategoryRestrictionUpdate,
} from "../category-restriction-update.js";

/** Restriction updates keyed by category name, or BaseInheritance to reset to base. */
export type Categories = Record<string, CategoryRestrictionUpdate> | BaseInheritance;

export const categoriesSchema: Schema<Categories> = s.of<Categories>(
  s.union([
    s.record(
      s.string(),
      s.lazy(() => categoryRestrictionUpdateSchema),
    ),
    s.lazy(() => baseInheritanceSchema),
  ]),
);
