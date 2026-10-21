import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLinkSchema,
  type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink,
} from "./type-options-rest-discovery-discover-type-http-pagination-type-response-header-link.js";

export type RestPaginationTypeResponseHeaderLink = {
  /** Resource type identifier. */
  type?: TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink;
  /**
   * Relation name used in the link header that refers to the next page in the result set. Example:
   * rel="next" refers to the next page of results: <https://myHost/nextPage>; rel="next"
   */
  nextRelationAttribute: string;
  /**
   * Relation name used in the link header that refers to the current result set. Example:
   * rel="self" refers to the current page of results: <https://myHost/curPage>; rel="self"
   */
  curRelationAttribute?: string;
  /**
   * Maximum number of pages to retrieve per collection task. Defaults to 50 pages. Set to 0 to
   * retrieve all pages.
   */
  maxPages: number;
};

export const restPaginationTypeResponseHeaderLinkSchema: Schema<RestPaginationTypeResponseHeaderLink> =
  s.object<RestPaginationTypeResponseHeaderLink>({
    type: s.optional(
      s.lazy(() => typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLinkSchema),
    ),
    nextRelationAttribute: s.string(),
    curRelationAttribute: s.optional(s.string()),
    maxPages: s.float64(),
  });
