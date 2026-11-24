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
  defaultAmazonTranscribeServiceOperationsApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://transcribe.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonTranscribeServiceOperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://transcribestreaming.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://transcribe.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonTranscribeServiceOperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://transcribe.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultAmazonTranscribeServiceOperationsApi: resolveBaseUrl(
      defaultAmazonTranscribeServiceOperationsApiServer(options),
    ),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultAmazonTranscribeServiceOperationsApi: (subPath) => ({
      baseUrl: base.defaultAmazonTranscribeServiceOperationsApi,
      subPath,
    }),
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
        variables: {
          region: environment2Schemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonTranscribeServiceOperationsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonTranscribeServiceOperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonTranscribeServiceOperationsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonTranscribeServiceOperationsApi.region.decode(
            options.serverOptions?.defaultAmazonTranscribeServiceOperationsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonTranscribeServiceOperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonTranscribeServiceOperationsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonTranscribeServiceOperationsApi.region.decode(
            options.serverOptions?.defaultAmazonTranscribeServiceOperationsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
