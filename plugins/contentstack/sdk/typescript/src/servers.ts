import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
  Environment4: "environment4",
  Environment5: "environment5",
  Environment6: "environment6",
  Environment7: "environment7",
  Environment8: "environment8",
  Environment9: "environment9",
  Environment10: "environment10",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultContentstackAutomateManagementAccountsApi: (subPath: string) => UrlTemplate;
  defaultContentstackAssetsApi: (subPath: string) => UrlTemplate;
  defaultContentstackPersonalizeManagementAttributesApi: (subPath: string) => UrlTemplate;
  defaultContentstackBrandKitManagementBrandKitsApi: (subPath: string) => UrlTemplate;
  defaultContentstackEnvironmentsApi: (subPath: string) => UrlTemplate;
  defaultContentstackEventsApi: (subPath: string) => UrlTemplate;
  defaultContentstackProjectsApi: (subPath: string) => UrlTemplate;
  defaultContentstackScimScimGroupsApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://cdn.contentstack.io/v3")) },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.contentstack.io/v3")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-edge.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://auth-api.contentstack.com")),
  },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://eu-launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-cdn.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-api.contentstack.com/v3")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-personalize-edge.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-automations-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-auth-api.contentstack.com")),
  },
};

const environment3Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://au-launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-cdn.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-na-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-api.contentstack.com/v3")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-personalize-edge.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-automations-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-auth-api.contentstack.com")),
  },
};

const environment4Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://api.contentstack.io/v3")) },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-api.contentstack.com/v3")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-personalize-edge.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-auth-api.contentstack.com")),
  },
};

const environment5Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-api.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-api.contentstack.com/v3")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-personalize-edge.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-launch-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-auth-api.contentstack.com")),
  },
};

const environment6Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-api.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://gcp-na-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-launch-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://gcp-na-auth-api.contentstack.com")),
  },
};

const environment7Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-api.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://gcp-eu-brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-launch-api.contentstack.com")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://eu-personalize-api.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-launch-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://gcp-eu-auth-api.contentstack.com")),
  },
};

const environment8Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-api.contentstack.com/v3")),
  },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-launch-api.contentstack.com")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://au-personalize-api.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-launch-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://auth-api.contentstack.com")),
  },
};

const environment9Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://cdn.contentstack.io/v3")) },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-launch-api.contentstack.com")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-na-personalize-api.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://auth-api.contentstack.com")),
  },
};

const environment10Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://launch-api.contentstack.com")) },
  defaultContentstackAutomateManagementAccountsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackAssetsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://cdn.contentstack.io/v3")) },
  defaultContentstackPersonalizeManagementAttributesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://personalize-api.contentstack.com")),
  },
  defaultContentstackBrandKitManagementBrandKitsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://brand-kits-api.contentstack.com")),
  },
  defaultContentstackEnvironmentsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-launch-api.contentstack.com")),
  },
  defaultContentstackEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://azure-eu-personalize-api.contentstack.com")),
  },
  defaultContentstackProjectsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://automations-api.contentstack.com")),
  },
  defaultContentstackScimScimGroupsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://auth-api.contentstack.com")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultContentstackAutomateManagementAccountsApi: resolveBaseUrl(
      defaultContentstackAutomateManagementAccountsApiServer(options),
    ),
    defaultContentstackAssetsApi: resolveBaseUrl(defaultContentstackAssetsApiServer(options)),
    defaultContentstackPersonalizeManagementAttributesApi: resolveBaseUrl(
      defaultContentstackPersonalizeManagementAttributesApiServer(options),
    ),
    defaultContentstackBrandKitManagementBrandKitsApi: resolveBaseUrl(
      defaultContentstackBrandKitManagementBrandKitsApiServer(options),
    ),
    defaultContentstackEnvironmentsApi: resolveBaseUrl(defaultContentstackEnvironmentsApiServer(options)),
    defaultContentstackEventsApi: resolveBaseUrl(defaultContentstackEventsApiServer(options)),
    defaultContentstackProjectsApi: resolveBaseUrl(defaultContentstackProjectsApiServer(options)),
    defaultContentstackScimScimGroupsApi: resolveBaseUrl(defaultContentstackScimScimGroupsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultContentstackAutomateManagementAccountsApi: (subPath) => ({
      baseUrl: base.defaultContentstackAutomateManagementAccountsApi,
      subPath,
    }),
    defaultContentstackAssetsApi: (subPath) => ({ baseUrl: base.defaultContentstackAssetsApi, subPath }),
    defaultContentstackPersonalizeManagementAttributesApi: (subPath) => ({
      baseUrl: base.defaultContentstackPersonalizeManagementAttributesApi,
      subPath,
    }),
    defaultContentstackBrandKitManagementBrandKitsApi: (subPath) => ({
      baseUrl: base.defaultContentstackBrandKitManagementBrandKitsApi,
      subPath,
    }),
    defaultContentstackEnvironmentsApi: (subPath) => ({
      baseUrl: base.defaultContentstackEnvironmentsApi,
      subPath,
    }),
    defaultContentstackEventsApi: (subPath) => ({ baseUrl: base.defaultContentstackEventsApi, subPath }),
    defaultContentstackProjectsApi: (subPath) => ({ baseUrl: base.defaultContentstackProjectsApi, subPath }),
    defaultContentstackScimScimGroupsApi: (subPath) => ({
      baseUrl: base.defaultContentstackScimScimGroupsApi,
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
    case ServerEnvironment.Environment3:
      return { baseUrl: environment3Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment4:
      return { baseUrl: environment4Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment5:
      return { baseUrl: environment5Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment6:
      return { baseUrl: environment6Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment7:
      return { baseUrl: environment7Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment8:
      return { baseUrl: environment8Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment9:
      return { baseUrl: environment9Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackAutomateManagementAccountsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackAutomateManagementAccountsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAutomateManagementAccountsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackAssetsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackAssetsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackAssetsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackPersonalizeManagementAttributesApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackPersonalizeManagementAttributesApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackPersonalizeManagementAttributesApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackBrandKitManagementBrandKitsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackBrandKitManagementBrandKitsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackBrandKitManagementBrandKitsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackEnvironmentsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackEnvironmentsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEnvironmentsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackEventsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackEventsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackEventsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackProjectsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackProjectsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackProjectsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultContentstackScimScimGroupsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment7:
      return {
        baseUrl: environment7Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment8:
      return {
        baseUrl: environment8Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment9:
      return {
        baseUrl: environment9Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    case ServerEnvironment.Environment10:
      return {
        baseUrl: environment10Schemas.defaultContentstackScimScimGroupsApi.baseUrl.decode(
          options.serverOptions?.defaultContentstackScimScimGroupsApi?.baseUrl,
        ),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
