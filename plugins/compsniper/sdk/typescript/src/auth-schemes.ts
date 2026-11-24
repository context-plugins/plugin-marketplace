import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth(
      "bearerAuth",
      options.bearerAuth ?? environmentVariable("COMP_SNIPER_BEARER_AUTH"),
    ),
  };
}
