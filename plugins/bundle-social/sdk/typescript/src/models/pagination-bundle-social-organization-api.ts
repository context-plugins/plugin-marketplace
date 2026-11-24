import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationBundleSocialOrganizationApi = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationBundleSocialOrganizationApiSchema: Schema<PaginationBundleSocialOrganizationApi> =
  s.object<PaginationBundleSocialOrganizationApi>(
    {
      page: s.float64(),
      pageSize: s.float64(),
      total: s.float64(),
      totalPages: s.float64(),
    },
    { additionalProperties: s.json() },
  );
