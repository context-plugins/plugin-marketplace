import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";
import { Region, regionSchema } from "./models/region.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  authServer: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://{region}.cloudinary.com")),
    region: s.of(s.defaulted(regionSchema, Region.Api)),
  },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://oauth.cloudinary.com/oauth2")) },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://{host}")),
    host: s.of(s.defaulted(s.string(), "api.cloudinary.com")),
  },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://oauth.cloudinary.com/oauth2")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    authServer: resolveBaseUrl(authServerServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    authServer: (subPath) => ({ baseUrl: base.authServer, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          region: productionSchemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: { host: environment2Schemas.default.host.decode(options.serverOptions?.default?.host) },
      };
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

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
