import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentfulCategorySchema, type ContentfulCategory } from "./contentful-category.js";

export type CategoriesResponse = {
  /** Template categories in gallery display order. */
  categories: ContentfulCategory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoriesResponseSchema: Schema<CategoriesResponse> = s.object<CategoriesResponse>(
  {
    categories: s.array(s.lazy(() => contentfulCategorySchema)),
  },
  { additionalProperties: s.json() },
);
