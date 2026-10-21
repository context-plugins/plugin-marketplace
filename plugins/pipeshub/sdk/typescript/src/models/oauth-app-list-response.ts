import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthAppResponseSchema, type OAuthAppResponse } from "./oauth-app-response.js";
import { paginationSchema, type Pagination } from "./pagination.js";

/** Paginated list of OAuth apps */
export type OAuthAppListResponse = {
  /** List of OAuth apps */
  data: OAuthAppResponse[];
  pagination: Pagination;
};

export const oAuthAppListResponseSchema: Schema<OAuthAppListResponse> = s.object<OAuthAppListResponse>({
  data: s.array(s.lazy(() => oAuthAppResponseSchema)),
  pagination: paginationSchema,
});
