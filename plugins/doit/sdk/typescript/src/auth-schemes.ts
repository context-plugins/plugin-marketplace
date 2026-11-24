import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import { environmentVariable } from "./core/runtime-environment.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly tenantId: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    apiKey: apiKeyHeaderAuth("apiKey", {
      name: "Authorization",
      secret: options.apiKey ?? environmentVariable("DOI_T_API_KEY"),
    }),
    tenantId: apiKeyHeaderAuth("tenantId", {
      name: "X-Tenant-Id",
      secret: options.tenantId ?? environmentVariable("DOI_T_TENANT_ID"),
    }),
    oauth2: oauth2RefreshableScheme(
      "oauth2",
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/oauth"),
          tokenUrl: servers.accessTokenServer("/token"),
          rawClient,
          placement: "header",
        }),
      "dci",
    ),
  };
}
