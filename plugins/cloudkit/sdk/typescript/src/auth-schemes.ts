import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly cloudKitApiToken: AuthScheme;
  readonly serverToServer: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    cloudKitApiToken: apiKeyQueryAuth("cloudKitApiToken", {
      name: "ckAPIToken",
      secret: options.cloudKitApiToken ?? environmentVariable("CLOUD_KIT_CLOUD_KIT_API_TOKEN"),
    }),
    serverToServer: apiKeyHeaderAuth("serverToServer", {
      name: "X-Apple-CloudKit-Request-SignatureV1",
      secret: options.serverToServer ?? environmentVariable("CLOUD_KIT_SERVER_TO_SERVER"),
    }),
  };
}
