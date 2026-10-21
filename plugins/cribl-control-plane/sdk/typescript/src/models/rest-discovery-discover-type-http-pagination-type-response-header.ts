import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema,
  type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader,
} from "./type-options-rest-discovery-discover-type-http-pagination-type-response-header.js";
import { responseAttributesSchema, type ResponseAttributes } from "./unions/response-attributes.js";

export type RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader = {
  /** Resource type identifier. */
  type?: TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader;
  /** Names of attributes within the response that contain next-page information */
  attribute: ResponseAttributes;
  /**
   * Maximum number of pages to retrieve for the discover task. Defaults to 50 pages. Set to 0 to
   * retrieve all pages.
   */
  maxPages: number;
};

export const restDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader> =
  s.object<RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader>({
    type: s.optional(
      s.lazy(() => typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema),
    ),
    attribute: responseAttributesSchema,
    maxPages: s.float64(),
  });
