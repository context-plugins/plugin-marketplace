import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly apiKeyHeader: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("ODDS_RELAY_BEARER_AUTH")),
    apiKeyHeader: apiKeyHeaderAuth("apiKeyHeader", {
      name: "x-api-key",
      secret: options.apiKeyHeader ?? environmentVariable("ODDS_RELAY_API_KEY_HEADER"),
    }),
  };
}
