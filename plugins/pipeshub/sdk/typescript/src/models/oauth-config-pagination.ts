import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthConfigPagination = {
  page: number;
  limit: number;
  search?: string | null;
  totalItems: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export const oAuthConfigPaginationSchema: Schema<OAuthConfigPagination> = s.object<OAuthConfigPagination>({
  page: s.int(),
  limit: s.int(),
  search: s.optionalNullable(s.string()),
  totalItems: s.int(),
  totalPages: s.int(),
  hasPrev: s.boolean(),
  hasNext: s.boolean(),
});
