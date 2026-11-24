import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKeyQuery: AuthScheme;
  readonly x402Payment: AuthScheme;
  readonly recallsBatchToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyQuery: apiKeyQueryAuth("apiKeyQuery", {
      name: "key",
      secret: options.apiKeyQuery ?? environmentVariable("CARS_XE_API_KEY_QUERY"),
    }),
    x402Payment: apiKeyHeaderAuth("x402Payment", {
      name: "PAYMENT-SIGNATURE",
      secret: options.x402Payment ?? environmentVariable("CARS_XE_X402_PAYMENT"),
    }),
    recallsBatchToken: apiKeyHeaderAuth("recallsBatchToken", {
      name: "X-CarsXE-Batch-Token",
      secret: options.recallsBatchToken ?? environmentVariable("CARS_XE_RECALLS_BATCH_TOKEN"),
    }),
  };
}
