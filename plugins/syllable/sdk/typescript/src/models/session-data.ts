import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sessionMessageSchema, type SessionMessage } from "./session-message.js";

export type SessionData = {
  /** Session ID */
  sessionId: number;
  /** Session source */
  source: string;
  /** Session target */
  target: string;
  /** Is test session */
  isTest: boolean;
  /** Session messages */
  messages: SessionMessage[];
};

export const sessionDataSchema: Schema<SessionData> = s.object<SessionData>({
  sessionId: s.int(),
  source: s.string(),
  target: s.string(),
  isTest: s.boolean(),
  messages: s.array(s.lazy(() => sessionMessageSchema)),
  _keysMap: {
    sessionId: "session_id",
    isTest: "is_test",
  },
});
