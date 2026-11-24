import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("UI_PATH_BEARER_AUTH")),
    apiKeyAuth: apiKeyHeaderAuth("apiKeyAuth", {
      name: "Authorization",
      secret: options.apiKeyAuth ?? environmentVariable("UI_PATH_API_KEY_AUTH"),
    }),
  };
}
