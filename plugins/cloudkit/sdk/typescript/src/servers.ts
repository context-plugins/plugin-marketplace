import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";
import { Database, databaseSchema } from "./models/database.js";
import { Environment, environmentSchema } from "./models/environment.js";

export type Servers = {
  default: (subPath: string) => UrlTemplate;
};

const serverSchemas = {
  baseUrl: s.of(
    s.defaulted(s.string(), "https://api.apple-cloudkit.com/database/1/{container}/{environment}/{database}"),
  ),
  container: s.of(s.defaulted(s.string(), "iCloud.com.example.myapp")),
  environment: s.of(s.defaulted(environmentSchema, Environment.Development)),
  database: s.of(s.defaulted(databaseSchema, Database.Public)),
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  return {
    baseUrl: serverSchemas.baseUrl.decode(options.serverOptions?.baseUrl),
    variables: {
      container: serverSchemas.container.decode(options.serverOptions?.container),
      environment: serverSchemas.environment.decode(options.serverOptions?.environment),
      database: serverSchemas.database.decode(options.serverOptions?.database),
    },
  };
}
