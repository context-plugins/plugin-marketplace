import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationTypeSchema, type AuthenticationType } from "./authentication-type.js";

/** Authentication settings for Prometheus Remote Write requests. */
export type PrometheusAuth = {
  /** Remote Write authentication type */
  authType?: AuthenticationType;
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

export const prometheusAuthSchema: Schema<PrometheusAuth> = s.object<PrometheusAuth>({
  authType: s.optional(s.lazy(() => authenticationTypeSchema)),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
});
