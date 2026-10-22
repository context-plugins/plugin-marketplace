import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";

export type AuthToken6 = {
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /** Select or create a stored text secret */
  tokenSecret?: string;
  /**
   * Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is
   * permitted.
   */
  token?: string;
  /** Description */
  description?: string;
};

export const authToken6Schema: Schema<AuthToken6> = s.object<AuthToken6>({
  authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
  tokenSecret: s.optional(s.string()),
  token: s.optional(s.string()),
  description: s.optional(s.string()),
});
