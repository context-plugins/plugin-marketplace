import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorizationConfigSchema, type AuthorizationConfig } from "./authorization-config.js";

export type HttpDataSourceConfig = {
  /**
   * The HTTP URL endpoint. You can specify either the domain name or IP, and port combination, and
   * the URL scheme must be HTTP or HTTPS. If you don't specify the port, AppSync uses the default
   * port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.
   */
  endpoint?: string;
  authorizationConfig?: AuthorizationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpDataSourceConfigSchema: Schema<HttpDataSourceConfig> = s.object<HttpDataSourceConfig>(
  {
    endpoint: s.optional(s.string()),
    authorizationConfig: s.optional(s.lazy(() => authorizationConfigSchema)),
  },
  { additionalProperties: s.json() },
);
