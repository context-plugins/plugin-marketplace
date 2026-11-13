import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuth, bearerAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly clientBasic: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth(options.bearerAuth),
    clientBasic: basicAuth(options.clientBasic),
  };
}
