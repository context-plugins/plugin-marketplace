import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Settings that control how the Collector paginates through Discover results. */
export type PaginationTypeRestDiscoveryDiscoverTypeHttp = {
  /** Pagination */
  type: Pagination;
  /**
   * Maximum number of pages to retrieve for the discover task. Defaults to 50 pages. Set to 0 to
   * retrieve all pages.
   */
  maxPages?: number;
  /**
   * JavaScript expression used to determine when the last page has been reached. The values tested
   * by this expression must be in the Response attributes section.
   */
  lastPageExpr?: string;
  /**
   * Relation name used in the link header that refers to the next page in the result set. Example:
   * rel="next" refers to the next page of results: <https://myHost/nextPage>; rel="next"
   */
  nextRelationAttribute?: string;
  /**
   * Relation name used in the link header that refers to the current result set. Example:
   * rel="self" refers to the current page of results: <https://myHost/curPage>; rel="self"
   */
  curRelationAttribute?: string;
  /**
   * Query string parameter that sets the index from which to begin returning records. Example:
   * /api/v1/query?term=cribl&limit=100&offset=0
   */
  offsetField?: string;
  /**
   * Offset index from which to start request. Defaults to undefined, which will start discovery
   * from the first record.
   */
  offset?: number;
  /**
   * Query string parameter that sets the number of records retrieved per request. Example:
   * /api/v1/query?term=cribl&limit=100&offset=0
   */
  limitField?: string;
  /** Maximum number of records to retrieve per request */
  limit?: number;
  /**
   * Name of the attribute in the response that contains the total number of records for the query
   */
  totalRecordField?: string;
  /**
   * Enable to indicate that the first page in the requested data is at index 0. Disabled by
   * default, which indicates index 1.
   */
  zeroIndexed?: boolean;
  /**
   * Query string parameter that sets the page index to be returned. Example:
   * /api/v1/query?term=cribl&page_size=100&page_number=0
   */
  pageField?: string;
  /**
   * Page number from which to start request. Defaults to undefined, which will start discovery from
   * the first page.
   */
  page?: number;
  /**
   * Query string parameter that sets the number of records retrieved per request. Example:
   * /api/v1/query?term=cribl&page_size=100&page_number=0
   */
  sizeField?: string;
  /** Maximum number of records to retrieve per page */
  size?: number;
  /** Name of the attribute in the response that contains the total number of pages for the query */
  totalPageField?: string;
};

export const paginationTypeRestDiscoveryDiscoverTypeHttpSchema: Schema<PaginationTypeRestDiscoveryDiscoverTypeHttp> =
  s.object<PaginationTypeRestDiscoveryDiscoverTypeHttp>({
    type: paginationSchema,
    maxPages: s.optional(s.float64()),
    lastPageExpr: s.optional(s.string()),
    nextRelationAttribute: s.optional(s.string()),
    curRelationAttribute: s.optional(s.string()),
    offsetField: s.optional(s.string()),
    offset: s.optional(s.float64()),
    limitField: s.optional(s.string()),
    limit: s.optional(s.float64()),
    totalRecordField: s.optional(s.string()),
    zeroIndexed: s.optional(s.boolean()),
    pageField: s.optional(s.string()),
    page: s.optional(s.float64()),
    sizeField: s.optional(s.string()),
    size: s.optional(s.float64()),
    totalPageField: s.optional(s.string()),
  });
