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
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  authServer: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-na-west.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
};

const environment2Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-na-east.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
};

const environment3Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-eu-west.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
};

const environment4Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-eu-east.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
};

const environment5Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-ap-west.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
};

const environment6Schemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://runtime-api-ap-east.prod.chatbots.sfdc.sh")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.salesforce.com/services/oauth2")) },
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
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    case ServerEnvironment.Environment5:
      return {
        baseUrl: environment5Schemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    case ServerEnvironment.Environment6:
      return {
        baseUrl: environment6Schemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl),
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
