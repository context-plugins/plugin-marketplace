import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerAliasSchema, type CustomerAlias } from "./customer-alias.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type CustomerAliasListResponse = {
  data: CustomerAlias[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerAliasListResponseSchema: Schema<CustomerAliasListResponse> =
  s.object<CustomerAliasListResponse>(
    {
      data: s.array(s.lazy(() => customerAliasSchema)),
      pagination: paginationSchema,
    },
    { additionalProperties: s.json() },
  );
