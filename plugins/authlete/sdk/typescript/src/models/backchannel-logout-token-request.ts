import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackchannelLogoutTokenRequest = {
  /** The identifier of the client application. Either a client ID or a client alias. */
  clientIdentifier: string;
  /**
   * The subject (end-user) identifier. The logout token will be issued for this subject. At least
   * one of `subject` or `sessionId` must be provided.
   */
  subject?: string;
  /**
   * The session ID (`sid`) identifying the user session to log out. At least one of `subject` or
   * `sessionId` must be provided.
   */
  sessionId?: string;
};

export const backchannelLogoutTokenRequestSchema: Schema<BackchannelLogoutTokenRequest> =
  s.object<BackchannelLogoutTokenRequest>({
    clientIdentifier: s.string(),
    subject: s.optional(s.string()),
    sessionId: s.optional(s.string()),
  });
