import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType22Schema, type AuthenticationType22 } from "./authentication-type22.js";

/** Authentication settings for Grafana Cloud requests. */
export type PrometheusAuthType = {
  /** Authentication type */
  authType?: AuthenticationType22;
  /**
   * Bearer token to include in the authorization header. In Grafana Cloud, this is generally built
   * by concatenating the username and the API key, separated by a colon. Example:
   * <your-username>:<your-api-key>
   */
  token?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** Username for authentication */
  username?: string;
  /** Password (API key in Grafana Cloud domain) for authentication */
  password?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
};

export const prometheusAuthTypeSchema: Schema<PrometheusAuthType> = s.object<PrometheusAuthType>({
  authType: s.optional(s.lazy(() => authenticationType22Schema)),
  token: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
});
