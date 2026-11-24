import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultCelestiaWebsiteContactApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "http://localhost:26658")) },
  defaultCelestiaWebsiteContactApi: { baseUrl: s.of(s.defaulted(s.string(), "https://celestia.org")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultCelestiaWebsiteContactApi: resolveBaseUrl(defaultCelestiaWebsiteContactApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultCelestiaWebsiteContactApi: (subPath) => ({
      baseUrl: base.defaultCelestiaWebsiteContactApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultCelestiaWebsiteContactApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultCelestiaWebsiteContactApi.baseUrl.decode(
      options.serverOptions?.defaultCelestiaWebsiteContactApi?.baseUrl,
    ),
  };
}
