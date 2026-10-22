import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type ImsOnerosterGradebookV1P2CategoriesResponse2 = {
  /** Represents a category. */
  category: Category;
};

export const imsOnerosterGradebookV1P2CategoriesResponse2Schema: Schema<ImsOnerosterGradebookV1P2CategoriesResponse2> =
  s.object<ImsOnerosterGradebookV1P2CategoriesResponse2>({
    category: categorySchema,
  });
