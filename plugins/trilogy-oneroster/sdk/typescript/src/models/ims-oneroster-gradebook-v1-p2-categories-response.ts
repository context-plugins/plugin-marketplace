import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type ImsOnerosterGradebookV1P2CategoriesResponse = {
  categories: Category[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2CategoriesResponseSchema: Schema<ImsOnerosterGradebookV1P2CategoriesResponse> =
  s.object<ImsOnerosterGradebookV1P2CategoriesResponse>({
    categories: s.array(s.lazy(() => categorySchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
