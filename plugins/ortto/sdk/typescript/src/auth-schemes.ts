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
      name: "X-Api-Key",
      secret: options.apiKeyAuth ?? environmentVariable("ORTTO_API_KEY_AUTH"),
    }),
  };
}
