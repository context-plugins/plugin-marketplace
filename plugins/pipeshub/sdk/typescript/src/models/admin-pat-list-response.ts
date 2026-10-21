import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adminPatListItemSchema, type AdminPatListItem } from "./admin-pat-list-item.js";
import { pagination1Schema, type Pagination1 } from "./pagination1.js";

/**
 * Response body for `GET /personal-access-tokens/admin` (`adminListTokens`). Paginated — unlike the
 * self-service `ListPatResponse` — since an org can have far more active tokens than a fixed-window
 * cap's worth.
 */
export type AdminPatListResponse = {
  data: AdminPatListItem[];
  pagination: Pagination1;
};

export const adminPatListResponseSchema: Schema<AdminPatListResponse> = s.object<AdminPatListResponse>({
  data: s.array(s.lazy(() => adminPatListItemSchema)),
  pagination: pagination1Schema,
});
