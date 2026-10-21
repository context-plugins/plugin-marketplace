import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillVersionSchema, type PlatformSkillVersion } from "./platform-skill-version.js";

export type PlatformSkillVersionsListResponse = {
  /** Versions available for the skill. */
  results: PlatformSkillVersion[];
  /** Whether additional results are available. */
  hasMore: boolean;
  /** Cursor for the next page, or null when no more results are available. */
  nextCursor: string | null;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillVersionsListResponseSchema: Schema<PlatformSkillVersionsListResponse> =
  s.object<PlatformSkillVersionsListResponse>({
    results: s.array(s.lazy(() => platformSkillVersionSchema)),
    hasMore: s.boolean(),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
