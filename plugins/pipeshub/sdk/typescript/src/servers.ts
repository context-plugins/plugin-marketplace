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
};

const productionSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "{instance_url}/api/v1")),
  instanceUrl: s.of(s.defaulted(s.string(), "https://app.pipeshub.com")),
};

const environment2Schemas = {
  baseUrl: s.of(s.defaulted(s.string(), "{instance_url}")),
  instanceUrl: s.of(s.defaulted(s.string(), "https://app.pipeshub.com")),
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
      return {
        baseUrl: productionSchemas.baseUrl.decode(options.serverOptions?.baseUrl),
        variables: { instance_url: productionSchemas.instanceUrl.decode(options.serverOptions?.instanceUrl) },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.baseUrl.decode(options.serverOptions?.baseUrl),
        variables: {
          instance_url: environment2Schemas.instanceUrl.decode(options.serverOptions?.instanceUrl),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
