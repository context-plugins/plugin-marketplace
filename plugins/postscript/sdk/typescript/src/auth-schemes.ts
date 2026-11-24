import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly sec0: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    sec0: apiKeyHeaderAuth("sec0", {
      name: "Authorization",
      secret: options.sec0 ?? environmentVariable("POSTSCRIPT_SEC0"),
    }),
  };
}
