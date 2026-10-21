import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timelineEventSchema, type TimelineEvent } from "./timeline-event.js";
import { sessionStartSchema, type SessionStart } from "./unions/session-start.js";

/** Consolidated, time-ordered timeline of a session's events. */
export type SessionTimelineResponse = {
  /** Internal ID of the session */
  sessionId: string;
  /**
   * The call's start (placement) time; the zero point for all offsets. Falls back to the first
   * transcript turn for legacy sessions with no session_start event.
   */
  sessionStart?: SessionStart;
  /** All events, ordered by timestamp ascending */
  events: TimelineEvent[];
};

export const sessionTimelineResponseSchema: Schema<SessionTimelineResponse> =
  s.object<SessionTimelineResponse>({
    sessionId: s.string(),
    sessionStart: s.optional(s.lazy(() => sessionStartSchema)),
    events: s.array(s.lazy(() => timelineEventSchema)),
    _keysMap: {
      sessionId: "session_id",
      sessionStart: "session_start",
    },
  });
