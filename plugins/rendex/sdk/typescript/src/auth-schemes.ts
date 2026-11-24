import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly apiKeyHeader: AuthScheme;
  readonly apiKeyQuery: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("RENDEX_BEARER_AUTH")),
    apiKeyHeader: apiKeyHeaderAuth("apiKeyHeader", {
      name: "x-api-key",
      secret: options.apiKeyHeader ?? environmentVariable("RENDEX_API_KEY_HEADER"),
    }),
    apiKeyQuery: apiKeyQueryAuth("apiKeyQuery", {
      name: "key",
      secret: options.apiKeyQuery ?? environmentVariable("RENDEX_API_KEY_QUERY"),
    }),
  };
}
