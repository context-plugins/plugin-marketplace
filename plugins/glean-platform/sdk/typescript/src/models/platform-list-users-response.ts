import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUserSchema, type PlatformUser } from "./platform-user.js";

/** One page of users. */
export type PlatformListUsersResponse = {
  /** The users on this page, ordered by display_name and then by user_id. */
  results: PlatformUser[];
  /** Whether more users are available after this page. */
  hasMore: boolean;
  /** Opaque cursor for the next page; null or absent when has_more is false. */
  nextCursor?: string | null;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformListUsersResponseSchema: Schema<PlatformListUsersResponse> =
  s.object<PlatformListUsersResponse>({
    results: s.array(s.lazy(() => platformUserSchema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
