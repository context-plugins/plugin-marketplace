import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PazeMobileSession = {
  /** The Paze merchant data ID. */
  id: string;
  /** The merchant display name. */
  name: string;
  /** The Paze profile ID for the given domain. */
  profileId: string;
  /** The Paze OAuth access token. Returned only when `source` is `mobile`. */
  accessToken: string;
  /** The Paze session ID. Returned only when `source` is `mobile`. */
  sessionId: string;
};

export const pazeMobileSessionSchema: Schema<PazeMobileSession> = s.object<PazeMobileSession>({
  id: s.string(),
  name: s.string(),
  profileId: s.string(),
  accessToken: s.string(),
  sessionId: s.string(),
});
