import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { restPaginationTypeNoneSchema, type RestPaginationTypeNone } from "../rest-pagination-type-none.js";
import {
  restPaginationTypeRequestOffsetSchema,
  type RestPaginationTypeRequestOffset,
} from "../rest-pagination-type-request-offset.js";
import {
  restPaginationTypeRequestPageSchema,
  type RestPaginationTypeRequestPage,
} from "../rest-pagination-type-request-page.js";
import {
  restPaginationTypeResponseBodySchema,
  type RestPaginationTypeResponseBody,
} from "../rest-pagination-type-response-body.js";
import {
  restPaginationTypeResponseHeaderLinkSchema,
  type RestPaginationTypeResponseHeaderLink,
} from "../rest-pagination-type-response-header-link.js";
import {
  restPaginationTypeResponseHeaderSchema,
  type RestPaginationTypeResponseHeader,
} from "../rest-pagination-type-response-header.js";

export type BaseType16 =
  | (RestPaginationTypeNone & { type: "none" })
  | (RestPaginationTypeResponseBody & { type: "response_body" })
  | (RestPaginationTypeResponseHeader & { type: "response_header" })
  | (RestPaginationTypeResponseHeaderLink & { type: "response_header_link" })
  | (RestPaginationTypeRequestOffset & { type: "request_offset" })
  | (RestPaginationTypeRequestPage & { type: "request_page" });

export const baseType16Schema: Schema<BaseType16> = s.discriminatedUnion<BaseType16>("type", {
  none: restPaginationTypeNoneSchema,
  response_body: restPaginationTypeResponseBodySchema,
  response_header: restPaginationTypeResponseHeaderSchema,
  response_header_link: restPaginationTypeResponseHeaderLinkSchema,
  request_offset: restPaginationTypeRequestOffsetSchema,
  request_page: restPaginationTypeRequestPageSchema,
});
