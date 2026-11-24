import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyListPagination = {
  /** Page size (capped at 100 for `GET /companies`; up to 500 for `GET /companies/export`). */
  limit: number;
  offset: number;
  /**
   * Total rows matching filters. May be `-1` when not computed (e.g. some cursor-based responses).
   */
  total: number;
  hasMore: boolean;
  /**
   * Last `entity_id` from this page; pass as `cursor` query param for the next page when supported.
   */
  cursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyListPaginationSchema: Schema<CompanyListPagination> = s.object<CompanyListPagination>(
  {
    limit: s.int(),
    offset: s.int(),
    total: s.int(),
    hasMore: s.boolean(),
    cursor: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
