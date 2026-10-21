import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema,
  type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset,
} from "./type-options-rest-discovery-discover-type-http-pagination-type-request-offset.js";

export type RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset = {
  /** Resource type identifier. */
  type?: TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset;
  /**
   * Query string parameter that sets the index from which to begin returning records. Example:
   * /api/v1/query?term=cribl&limit=100&offset=0
   */
  offsetField: string;
  /**
   * Offset index from which to start request. Defaults to undefined, which will start discovery
   * from the first record.
   */
  offset?: number;
  /**
   * Query string parameter that sets the number of records retrieved per request. Example:
   * /api/v1/query?term=cribl&limit=100&offset=0
   */
  limitField: string;
  /** Maximum number of records to retrieve per request */
  limit: number;
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

export const restDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset> =
  s.object<RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset>({
    type: s.optional(s.lazy(() => typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema)),
    offsetField: s.string(),
    offset: s.optional(s.float64()),
    limitField: s.string(),
    limit: s.float64(),
    totalRecordField: s.optional(s.string()),
    maxPages: s.float64(),
    zeroIndexed: s.boolean(),
  });
