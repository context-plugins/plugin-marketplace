import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeNoneSchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeNone,
} from "../rest-discovery-discover-type-http-pagination-type-none.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset,
} from "../rest-discovery-discover-type-http-pagination-type-request-offset.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage,
} from "../rest-discovery-discover-type-http-pagination-type-request-page.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody,
} from "../rest-discovery-discover-type-http-pagination-type-response-body.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLinkSchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink,
} from "../rest-discovery-discover-type-http-pagination-type-response-header-link.js";
import {
  restDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema,
  type RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader,
} from "../rest-discovery-discover-type-http-pagination-type-response-header.js";

export type RestDiscoveryDiscoverTypeHttpPaginationType =
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeNone & { type: "none" })
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody & { type: "response_body" })
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader & { type: "response_header" })
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink & { type: "response_header_link" })
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset & { type: "request_offset" })
  | (RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage & { type: "request_page" });

export const restDiscoveryDiscoverTypeHttpPaginationTypeSchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationType> =
  s.discriminatedUnion<RestDiscoveryDiscoverTypeHttpPaginationType>("type", {
    none: restDiscoveryDiscoverTypeHttpPaginationTypeNoneSchema,
    response_body: restDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema,
    response_header: restDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema,
    response_header_link: restDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLinkSchema,
    request_offset: restDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema,
    request_page: restDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema,
  });
