import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";
import {
  pagingFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type PagingFacebookBusinessManagerFacebookPagesCommentsApi,
} from "./paging-facebook-business-manager-facebook-pages-comments-api.js";

export type PageInsightsResponse = {
  data?: Datum[];
  paging?: PagingFacebookBusinessManagerFacebookPagesCommentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageInsightsResponseSchema: Schema<PageInsightsResponse> = s.object<PageInsightsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => datumSchema))),
    paging: s.optional(s.lazy(() => pagingFacebookBusinessManagerFacebookPagesCommentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
