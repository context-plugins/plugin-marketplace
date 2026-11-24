import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationDidlogicComPurchasesApi = {
  pages: number;
  page: number;
  totalRecords: number;
  perPage: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationDidlogicComPurchasesApiSchema: Schema<PaginationDidlogicComPurchasesApi> =
  s.object<PaginationDidlogicComPurchasesApi>(
    {
      pages: s.int(),
      page: s.int(),
      totalRecords: s.int(),
      perPage: s.int(),
      _keysMap: {
        totalRecords: "total_records",
        perPage: "per_page",
      },
    },
    { additionalProperties: s.json() },
  );
