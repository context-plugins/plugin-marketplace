import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiToken: apiKeyHeaderAuth({ name: "Shortcut-Token", token: options.apiToken }),
  };
}
