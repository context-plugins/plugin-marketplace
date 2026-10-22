import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  accessTokenServer: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://gateway.cribl.cloud")) },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.cribl.cloud/oauth")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    accessTokenServer: resolveBaseUrl(accessTokenServerServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    accessTokenServer: (subPath) => ({ baseUrl: base.accessTokenServer, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function accessTokenServerServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.accessTokenServer.baseUrl.decode(
      options.serverOptions?.accessTokenServer?.baseUrl,
    ),
  };
}
