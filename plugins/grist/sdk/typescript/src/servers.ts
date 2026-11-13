import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  authServer: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://{gristhost}/api")),
    gristhost: s.of(s.defaulted(s.string(), "docs.getgrist.com")),
  },
  authServer: { baseUrl: s.of(s.defaulted(s.string(), "https://login.getgrist.com/oidc")) },
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
  return {
    baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
    variables: {
      gristhost: serverSchemas.default.gristhost.decode(options.serverOptions?.default?.gristhost),
    },
  };
}

function authServerServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.authServer.baseUrl.decode(options.serverOptions?.authServer?.baseUrl) };
}
