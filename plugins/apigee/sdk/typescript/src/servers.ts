import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  authServer: (subPath: string) => UrlTemplate;
  accessTokenServer: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://apigee.googleapis.com")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://accounts.google.com/o/oauth2")) },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "https://oauth2.googleapis.com")) },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://apihub.googleapis.com")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://accounts.google.com/o/oauth2")) },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "https://oauth2.googleapis.com")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    authServer: resolveBaseUrl(authServerServer(options)),
    accessTokenServer: resolveBaseUrl(accessTokenServerServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    authServer: (subPath) => ({ baseUrl: base.authServer, subPath }),
    accessTokenServer: (subPath) => ({ baseUrl: base.accessTokenServer, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment2:
      return { baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    default:
      unknownEnvironment(environment);
  }
}

function authServerServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    default:
      unknownEnvironment(environment);
  }
}

function accessTokenServerServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.accessTokenServer.baseUrl.decode(
          options.serverOptions?.accessTokenServer?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.accessTokenServer.baseUrl.decode(
          options.serverOptions?.accessTokenServer?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
