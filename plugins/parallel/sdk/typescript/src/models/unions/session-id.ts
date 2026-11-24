import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Session identifier to track calls across separate search and extract calls, to be used as part of
 * a larger task. Specifying it may give better contextual results for subsequent API calls.
 */
export type SessionId = string;

export const sessionIdInternalSchema: Schema<SessionId> = s.of<SessionId>(s.union([s.string()]));

export const sessionIdSchema: Schema<SessionId> = s.lazySchema(() =>
  s.of<SessionId>(s.union([s.string().check(s.maxLength(1000))])),
);
