import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly authtokenAuth: AuthScheme;
  readonly apiKey: AuthScheme;
  readonly deliveryToken: AuthScheme;
  readonly managementTokenAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: bearerAuth(
      "bearerAuth",
      options.bearerAuth ?? environmentVariable("CONTENTSTACK_BEARER_AUTH"),
    ),
    authtokenAuth: apiKeyHeaderAuth("authtokenAuth", {
      name: "authtoken",
      secret: options.authtokenAuth ?? environmentVariable("CONTENTSTACK_AUTHTOKEN_AUTH"),
    }),
    apiKey: apiKeyHeaderAuth("apiKey", {
      name: "api_key",
      secret: options.apiKey ?? environmentVariable("CONTENTSTACK_API_KEY"),
    }),
    deliveryToken: apiKeyHeaderAuth("deliveryToken", {
      name: "access_token",
      secret: options.deliveryToken ?? environmentVariable("CONTENTSTACK_DELIVERY_TOKEN"),
    }),
    managementTokenAuth: apiKeyHeaderAuth("managementTokenAuth", {
      name: "authorization",
      secret: options.managementTokenAuth ?? environmentVariable("CONTENTSTACK_MANAGEMENT_TOKEN_AUTH"),
    }),
  };
}
