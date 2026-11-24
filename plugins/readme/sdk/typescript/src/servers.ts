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
  defaultReadMeApiKeysApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://metrics.readme.io/v1")) },
  defaultReadMeApiKeysApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.readme.com/v2")) },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://metrics.readme.io/v1")) },
  defaultReadMeApiKeysApi: { baseUrl: s.of(s.defaulted(s.string(), "https://dash.readme.io/api/v1")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultReadMeApiKeysApi: resolveBaseUrl(defaultReadMeApiKeysApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultReadMeApiKeysApi: (subPath) => ({ baseUrl: base.defaultReadMeApiKeysApi, subPath }),
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

function defaultReadMeApiKeysApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultReadMeApiKeysApi.baseUrl.decode(
          options.serverOptions?.defaultReadMeApiKeysApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultReadMeApiKeysApi.baseUrl.decode(
          options.serverOptions?.defaultReadMeApiKeysApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
