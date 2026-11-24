import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth("apiKeyAuth", {
      name: "X-API-Key",
      secret: options.apiKeyAuth ?? environmentVariable("PLINTH_US_GRANTS_DATA_API_KEY_AUTH"),
    }),
  };
}
