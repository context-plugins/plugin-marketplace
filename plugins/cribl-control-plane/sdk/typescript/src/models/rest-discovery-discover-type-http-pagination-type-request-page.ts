import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema,
  type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage,
} from "./type-options-rest-discovery-discover-type-http-pagination-type-request-page.js";

export type RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage = {
  /** Resource type identifier. */
  type?: TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage;
  /**
   * Query string parameter that sets the page index to be returned. Example:
   * /api/v1/query?term=cribl&page_size=100&page_number=0
   */
  pageField: string;
  /**
   * Page number from which to start request. Defaults to undefined, which will start discovery from
   * the first page.
   */
  page?: number;
  /**
   * Query string parameter that sets the number of records retrieved per request. Example:
   * /api/v1/query?term=cribl&page_size=100&page_number=0
   */
  sizeField: string;
  /** Maximum number of records to retrieve per page */
  size: number;
  /** Name of the attribute in the response that contains the total number of pages for the query */
  totalPageField?: string;
  /**
   * Name of the attribute in the response that contains the total number of records for the query
   */
  totalRecordField?: string;
  /**
   * Maximum number of pages to retrieve for the discover task. Defaults to 50 pages. Set to 0 to
   * retrieve all pages.
   */
  maxPages: number;
  /**
   * Enable to indicate that the first page in the requested data is at index 0. Disabled by
   * default, which indicates index 1.
   */
  zeroIndexed: boolean;
};

export const restDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage> =
  s.object<RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage>({
    type: s.optional(s.lazy(() => typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema)),
    pageField: s.string(),
    page: s.optional(s.float64()),
    sizeField: s.string(),
    size: s.float64(),
    totalPageField: s.optional(s.string()),
    totalRecordField: s.optional(s.string()),
    maxPages: s.float64(),
    zeroIndexed: s.boolean(),
  });
