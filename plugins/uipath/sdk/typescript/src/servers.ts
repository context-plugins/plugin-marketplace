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
  defaultUiPathAutomationHubAppInventoryApi: (subPath: string) => UrlTemplate;
  defaultUiPathPlatformManagementAuditLogsApi: (subPath: string) => UrlTemplate;
  defaultUiPathDocumentUnderstandingClassificationApi: (subPath: string) => UrlTemplate;
  defaultUiPathDataServiceEntitiesApi: (subPath: string) => UrlTemplate;
  defaultUiPathTestManagerProjectsApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathAutomationHubAppInventoryApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{orgName}/{tenantName}/automationhub_/api/v1"),
    ),
    orgName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathPlatformManagementAuditLogsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://cloud.uipath.com")),
  },
  defaultUiPathDocumentUnderstandingClassificationApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathDataServiceEntitiesApi: {
    baseUrl: s.of(
      s.defaulted(
        s.string(),
        "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService",
      ),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathTestManagerProjectsApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathAutomationHubAppInventoryApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathPlatformManagementAuditLogsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://cloud.uipath.com")),
  },
  defaultUiPathDocumentUnderstandingClassificationApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathDataServiceEntitiesApi: {
    baseUrl: s.of(
      s.defaulted(
        s.string(),
        "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService",
      ),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathTestManagerProjectsApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
};

const environment3Schemas = {
  default: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/orchestrator_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathAutomationHubAppInventoryApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://cloud.uipath.com")),
  },
  defaultUiPathPlatformManagementAuditLogsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://cloud.uipath.com")),
  },
  defaultUiPathDocumentUnderstandingClassificationApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/du_/api/framework"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathDataServiceEntitiesApi: {
    baseUrl: s.of(
      s.defaulted(
        s.string(),
        "https://cloud.uipath.com/{organizationName}/{tenantName}/dataservice_/api/EntityService",
      ),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
  defaultUiPathTestManagerProjectsApi: {
    baseUrl: s.of(
      s.defaulted(s.string(), "https://cloud.uipath.com/{organizationName}/{tenantName}/testmanager_"),
    ),
    organizationName: s.of(s.defaulted(s.string(), "your-org")),
    tenantName: s.of(s.defaulted(s.string(), "your-tenant")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultUiPathAutomationHubAppInventoryApi: resolveBaseUrl(
      defaultUiPathAutomationHubAppInventoryApiServer(options),
    ),
    defaultUiPathPlatformManagementAuditLogsApi: resolveBaseUrl(
      defaultUiPathPlatformManagementAuditLogsApiServer(options),
    ),
    defaultUiPathDocumentUnderstandingClassificationApi: resolveBaseUrl(
      defaultUiPathDocumentUnderstandingClassificationApiServer(options),
    ),
    defaultUiPathDataServiceEntitiesApi: resolveBaseUrl(defaultUiPathDataServiceEntitiesApiServer(options)),
    defaultUiPathTestManagerProjectsApi: resolveBaseUrl(defaultUiPathTestManagerProjectsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultUiPathAutomationHubAppInventoryApi: (subPath) => ({
      baseUrl: base.defaultUiPathAutomationHubAppInventoryApi,
      subPath,
    }),
    defaultUiPathPlatformManagementAuditLogsApi: (subPath) => ({
      baseUrl: base.defaultUiPathPlatformManagementAuditLogsApi,
      subPath,
    }),
    defaultUiPathDocumentUnderstandingClassificationApi: (subPath) => ({
      baseUrl: base.defaultUiPathDocumentUnderstandingClassificationApi,
      subPath,
    }),
    defaultUiPathDataServiceEntitiesApi: (subPath) => ({
      baseUrl: base.defaultUiPathDataServiceEntitiesApi,
      subPath,
    }),
    defaultUiPathTestManagerProjectsApi: (subPath) => ({
      baseUrl: base.defaultUiPathTestManagerProjectsApi,
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
          organizationName: productionSchemas.default.organizationName.decode(
            options.serverOptions?.default?.organizationName,
          ),
          tenantName: productionSchemas.default.tenantName.decode(options.serverOptions?.default?.tenantName),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          organizationName: environment2Schemas.default.organizationName.decode(
            options.serverOptions?.default?.organizationName,
          ),
          tenantName: environment2Schemas.default.tenantName.decode(
            options.serverOptions?.default?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          organizationName: environment3Schemas.default.organizationName.decode(
            options.serverOptions?.default?.organizationName,
          ),
          tenantName: environment3Schemas.default.tenantName.decode(
            options.serverOptions?.default?.tenantName,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultUiPathAutomationHubAppInventoryApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultUiPathAutomationHubAppInventoryApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.baseUrl,
        ),
        variables: {
          orgName: productionSchemas.defaultUiPathAutomationHubAppInventoryApi.orgName.decode(
            options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.orgName,
          ),
          tenantName: productionSchemas.defaultUiPathAutomationHubAppInventoryApi.tenantName.decode(
            options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultUiPathAutomationHubAppInventoryApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.baseUrl,
        ),
        variables: {
          organizationName:
            environment2Schemas.defaultUiPathAutomationHubAppInventoryApi.organizationName.decode(
              options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.organizationName,
            ),
          tenantName: environment2Schemas.defaultUiPathAutomationHubAppInventoryApi.tenantName.decode(
            options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultUiPathAutomationHubAppInventoryApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathAutomationHubAppInventoryApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultUiPathPlatformManagementAuditLogsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultUiPathPlatformManagementAuditLogsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathPlatformManagementAuditLogsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultUiPathPlatformManagementAuditLogsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathPlatformManagementAuditLogsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultUiPathPlatformManagementAuditLogsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathPlatformManagementAuditLogsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultUiPathDocumentUnderstandingClassificationApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultUiPathDocumentUnderstandingClassificationApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.baseUrl,
        ),
        variables: {
          organizationName:
            productionSchemas.defaultUiPathDocumentUnderstandingClassificationApi.organizationName.decode(
              options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.organizationName,
            ),
          tenantName: productionSchemas.defaultUiPathDocumentUnderstandingClassificationApi.tenantName.decode(
            options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultUiPathDocumentUnderstandingClassificationApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.baseUrl,
        ),
        variables: {
          organizationName:
            environment2Schemas.defaultUiPathDocumentUnderstandingClassificationApi.organizationName.decode(
              options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.organizationName,
            ),
          tenantName:
            environment2Schemas.defaultUiPathDocumentUnderstandingClassificationApi.tenantName.decode(
              options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.tenantName,
            ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultUiPathDocumentUnderstandingClassificationApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.baseUrl,
        ),
        variables: {
          organizationName:
            environment3Schemas.defaultUiPathDocumentUnderstandingClassificationApi.organizationName.decode(
              options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.organizationName,
            ),
          tenantName:
            environment3Schemas.defaultUiPathDocumentUnderstandingClassificationApi.tenantName.decode(
              options.serverOptions?.defaultUiPathDocumentUnderstandingClassificationApi?.tenantName,
            ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultUiPathDataServiceEntitiesApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultUiPathDataServiceEntitiesApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.baseUrl,
        ),
        variables: {
          organizationName: productionSchemas.defaultUiPathDataServiceEntitiesApi.organizationName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.organizationName,
          ),
          tenantName: productionSchemas.defaultUiPathDataServiceEntitiesApi.tenantName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultUiPathDataServiceEntitiesApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.baseUrl,
        ),
        variables: {
          organizationName: environment2Schemas.defaultUiPathDataServiceEntitiesApi.organizationName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.organizationName,
          ),
          tenantName: environment2Schemas.defaultUiPathDataServiceEntitiesApi.tenantName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultUiPathDataServiceEntitiesApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.baseUrl,
        ),
        variables: {
          organizationName: environment3Schemas.defaultUiPathDataServiceEntitiesApi.organizationName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.organizationName,
          ),
          tenantName: environment3Schemas.defaultUiPathDataServiceEntitiesApi.tenantName.decode(
            options.serverOptions?.defaultUiPathDataServiceEntitiesApi?.tenantName,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultUiPathTestManagerProjectsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultUiPathTestManagerProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathTestManagerProjectsApi?.baseUrl,
        ),
        variables: {
          organizationName: productionSchemas.defaultUiPathTestManagerProjectsApi.organizationName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.organizationName,
          ),
          tenantName: productionSchemas.defaultUiPathTestManagerProjectsApi.tenantName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultUiPathTestManagerProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathTestManagerProjectsApi?.baseUrl,
        ),
        variables: {
          organizationName: environment2Schemas.defaultUiPathTestManagerProjectsApi.organizationName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.organizationName,
          ),
          tenantName: environment2Schemas.defaultUiPathTestManagerProjectsApi.tenantName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.tenantName,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultUiPathTestManagerProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultUiPathTestManagerProjectsApi?.baseUrl,
        ),
        variables: {
          organizationName: environment3Schemas.defaultUiPathTestManagerProjectsApi.organizationName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.organizationName,
          ),
          tenantName: environment3Schemas.defaultUiPathTestManagerProjectsApi.tenantName.decode(
            options.serverOptions?.defaultUiPathTestManagerProjectsApi?.tenantName,
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
