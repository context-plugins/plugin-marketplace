import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  authServer: (subPath: string) => UrlTemplate;
  accessTokenServer: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://searchconsole.googleapis.com")) },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://accounts.google.com/o/oauth2")) },
  accessTokenServer: { baseUrl: s.of(s.defaulted(s.string(), "https://oauth2.googleapis.com")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    authServer: resolveBaseUrl(authServerServer(options)),
    accessTokenServer: resolveBaseUrl(accessTokenServerServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    authServer: (subPath) => ({ baseUrl: base.authServer, subPath }),
    accessTokenServer: (subPath) => ({ baseUrl: base.accessTokenServer, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function authServerServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl) };
}

function accessTokenServerServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.accessTokenServer.baseUrl.decode(
      options.serverOptions?.accessTokenServer?.baseUrl,
    ),
  };
}
