import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly jwtIssuerToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    jwtIssuerToken: bearerAuth(
      "jwtIssuerToken",
      options.jwtIssuerToken ?? environmentVariable("SEMRUSH_JWT_ISSUER_TOKEN"),
    ),
  };
}
