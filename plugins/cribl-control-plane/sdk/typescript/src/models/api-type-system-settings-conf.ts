import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sslTypeSystemSettingsConfApiSchema,
  type SslTypeSystemSettingsConfApi,
} from "./ssl-type-system-settings-conf-api.js";

/** API server configuration for the Cribl instance. */
export type ApiTypeSystemSettingsConf = {
  /** Base URL for the API server. Used when the server is behind a reverse proxy. */
  baseUrl?: string;
  /** If <code>true</code>, disable the API response cache. Otherwise, <code>false</code>. */
  disableApiCache?: boolean;
  /** If <code>true</code>, the API server is disabled. Otherwise, <code>false</code>. */
  disabled: boolean;
  /** Custom HTTP response headers to include in every API response. */
  headers?: Record<string, string>;
  /** Hostname or IP address the API server listens on. */
  host: string;
  /**
   * Idle session timeout in seconds. Sessions are invalidated after the specified seconds of
   * inactivity.
   */
  idleSessionTtl?: number;
  /**
   * If <code>true</code>, bind to the configured port as the server listen port. Otherwise,
   * <code>false</code>.
   */
  listenOnPort?: boolean;
  /** Rate limit for login attempts. Value is a string such as <code>100/min</code>. */
  loginRateLimit?: string;
  /** Port number the API server listens on. */
  port: number;
  /** API protocol: <code>http</code> or <code>https</code>. */
  protocol?: string;
  /**
   * If <code>true</code>, enable JavaScript scripting support in the API. Otherwise,
   * <code>false</code>.
   */
  scripts?: boolean;
  /** List of field names whose values are redacted in API responses and logs. */
  sensitiveFields?: string[];
  /** TLS configuration for the API server. */
  ssl?: SslTypeSystemSettingsConfApi;
  /** Rate limit for SSO authentication attempts. Value is a string such as <code>100/min</code>. */
  ssoRateLimit?: string;
  /**
   * If <code>true</code>, enable remote access (teleporting) to Worker Processes via the API.
   * Otherwise, <code>false</code>.
   */
  workerRemoteAccess?: boolean;
};

export const apiTypeSystemSettingsConfSchema: Schema<ApiTypeSystemSettingsConf> =
  s.object<ApiTypeSystemSettingsConf>({
    baseUrl: s.optional(s.string()),
    disableApiCache: s.optional(s.boolean()),
    disabled: s.boolean(),
    headers: s.optional(s.record(s.string(), s.string())),
    host: s.string(),
    idleSessionTtl: s.optional(s.int()),
    listenOnPort: s.optional(s.boolean()),
    loginRateLimit: s.optional(s.string()),
    port: s.int(),
    protocol: s.optional(s.string()),
    scripts: s.optional(s.boolean()),
    sensitiveFields: s.optional(s.array(s.string())),
    ssl: s.optional(s.lazy(() => sslTypeSystemSettingsConfApiSchema)),
    ssoRateLimit: s.optional(s.string()),
    workerRemoteAccess: s.optional(s.boolean()),
    _keysMap: {
      idleSessionTtl: "idleSessionTTL",
    },
  });
