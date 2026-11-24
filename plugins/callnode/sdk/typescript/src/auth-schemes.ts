import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
  readonly timestampAuth: AuthScheme;
  readonly signatureAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyHeaderAuth("apiKeyAuth", {
      name: "X-Api-Key",
      secret: options.apiKeyAuth ?? environmentVariable("CALL_NODE_API_KEY_AUTH"),
    }),
    timestampAuth: apiKeyHeaderAuth("timestampAuth", {
      name: "X-Timestamp",
      secret: options.timestampAuth ?? environmentVariable("CALL_NODE_TIMESTAMP_AUTH"),
    }),
    signatureAuth: apiKeyHeaderAuth("signatureAuth", {
      name: "X-Signature",
      secret: options.signatureAuth ?? environmentVariable("CALL_NODE_SIGNATURE_AUTH"),
    }),
  };
}
