import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultManagementAppPartnerConnectionApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://app-events.justtrack.io")) },
  defaultManagementAppPartnerConnectionApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.justtrack.io")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultManagementAppPartnerConnectionApi: resolveBaseUrl(
      defaultManagementAppPartnerConnectionApiServer(options),
    ),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultManagementAppPartnerConnectionApi: (subPath) => ({
      baseUrl: base.defaultManagementAppPartnerConnectionApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultManagementAppPartnerConnectionApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultManagementAppPartnerConnectionApi.baseUrl.decode(
      options.serverOptions?.defaultManagementAppPartnerConnectionApi?.baseUrl,
    ),
  };
}
