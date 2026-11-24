import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyHeader: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyHeader: apiKeyHeaderAuth("apiKeyHeader", {
      name: "API-KEY",
      secret: options.apiKeyHeader ?? environmentVariable("APPSTORE_SPY_API_KEY_HEADER"),
    }),
  };
}
