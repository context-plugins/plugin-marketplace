import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiToken: apiKeyHeaderAuth("apiToken", {
      name: "Shortcut-Token",
      secret: options.apiToken ?? environmentVariable("SHORTCUT_API_TOKEN"),
    }),
  };
}
