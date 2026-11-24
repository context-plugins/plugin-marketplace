import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultScraperServiceGatewayAuthApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.app.mrscraper.com")) },
  defaultScraperServiceGatewayAuthApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.mrscraper.com")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultScraperServiceGatewayAuthApi: resolveBaseUrl(defaultScraperServiceGatewayAuthApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultScraperServiceGatewayAuthApi: (subPath) => ({
      baseUrl: base.defaultScraperServiceGatewayAuthApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultScraperServiceGatewayAuthApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultScraperServiceGatewayAuthApi.baseUrl.decode(
      options.serverOptions?.defaultScraperServiceGatewayAuthApi?.baseUrl,
    ),
  };
}
