import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";
import { nextcursorSchema, type Nextcursor } from "./unions/nextcursor.js";

/**
 * One entry per session (the session's most recent run), most-recent first.
 *
 * A V4 session is a conversation: every follow-up run reuses the same public_session_id. GET
 * /api/v4/runs returns one row per RUN, so callers that want a list of distinct *sessions* (e.g.
 * the recent-sessions panel) should use this instead of de-duplicating runs client-side.
 */
export type SessionListResponse = {
  sessions: SessionInfo[];
  nextCursor?: Nextcursor;
  /** @default false */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionListResponseSchema: Schema<SessionListResponse> = s.object<SessionListResponse>(
  {
    sessions: s.array(s.lazy(() => sessionInfoSchema)),
    nextCursor: s.optional(s.lazy(() => nextcursorSchema)),
    hasMore: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
