import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillSchema, type PlatformSkill } from "./platform-skill.js";

export type PlatformSkillsListResponse = {
  /** Skills available to the user. */
  results: PlatformSkill[];
  /** Whether additional results are available. */
  hasMore: boolean;
  /** Cursor for the next page, or null when no more results are available. */
  nextCursor: string | null;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillsListResponseSchema: Schema<PlatformSkillsListResponse> =
  s.object<PlatformSkillsListResponse>({
    results: s.array(s.lazy(() => platformSkillSchema)),
    hasMore: s.boolean(),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
