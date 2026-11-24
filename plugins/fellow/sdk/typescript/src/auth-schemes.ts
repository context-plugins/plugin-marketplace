import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly developerApiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    developerApiKeyAuth: apiKeyHeaderAuth("developerApiKeyAuth", {
      name: "X-API-KEY",
      secret: options.developerApiKeyAuth ?? environmentVariable("FELLOW_DEVELOPER_API_KEY_AUTH"),
    }),
  };
}
