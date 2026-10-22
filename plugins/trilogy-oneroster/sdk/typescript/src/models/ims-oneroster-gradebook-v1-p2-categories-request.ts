import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type ImsOnerosterGradebookV1P2CategoriesRequest = {
  /** Represents a category. */
  category: Category;
};

export const imsOnerosterGradebookV1P2CategoriesRequestSchema: Schema<ImsOnerosterGradebookV1P2CategoriesRequest> =
  s.object<ImsOnerosterGradebookV1P2CategoriesRequest>({
    category: categorySchema,
  });
