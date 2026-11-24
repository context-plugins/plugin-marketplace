import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
  Environment4: "environment4",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  defaultAmazonLexModelBuildingV2BotsApi: (subPath: string) => UrlTemplate;
  defaultAmazonLexModelBuildingV2BuiltinsApi: (subPath: string) => UrlTemplate;
  defaultAmazonLexModelBuildingV2ExportsApi: (subPath: string) => UrlTemplate;
  defaultAmazonLexModelBuildingV2OperationsApi: (subPath: string) => UrlTemplate;
  defaultAmazonLexModelBuildingV2TagsApi: (subPath: string) => UrlTemplate;
};

const productionSchemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BotsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BuiltinsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2ExportsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2OperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2TagsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

const environment2Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BotsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BuiltinsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2ExportsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2OperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://runtime.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2TagsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

const environment3Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BotsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://runtime-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BuiltinsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2ExportsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2OperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2TagsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

const environment4Schemas = {
  default: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BotsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://runtime.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2BuiltinsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2ExportsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2OperationsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models.lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
  defaultAmazonLexModelBuildingV2TagsApi: {
    baseUrl: s.of(s.defaulted(s.string(), "https://models-v2-lex.{region}.amazonaws.com")),
    region: s.of(s.defaulted(s.string(), "us-east-1")),
  },
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
    defaultAmazonLexModelBuildingV2BotsApi: resolveBaseUrl(
      defaultAmazonLexModelBuildingV2BotsApiServer(options),
    ),
    defaultAmazonLexModelBuildingV2BuiltinsApi: resolveBaseUrl(
      defaultAmazonLexModelBuildingV2BuiltinsApiServer(options),
    ),
    defaultAmazonLexModelBuildingV2ExportsApi: resolveBaseUrl(
      defaultAmazonLexModelBuildingV2ExportsApiServer(options),
    ),
    defaultAmazonLexModelBuildingV2OperationsApi: resolveBaseUrl(
      defaultAmazonLexModelBuildingV2OperationsApiServer(options),
    ),
    defaultAmazonLexModelBuildingV2TagsApi: resolveBaseUrl(
      defaultAmazonLexModelBuildingV2TagsApiServer(options),
    ),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
    defaultAmazonLexModelBuildingV2BotsApi: (subPath) => ({
      baseUrl: base.defaultAmazonLexModelBuildingV2BotsApi,
      subPath,
    }),
    defaultAmazonLexModelBuildingV2BuiltinsApi: (subPath) => ({
      baseUrl: base.defaultAmazonLexModelBuildingV2BuiltinsApi,
      subPath,
    }),
    defaultAmazonLexModelBuildingV2ExportsApi: (subPath) => ({
      baseUrl: base.defaultAmazonLexModelBuildingV2ExportsApi,
      subPath,
    }),
    defaultAmazonLexModelBuildingV2OperationsApi: (subPath) => ({
      baseUrl: base.defaultAmazonLexModelBuildingV2OperationsApi,
      subPath,
    }),
    defaultAmazonLexModelBuildingV2TagsApi: (subPath) => ({
      baseUrl: base.defaultAmazonLexModelBuildingV2TagsApi,
      subPath,
    }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          region: productionSchemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          region: environment2Schemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          region: environment3Schemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.default.baseUrl.decode(options.serverOptions?.default?.baseUrl),
        variables: {
          region: environment4Schemas.default.region.decode(options.serverOptions?.default?.region),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonLexModelBuildingV2BotsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonLexModelBuildingV2BotsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonLexModelBuildingV2BotsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonLexModelBuildingV2BotsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonLexModelBuildingV2BotsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultAmazonLexModelBuildingV2BotsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.baseUrl,
        ),
        variables: {
          region: environment3Schemas.defaultAmazonLexModelBuildingV2BotsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultAmazonLexModelBuildingV2BotsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.baseUrl,
        ),
        variables: {
          region: environment4Schemas.defaultAmazonLexModelBuildingV2BotsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BotsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonLexModelBuildingV2BuiltinsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonLexModelBuildingV2BuiltinsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonLexModelBuildingV2BuiltinsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.baseUrl,
        ),
        variables: {
          region: environment3Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.baseUrl,
        ),
        variables: {
          region: environment4Schemas.defaultAmazonLexModelBuildingV2BuiltinsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2BuiltinsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonLexModelBuildingV2ExportsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonLexModelBuildingV2ExportsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonLexModelBuildingV2ExportsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonLexModelBuildingV2ExportsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonLexModelBuildingV2ExportsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultAmazonLexModelBuildingV2ExportsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.baseUrl,
        ),
        variables: {
          region: environment3Schemas.defaultAmazonLexModelBuildingV2ExportsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultAmazonLexModelBuildingV2ExportsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.baseUrl,
        ),
        variables: {
          region: environment4Schemas.defaultAmazonLexModelBuildingV2ExportsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2ExportsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonLexModelBuildingV2OperationsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonLexModelBuildingV2OperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonLexModelBuildingV2OperationsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonLexModelBuildingV2OperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonLexModelBuildingV2OperationsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultAmazonLexModelBuildingV2OperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.baseUrl,
        ),
        variables: {
          region: environment3Schemas.defaultAmazonLexModelBuildingV2OperationsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultAmazonLexModelBuildingV2OperationsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.baseUrl,
        ),
        variables: {
          region: environment4Schemas.defaultAmazonLexModelBuildingV2OperationsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2OperationsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function defaultAmazonLexModelBuildingV2TagsApiServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return {
        baseUrl: productionSchemas.defaultAmazonLexModelBuildingV2TagsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.baseUrl,
        ),
        variables: {
          region: productionSchemas.defaultAmazonLexModelBuildingV2TagsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment2:
      return {
        baseUrl: environment2Schemas.defaultAmazonLexModelBuildingV2TagsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.baseUrl,
        ),
        variables: {
          region: environment2Schemas.defaultAmazonLexModelBuildingV2TagsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment3:
      return {
        baseUrl: environment3Schemas.defaultAmazonLexModelBuildingV2TagsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.baseUrl,
        ),
        variables: {
          region: environment3Schemas.defaultAmazonLexModelBuildingV2TagsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.region,
          ),
        },
      };
    case ServerEnvironment.Environment4:
      return {
        baseUrl: environment4Schemas.defaultAmazonLexModelBuildingV2TagsApi.baseUrl.decode(
          options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.baseUrl,
        ),
        variables: {
          region: environment4Schemas.defaultAmazonLexModelBuildingV2TagsApi.region.decode(
            options.serverOptions?.defaultAmazonLexModelBuildingV2TagsApi?.region,
          ),
        },
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
