import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultAirtableScimGroupsApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.airtable.com/v0")) },
  defaultAirtableScimGroupsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://airtable.com/scim/v2")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultAirtableScimGroupsApi: resolveBaseUrl(defaultAirtableScimGroupsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultAirtableScimGroupsApi: (subPath) => ({ baseUrl: base.defaultAirtableScimGroupsApi, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultAirtableScimGroupsApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultAirtableScimGroupsApi.baseUrl.decode(
      options.serverOptions?.defaultAirtableScimGroupsApi?.baseUrl,
    ),
  };
}
