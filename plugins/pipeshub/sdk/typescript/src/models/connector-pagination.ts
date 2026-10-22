import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorPagination = {
  page: number;
  limit: number;
  /** The search term the list was filtered by */
  search?: string | null;
  totalCount: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
};

export const connectorPaginationSchema: Schema<ConnectorPagination> = s.object<ConnectorPagination>({
  page: s.int(),
  limit: s.int(),
  search: s.optionalNullable(s.string()),
  totalCount: s.int(),
  totalPages: s.int(),
  hasPrev: s.boolean(),
  hasNext: s.boolean(),
  prevPage: s.optionalNullable(s.int()),
  nextPage: s.optionalNullable(s.int()),
});
