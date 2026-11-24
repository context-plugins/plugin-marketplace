import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyListItemSchema, type CompanyListItem } from "./company-list-item.js";
import { companyListPaginationSchema, type CompanyListPagination } from "./company-list-pagination.js";

/** Search/list response. `data` is an array of companies. */
export type CompanyListResponse = {
  /** One page of result rows (same filters as the request); length ≤ `pagination.limit`. */
  data: CompanyListItem[];
  pagination: CompanyListPagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyListResponseSchema: Schema<CompanyListResponse> = s.object<CompanyListResponse>(
  {
    data: s.array(s.lazy(() => companyListItemSchema)),
    pagination: companyListPaginationSchema,
  },
  { additionalProperties: s.json() },
);
