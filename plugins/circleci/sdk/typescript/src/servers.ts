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
  defaultCircleCiRestApiV2ContextApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://circleci.com/api/v1.1")) },
  defaultCircleCiRestApiV2ContextApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://circleci.com/api/v2")),
  },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://circleci.com/api/v2")) },
  defaultCircleCiRestApiV2ContextApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://circleci.com/api/v2")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultCircleCiRestApiV2ContextApi: resolveBaseUrl(defaultCircleCiRestApiV2ContextApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultCircleCiRestApiV2ContextApi: (subPath) => ({
      baseUrl: base.defaultCircleCiRestApiV2ContextApi,
      subPath,
    }),
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

function defaultCircleCiRestApiV2ContextApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultCircleCiRestApiV2ContextApi.baseUrl.decode(
          options.serverOptions?.defaultCircleCiRestApiV2ContextApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultCircleCiRestApiV2ContextApi.baseUrl.decode(
          options.serverOptions?.defaultCircleCiRestApiV2ContextApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
