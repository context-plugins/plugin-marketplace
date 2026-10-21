import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NativeSsoLogoutRequest = {
  /** The session ID of a user's authentication session. */
  sessionId: string;
};

export const nativeSsoLogoutRequestSchema: Schema<NativeSsoLogoutRequest> = s.object<NativeSsoLogoutRequest>({
  sessionId: s.string(),
});
