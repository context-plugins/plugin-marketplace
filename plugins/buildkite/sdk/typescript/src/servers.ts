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
  defaultBuildkiteAgentMetricsApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.buildkite.com/v2")) },
  defaultBuildkiteAgentMetricsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://agent.buildkite.com/v3")),
  },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.buildkite.com/v2")) },
  defaultBuildkiteAgentMetricsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://agent-edge.buildkite.com/v3")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultBuildkiteAgentMetricsApi: resolveBaseUrl(defaultBuildkiteAgentMetricsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultBuildkiteAgentMetricsApi: (subPath) => ({
      baseUrl: base.defaultBuildkiteAgentMetricsApi,
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

function defaultBuildkiteAgentMetricsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultBuildkiteAgentMetricsApi.baseUrl.decode(
          options.serverOptions?.defaultBuildkiteAgentMetricsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultBuildkiteAgentMetricsApi.baseUrl.decode(
          options.serverOptions?.defaultBuildkiteAgentMetricsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
