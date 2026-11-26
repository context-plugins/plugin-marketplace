import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import { environmentVariable } from "./core/runtime-environment.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly chatbotAuthAuthorizationCode: AuthScheme;
  readonly chatbotAuthImplicit: AuthScheme;
  readonly jwtBearer: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    chatbotAuthAuthorizationCode: oauth2RefreshableScheme(
      "chatbotAuthAuthorizationCode",
      options.chatbotAuthAuthorizationCode,
      options.chatbotAuthAuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/authorize"),
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
      "chatbot_api",
    ),
    chatbotAuthImplicit: apiKeyHeaderAuth("chatbotAuthImplicit", {
      name: "Authorization",
      secret: options.chatbotAuthImplicit ?? environmentVariable("EINSTEIN_BOTS_CHATBOT_AUTH_IMPLICIT"),
    }),
    jwtBearer: bearerAuth("jwtBearer", options.jwtBearer ?? environmentVariable("EINSTEIN_BOTS_JWT_BEARER")),
  };
}
