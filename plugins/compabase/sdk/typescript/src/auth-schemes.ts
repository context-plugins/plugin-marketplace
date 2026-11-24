import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth("apiKeyAuth", {
      name: "X-API-Key",
      secret: options.apiKeyAuth ?? environmentVariable("COMPABASE_API_KEY_AUTH"),
    }),
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("COMPABASE_BEARER_AUTH")),
  };
}
