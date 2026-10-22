import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema,
  type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody,
} from "./type-options-rest-discovery-discover-type-http-pagination-type-response-body.js";
import { responseAttributesSchema, type ResponseAttributes } from "./unions/response-attributes.js";

export type RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody = {
  /** Resource type identifier. */
  type?: TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody;
  /** Names of attributes within the response that contain next-page information */
  attribute: ResponseAttributes;
  /**
   * Maximum number of pages to retrieve for the discover task. Defaults to 50 pages. Set to 0 to
   * retrieve all pages.
   */
  maxPages: number;
  /**
   * JavaScript expression used to determine when the last page has been reached. The values tested
   * by this expression must be in the Response attributes section.
   */
  lastPageExpr?: string;
};

export const restDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody> =
  s.object<RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody>({
    type: s.optional(s.lazy(() => typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema)),
    attribute: responseAttributesSchema,
    maxPages: s.float64(),
    lastPageExpr: s.optional(s.string()),
  });
