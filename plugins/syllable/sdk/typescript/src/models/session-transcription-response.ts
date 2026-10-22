import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sessionActionSchema, type SessionAction } from "./session-action.js";
import { sessionTextSchema, type SessionText } from "./session-text.js";

/**
 * Text transcript of a given session. For more information, see [Console
 * docs](https://docs.syllable.ai/workspaces/Sessions).
 */
export type SessionTranscriptionResponse = {
  /** Internal ID of the session */
  sessionId: string;
  /** Transcriptions of all messages in the session */
  transcription: SessionText[];
  /** Tool invocations that occurred during the session */
  actions: SessionAction[];
  /**
   * True when every record the session reported writing is present, across both the spoken
   * transcript and the tool activity in `actions`. False means the record cannot be confirmed
   * complete. Callers should re-request until this is true, or until their own time limit passes. A
   * limit is required rather than advisable, because three of the cases behind a False never turn
   * true: a session still in progress, a session whose channel reports no expected count - only
   * voice does today, so this is every web chat, SMS and email session - and any session that ended
   * before this field was introduced.
   *
   * @default false
   */
  transcriptComplete?: boolean;
};

export const sessionTranscriptionResponseSchema: Schema<SessionTranscriptionResponse> =
  s.object<SessionTranscriptionResponse>({
    sessionId: s.string(),
    transcription: s.array(s.lazy(() => sessionTextSchema)),
    actions: s.array(s.lazy(() => sessionActionSchema)),
    transcriptComplete: s.defaulted(s.boolean(), false),
    _keysMap: {
      sessionId: "session_id",
      transcriptComplete: "transcript_complete",
    },
  });
