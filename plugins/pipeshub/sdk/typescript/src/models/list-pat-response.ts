import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patListItemSchema, type PatListItem } from "./pat-list-item.js";

/**
 * Response body for `GET /personal-access-tokens` (`listTokens`) — the caller's own active tokens,
 * capped at 100 most-recent server-side. Unlike the admin list, this is a flat array with no
 * pagination envelope and no owner fields (it's implicitly scoped to the caller).
 */
export type ListPatResponse = {
  tokens: PatListItem[];
};

export const listPatResponseSchema: Schema<ListPatResponse> = s.object<ListPatResponse>({
  tokens: s.array(s.lazy(() => patListItemSchema)),
});
