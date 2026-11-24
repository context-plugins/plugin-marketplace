import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuthScheme: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuthScheme: bearerAuth(
      "bearerAuthScheme",
      options.bearerAuthScheme ?? environmentVariable("BEEHIIV_BEARER_AUTH_SCHEME"),
    ),
  };
}
