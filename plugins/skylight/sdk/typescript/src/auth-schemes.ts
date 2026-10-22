import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apikey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apikey: apiKeyHeaderAuth({ name: "X-API-Key", token: options.apikey }),
  };
}
