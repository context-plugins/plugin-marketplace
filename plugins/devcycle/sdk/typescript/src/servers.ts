import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultDevCycleBucketingBucketingApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: { baseUrl: s.of(s.defaulted(s.string(), "https://api.devcycle.com")) },
  defaultDevCycleBucketingBucketingApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://bucketing-api.devcycle.com/")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultDevCycleBucketingBucketingApi: resolveBaseUrl(defaultDevCycleBucketingBucketingApiServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultDevCycleBucketingBucketingApi: (subPath) => ({
      baseUrl: base.defaultDevCycleBucketingBucketingApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return { baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl) };
}

function defaultDevCycleBucketingBucketingApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultDevCycleBucketingBucketingApi.baseUrl.decode(
      options.serverOptions?.defaultDevCycleBucketingBucketingApi?.baseUrl,
    ),
  };
}
