import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customer1Schema, type Customer1 } from "./customer1.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type CustomerListResponse = {
  data: Customer1[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerListResponseSchema: Schema<CustomerListResponse> = s.object<CustomerListResponse>(
  {
    data: s.array(s.lazy(() => customer1Schema)),
    pagination: paginationSchema,
  },
  { additionalProperties: s.json() },
);
