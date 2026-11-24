import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly sigv4Auth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    sigv4Auth: apiKeyHeaderAuth("sigv4Auth", {
      name: "Authorization",
      secret: options.sigv4Auth ?? environmentVariable("AMAZON_VPC_SIGV4_AUTH"),
    }),
  };
}
