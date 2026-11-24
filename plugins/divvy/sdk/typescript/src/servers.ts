import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultConnectEventsApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://gateway.stage.bill.com/connect")) },
  defaultConnectEventsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://gateway.stage.bill.com/connect-events")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultConnectEventsApi: resolveBaseUrl(defaultConnectEventsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultConnectEventsApi: (subPath) => ({ baseUrl: base.defaultConnectEventsApi, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultConnectEventsApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultConnectEventsApi.baseUrl.decode(
      options.serverOptions?.defaultConnectEventsApi?.baseUrl,
    ),
  };
}
