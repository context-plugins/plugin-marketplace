import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: apiKeyHeaderAuth("apiKey", {
      name: "x-api-token",
      secret: options.apiKey ?? environmentVariable("MR_SCRAPER_API_KEY"),
    }),
    bearerAuth: apiKeyHeaderAuth("bearerAuth", {
      name: "Authorization",
      secret: options.bearerAuth ?? environmentVariable("MR_SCRAPER_BEARER_AUTH"),
    }),
  };
}
