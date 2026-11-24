import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultBoomiDataHubGoldenRecordsApi: (subPath: string) => UrlTemplate;
  defaultBoomiEventStreamsRestMessagesApi: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://api.boomi.com/api/rest/v1/{accountId}")),
    accountId: s.of(s.defaulted(s.string(), "your-account-id")),
  },
  defaultBoomiDataHubGoldenRecordsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://mdh.boomi.com/mdh")),
  },
  defaultBoomiEventStreamsRestMessagesApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://{topicEndpoint}")),
    topicEndpoint: s.of(s.defaulted(s.string(), "your-topic-endpoint.boomi.com")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultBoomiDataHubGoldenRecordsApi: resolveBaseUrl(defaultBoomiDataHubGoldenRecordsApiServer(options)),
    defaultBoomiEventStreamsRestMessagesApi: resolveBaseUrl(
      defaultBoomiEventStreamsRestMessagesApiServer(options),
    ),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultBoomiDataHubGoldenRecordsApi: (subPath) => ({
      baseUrl: base.defaultBoomiDataHubGoldenRecordsApi,
      subPath,
    }),
    defaultBoomiEventStreamsRestMessagesApi: (subPath) => ({
      baseUrl: base.defaultBoomiEventStreamsRestMessagesApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
    variables: {
      accountId: serverSchemas.default.accountId.decode(options.serverOptions?.default?.accountId),
    },
  };
}

function defaultBoomiDataHubGoldenRecordsApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultBoomiDataHubGoldenRecordsApi.baseUrl.decode(
      options.serverOptions?.defaultBoomiDataHubGoldenRecordsApi?.baseUrl,
    ),
  };
}

function defaultBoomiEventStreamsRestMessagesApiServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.defaultBoomiEventStreamsRestMessagesApi.baseUrl.decode(
      options.serverOptions?.defaultBoomiEventStreamsRestMessagesApi?.baseUrl,
    ),
    variables: {
      topicEndpoint: serverSchemas.defaultBoomiEventStreamsRestMessagesApi.topicEndpoint.decode(
        options.serverOptions?.defaultBoomiEventStreamsRestMessagesApi?.topicEndpoint,
      ),
    },
  };
}
