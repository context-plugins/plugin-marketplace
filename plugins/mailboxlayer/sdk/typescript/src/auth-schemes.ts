import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyQueryAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly accessKeyQuery: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    accessKeyQuery: apiKeyQueryAuth("accessKeyQuery", {
      name: "access_key",
      secret: options.accessKeyQuery ?? environmentVariable("MAILBOXLAYER_ACCESS_KEY_QUERY"),
    }),
  };
}
