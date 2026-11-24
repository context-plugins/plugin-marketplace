import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearer: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearer: bearerAuth("bearer", options.bearer ?? environmentVariable("SKRIBBLE_BEARER")),
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("SKRIBBLE_BEARER_AUTH")),
  };
}
