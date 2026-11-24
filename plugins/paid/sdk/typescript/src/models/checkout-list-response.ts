import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutSchema, type Checkout } from "./checkout.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type CheckoutListResponse = {
  data: Checkout[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutListResponseSchema: Schema<CheckoutListResponse> = s.object<CheckoutListResponse>(
  {
    data: s.array(s.lazy(() => checkoutSchema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
