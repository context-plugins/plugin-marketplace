import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Authentication } from "./resources/authentication.js";
import { CustomMetadata } from "./resources/custom-metadata.js";
import { Datasources } from "./resources/datasources.js";
import { DocumentsApi } from "./resources/documents-api.js";
import { People } from "./resources/people.js";
import { Permissions } from "./resources/permissions.js";
import { Shortcuts } from "./resources/shortcuts.js";
import { Troubleshooting } from "./resources/troubleshooting.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * # Introduction
 * In addition to the data sources that Glean has built-in support for, Glean also provides a REST
 * API that enables customers to put arbitrary content in the search index. This is useful, for
 * example, for doing permissions-aware search over content in internal tools that reside on-prem as
 * well as for searching over applications that Glean does not currently support first class. In
 * addition these APIs allow the customer to push organization data (people info, organization
 * structure etc) into Glean.
 *
 * # Usage guidelines
 * This API is evolving fast. Glean will provide advance notice of any planned backwards
 * incompatible changes along with a 6-month sunset period for anything that requires developers to
 * adopt the new versions.
 */
export class GleanIndexingApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #datasources?: Datasources;
  #documentsApi?: DocumentsApi;
  #people?: People;
  #permissions?: Permissions;
  #authentication?: Authentication;
  #troubleshooting?: Troubleshooting;
  #shortcuts?: Shortcuts;
  #customMetadata?: CustomMetadata;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GLEAN_INDEXING_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GleanIndexingApiClient/0.9.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.9.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Manage datasources.
   */
  get datasources(): Datasources {
    return (this.#datasources ??= new Datasources(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Index documents from a datasource.
   */
  get documentsApi(): DocumentsApi {
    return (this.#documentsApi ??= new DocumentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Index employee people data.
   */
  get people(): People {
    return (this.#people ??= new People(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage users, groups and membership.
   */
  get permissions(): Permissions {
    return (this.#permissions ??= new Permissions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage indexing API tokens.
   */
  get authentication(): Authentication {
    return (this.#authentication ??= new Authentication(this.#rawClient, this.#servers, this.#auth));
  }

  get troubleshooting(): Troubleshooting {
    return (this.#troubleshooting ??= new Troubleshooting(this.#rawClient, this.#servers, this.#auth));
  }

  get shortcuts(): Shortcuts {
    return (this.#shortcuts ??= new Shortcuts(this.#rawClient, this.#servers, this.#auth));
  }

  get customMetadata(): CustomMetadata {
    return (this.#customMetadata ??= new CustomMetadata(this.#rawClient, this.#servers, this.#auth));
  }
}
