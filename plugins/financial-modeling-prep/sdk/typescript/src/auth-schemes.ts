import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyQueryAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyQuery: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyQuery: apiKeyQueryAuth("apiKeyQuery", {
      name: "apikey",
      secret: options.apiKeyQuery ?? environmentVariable("FINANCIAL_MODELING_PREP_API_KEY_QUERY"),
    }),
  };
}
