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
  defaultBusinessCentralAdministrationCenterAppManagementApi: (subPath: string) => UrlTemplate;
  defaultBusinessCentralAutomationApiV20CompaniesApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://api.businesscentral.dynamics.com/v2.0/{environment}/api/v2.0"),
    ),
    environment: s.of(s.defaulted(s.string(), "production")),
  },
  authServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://login.microsoftonline.com/{tenantId}/oauth2/v2.0")),
  },
  defaultBusinessCentralAdministrationCenterAppManagementApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.businesscentral.dynamics.com/admin/v2.28")),
  },
  defaultBusinessCentralAutomationApiV20CompaniesApi: {
    baseUrl: s.of(
      s.defaulted(
        s.string(),
        "https://api.businesscentral.dynamics.com/v2.0/{environment}/api/microsoft/automation/v2.0",
      ),
    ),
    environment: s.of(s.defaulted(s.string(), "production")),
  },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://{server}:{port}/{instance}/api/v2.0")),
    server: s.of(s.defaulted(s.string(), "localhost")),
    port: s.of(s.defaulted(s.string(), "7048")),
    instance: s.of(s.defaulted(s.string(), "BC")),
  },
  authServer: {
    baseUrl: s.of(s.defaulted(s.string(), "https://login.microsoftonline.com/{tenantId}/oauth2/v2.0")),
  },
  defaultBusinessCentralAdministrationCenterAppManagementApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.businesscentral.dynamics.com/admin/v2.28")),
  },
  defaultBusinessCentralAutomationApiV20CompaniesApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://{server}:{port}/{instance}/api/microsoft/automation/v2.0"),
    ),
    server: s.of(s.defaulted(s.string(), "localhost")),
    port: s.of(s.defaulted(s.string(), "7048")),
    instance: s.of(s.defaulted(s.string(), "BC")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    authServer: resolveBaseUrl(authServerServer(options)),
    defaultBusinessCentralAdministrationCenterAppManagementApi: resolveBaseUrl(
      defaultBusinessCentralAdministrationCenterAppManagementApiServer(options),
    ),
    defaultBusinessCentralAutomationApiV20CompaniesApi: resolveBaseUrl(
      defaultBusinessCentralAutomationApiV20CompaniesApiServer(options),
    ),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    authServer: (subPath) => ({ baseUrl: base.authServer, subPath }),
    defaultBusinessCentralAdministrationCenterAppManagementApi: (subPath) => ({
      baseUrl: base.defaultBusinessCentralAdministrationCenterAppManagementApi,
      subPath,
    }),
    defaultBusinessCentralAutomationApiV20CompaniesApi: (subPath) => ({
      baseUrl: base.defaultBusinessCentralAutomationApiV20CompaniesApi,
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
          environment: productionSchemas.default.environment.decode(
            options.serverOptions?.default?.environment,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          server: environment2Schemas.default.server.decode(options.serverOptions?.default?.server),
          port: environment2Schemas.default.port.decode(options.serverOptions?.default?.port),
          instance: environment2Schemas.default.instance.decode(options.serverOptions?.default?.instance),
        },
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

function defaultBusinessCentralAdministrationCenterAppManagementApiServer(
  options: ClientOptions,
): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultBusinessCentralAdministrationCenterAppManagementApi.baseUrl.decode(
          options.serverOptions?.defaultBusinessCentralAdministrationCenterAppManagementApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl:
          environment2Schemas.defaultBusinessCentralAdministrationCenterAppManagementApi.baseUrl.decode(
            options.serverOptions?.defaultBusinessCentralAdministrationCenterAppManagementApi?.baseUrl,
          ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultBusinessCentralAutomationApiV20CompaniesApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultBusinessCentralAutomationApiV20CompaniesApi.baseUrl.decode(
          options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.baseUrl,
        ),
        variables: {
          environment:
            productionSchemas.defaultBusinessCentralAutomationApiV20CompaniesApi.environment.decode(
              options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.environment,
            ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultBusinessCentralAutomationApiV20CompaniesApi.baseUrl.decode(
          options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.baseUrl,
        ),
        variables: {
          server: environment2Schemas.defaultBusinessCentralAutomationApiV20CompaniesApi.server.decode(
            options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.server,
          ),
          port: environment2Schemas.defaultBusinessCentralAutomationApiV20CompaniesApi.port.decode(
            options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.port,
          ),
          instance: environment2Schemas.defaultBusinessCentralAutomationApiV20CompaniesApi.instance.decode(
            options.serverOptions?.defaultBusinessCentralAutomationApiV20CompaniesApi?.instance,
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
