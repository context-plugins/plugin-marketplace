import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";

export type AuthenticationToken = {
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /**
   * Shared secret to be provided by any client (in authToken header field). If empty, unauthorized
   * access is permitted.
   */
  authToken?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
};

export const authenticationTokenSchema: Schema<AuthenticationToken> = s.object<AuthenticationToken>({
  authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
  authToken: s.optional(s.string()),
  textSecret: s.optional(s.string()),
});
