import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://api.ap3api.com/v1")),
};

const environment2Schemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://api.au.ap3api.com/v1")),
};

const environment3Schemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://api.eu.ap3api.com/v1")),
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Environment2:
      return { baseUrl: environment2Schemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Environment3:
      return { baseUrl: environment3Schemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
