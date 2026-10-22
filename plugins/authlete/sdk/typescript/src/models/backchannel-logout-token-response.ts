import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action19Schema, type Action19 } from "./action19.js";

export type BackchannelLogoutTokenResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the API caller should take. */
  action?: Action19;
  /**
   * The logout token issued for the client. The caller should deliver this token to the client's
   * `backchannelLogoutUri`.
   */
  logoutToken?: string;
  /**
   * The backchannel logout URI of the client. The caller should POST the `logoutToken` to this URI.
   */
  backchannelLogoutUri?: string;
};

export const backchannelLogoutTokenResponseSchema: Schema<BackchannelLogoutTokenResponse> =
  s.object<BackchannelLogoutTokenResponse>({
    resultCode: s.optional(s.string()),
    resultMessage: s.optional(s.string()),
    action: s.optional(s.lazy(() => action19Schema)),
    logoutToken: s.optional(s.string()),
    backchannelLogoutUri: s.optional(s.string()),
  });
