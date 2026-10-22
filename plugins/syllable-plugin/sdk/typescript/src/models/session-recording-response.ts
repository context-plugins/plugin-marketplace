import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recordingsSchema, type Recordings } from "./unions/recordings.js";
import { sessionId6Schema, type SessionId6 } from "./unions/session-id6.js";

/** Recording URLs for a given session. */
export type SessionRecordingResponse = {
  /** The internal ID of the session */
  sessionId?: SessionId6;
  /** List of recording URLs */
  recordings?: Recordings;
};

export const sessionRecordingResponseSchema: Schema<SessionRecordingResponse> =
  s.object<SessionRecordingResponse>({
    sessionId: s.optional(s.lazy(() => sessionId6Schema)),
    recordings: s.optional(s.lazy(() => recordingsSchema)),
    _keysMap: {
      sessionId: "session_id",
    },
  });
