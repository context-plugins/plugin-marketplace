import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly clientIdHeader: AuthScheme;
  readonly apiKeyHeader: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("AIRWALLEX_BEARER_AUTH")),
    clientIdHeader: apiKeyHeaderAuth("clientIdHeader", {
      name: "x-client-id",
      secret: options.clientIdHeader ?? environmentVariable("AIRWALLEX_CLIENT_ID_HEADER"),
    }),
    apiKeyHeader: apiKeyHeaderAuth("apiKeyHeader", {
      name: "x-api-key",
      secret: options.apiKeyHeader ?? environmentVariable("AIRWALLEX_API_KEY_HEADER"),
    }),
  };
}
