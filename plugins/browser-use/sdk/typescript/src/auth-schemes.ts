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
      name: "X-Browser-Use-API-Key",
      secret: options.apiKeyHeader ?? environmentVariable("BROWSER_USE_API_KEY_HEADER"),
    }),
  };
}
