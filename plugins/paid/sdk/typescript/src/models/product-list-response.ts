import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { product1Schema, type Product1 } from "./product1.js";

export type ProductListResponse = {
  data: Product1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productListResponseSchema: Schema<ProductListResponse> = s.object<ProductListResponse>(
  {
    data: s.array(s.lazy(() => product1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
