import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultOAuth2AuthorizationsApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.beehiiv.com/v2")) },
  defaultOAuth2AuthorizationsApi: { baseUrl: s.of(s.defaulted(s.string(), "https://app.beehiiv.com")) },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultOAuth2AuthorizationsApi: resolveBaseUrl(defaultOAuth2AuthorizationsApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultOAuth2AuthorizationsApi: (subPath) => ({ baseUrl: base.defaultOAuth2AuthorizationsApi, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultOAuth2AuthorizationsApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultOAuth2AuthorizationsApi.baseUrl.decode(
      options.serverOptions?.defaultOAuth2AuthorizationsApi?.baseUrl,
    ),
  };
}
