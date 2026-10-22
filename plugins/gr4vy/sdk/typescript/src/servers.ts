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
  accessTokenServer: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.sandbox.{id}.gr4vy.app")),
    id: s.of(s.defaulted(s.string(), "example")),
  },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "auth")) },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.{id}.gr4vy.app")),
    id: s.of(s.defaulted(s.string(), "example")),
  },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "auth")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    accessTokenServer: resolveBaseUrl(accessTokenServerServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    accessTokenServer: (subPath) => ({ baseUrl: base.accessTokenServer, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: { id: productionSchemas.default.id.decode(options.serverOptions?.default?.id) },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: { id: environment2Schemas.default.id.decode(options.serverOptions?.default?.id) },
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
