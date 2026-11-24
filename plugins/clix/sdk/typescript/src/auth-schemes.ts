import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly projectIdAuth: AuthScheme;
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    projectIdAuth: apiKeyHeaderAuth("projectIdAuth", {
      name: "X-Clix-Project-ID",
      secret: options.projectIdAuth ?? environmentVariable("CLIX_PROJECT_ID_AUTH"),
    }),
    apiKeyAuth: apiKeyHeaderAuth("apiKeyAuth", {
      name: "X-Clix-API-Key",
      secret: options.apiKeyAuth ?? environmentVariable("CLIX_API_KEY_AUTH"),
    }),
  };
}
