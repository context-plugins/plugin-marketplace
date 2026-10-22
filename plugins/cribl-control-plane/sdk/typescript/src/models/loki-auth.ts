import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType21Schema, type AuthenticationType21 } from "./authentication-type21.js";

/** Authentication settings for Loki requests. */
export type LokiAuth = {
  /** Loki logs authentication type */
  authType?: AuthenticationType21;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Bearer token to include in the authorization header */
  token?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
};

export const lokiAuthSchema: Schema<LokiAuth> = s.object<LokiAuth>({
  authType: s.optional(s.lazy(() => authenticationType21Schema)),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
});
