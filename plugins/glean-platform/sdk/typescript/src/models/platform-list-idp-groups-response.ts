import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformIdpGroupSchema, type PlatformIdpGroup } from "./platform-idp-group.js";

/** One page of IdP groups. */
export type PlatformListIdpGroupsResponse = {
  /** The IdP groups on this page, ordered by display_name and then by idp_group_id. */
  results: PlatformIdpGroup[];
  /** Whether more IdP groups are available after this page. */
  hasMore: boolean;
  /** Opaque cursor for the next page; null or absent when has_more is false. */
  nextCursor?: string | null;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformListIdpGroupsResponseSchema: Schema<PlatformListIdpGroupsResponse> =
  s.object<PlatformListIdpGroupsResponse>({
    results: s.array(s.lazy(() => platformIdpGroupSchema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
