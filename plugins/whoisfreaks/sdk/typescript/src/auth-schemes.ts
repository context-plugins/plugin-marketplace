import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyQueryAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyQueryAuth("apiKeyAuth", {
      name: "apiKey",
      secret: options.apiKeyAuth ?? environmentVariable("WHOIS_FREAKS_API_KEY_AUTH"),
    }),
  };
}
