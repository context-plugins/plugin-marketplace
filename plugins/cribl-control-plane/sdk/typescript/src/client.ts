import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AuthApi } from "./resources/auth-api.js";
import { CollectorsApi } from "./resources/collectors-api.js";
import { DatabaseConnections } from "./resources/database-connections.js";
import { Destinations } from "./resources/destinations.js";
import { Distributed } from "./resources/distributed.js";
import { Functions } from "./resources/functions.js";
import { GroupsApi } from "./resources/groups-api.js";
import { HealthApi } from "./resources/health-api.js";
import { Lake } from "./resources/lake.js";
import { Packs } from "./resources/packs.js";
import { Pipelines } from "./resources/pipelines.js";
import { Preview } from "./resources/preview.js";
import { RoutesApi } from "./resources/routes-api.js";
import { Sources } from "./resources/sources.js";
import { SystemApi } from "./resources/system-api.js";
import { Teams } from "./resources/teams.js";
import { Versioning } from "./resources/versioning.js";
import { WorkersApi } from "./resources/workers-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This API Reference lists available REST endpoints, along with their supported operations for
 * accessing, creating, updating, or deleting resources. Base URL contexts for reference:
 * - Leader context: /api/v1
 * - Worker Group or Edge Fleet context: /api/v1/m/{groupName}
 * - Host (Worker or Edge Node) context: /api/v1/w/{nodeId}
 * - Search context: /api/v1/m/default_search
 */
export class CriblApiReferenceClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authApi?: AuthApi;
  #collectorsApi?: CollectorsApi;
  #databaseConnections?: DatabaseConnections;
  #destinations?: Destinations;
  #distributed?: Distributed;
  #functions?: Functions;
  #groupsApi?: GroupsApi;
  #healthApi?: HealthApi;
  #lake?: Lake;
  #packs?: Packs;
  #pipelines?: Pipelines;
  #preview?: Preview;
  #routesApi?: RoutesApi;
  #sources?: Sources;
  #systemApi?: SystemApi;
  #teams?: Teams;
  #versioning?: Versioning;
  #workersApi?: WorkersApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CRIBL_API_REFERENCE_CLIENT_LOG"),
      defaultHeaders: [
        {
          name: "User-Agent",
          value: "CriblApiReferenceClient/4.20.3-ea354447 TypeScript",
          schema: s.string(),
        },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "4.20.3-ea354447", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Actions related to authentication. Do not use the /auth endpoints in Cribl.Cloud deployments.
   * Instead, follow the instructions at https://docs.cribl.io/stream/api-tutorials/#criblcloud to
   * authenticate for Cribl.Cloud.
   */
  get authApi(): AuthApi {
    return (this.#authApi ??= new AuthApi(this.#rawClient, this.#servers));
  }

  /**
   * Actions related to Collectors
   */
  get collectorsApi(): CollectorsApi {
    return (this.#collectorsApi ??= new CollectorsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to DatabaseConnections
   */
  get databaseConnections(): DatabaseConnections {
    return (this.#databaseConnections ??= new DatabaseConnections(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Actions related to Destinations
   */
  get destinations(): Destinations {
    return (this.#destinations ??= new Destinations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Distributed
   */
  get distributed(): Distributed {
    return (this.#distributed ??= new Distributed(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to functions
   */
  get functions(): Functions {
    return (this.#functions ??= new Functions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Groups
   */
  get groupsApi(): GroupsApi {
    return (this.#groupsApi ??= new GroupsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to REST server health
   */
  get healthApi(): HealthApi {
    return (this.#healthApi ??= new HealthApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Lake
   */
  get lake(): Lake {
    return (this.#lake ??= new Lake(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Packs
   */
  get packs(): Packs {
    return (this.#packs ??= new Packs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Pipelines
   */
  get pipelines(): Pipelines {
    return (this.#pipelines ??= new Pipelines(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to data preview
   */
  get preview(): Preview {
    return (this.#preview ??= new Preview(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Routes
   */
  get routesApi(): RoutesApi {
    return (this.#routesApi ??= new RoutesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Sources
   */
  get sources(): Sources {
    return (this.#sources ??= new Sources(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to system settings
   */
  get systemApi(): SystemApi {
    return (this.#systemApi ??= new SystemApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Teams
   */
  get teams(): Teams {
    return (this.#teams ??= new Teams(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Versioning
   */
  get versioning(): Versioning {
    return (this.#versioning ??= new Versioning(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions related to Workers
   */
  get workersApi(): WorkersApi {
    return (this.#workersApi ??= new WorkersApi(this.#rawClient, this.#servers, this.#auth));
  }
}
