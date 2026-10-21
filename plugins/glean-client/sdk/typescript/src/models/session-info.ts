import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionInfo = {
  /**
   * A unique token for this session. A new session (and token) is created when the user issues a
   * request from a new tab or when our server hasn't seen activity for more than 10 minutes from a
   * tab.
   */
  sessionTrackingToken?: string;
  /**
   * A unique id for all requests a user makes from a given tab, no matter how far apart. A new tab
   * id is only generated when a user issues a request from a new tab.
   */
  tabId?: string;
  /** The last time the server saw this token. */
  lastSeen?: Date;
  /** The last query seen by the server. */
  lastQuery?: string;
};

export const sessionInfoSchema: Schema<SessionInfo> = s.object<SessionInfo>({
  sessionTrackingToken: s.optional(s.string()),
  tabId: s.optional(s.string()),
  lastSeen: s.optional(s.dateTime()),
  lastQuery: s.optional(s.string()),
});
