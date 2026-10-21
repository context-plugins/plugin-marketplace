import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { payoutCategorySchema, type PayoutCategory } from "../payout-category.js";

/** The type of payout to process. */
export type Category = PayoutCategory;

export const categorySchema: Schema<Category> = s.of<Category>(s.union([s.lazy(() => payoutCategorySchema)]));
