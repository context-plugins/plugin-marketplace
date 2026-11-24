import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Atoms } from "./resources/atoms.js";
import { Components } from "./resources/components.js";
import { Deployments } from "./resources/deployments.js";
import { Environments } from "./resources/environments.js";
import { Execution } from "./resources/execution.js";
import { GoldenRecords } from "./resources/golden-records.js";
import { Messages } from "./resources/messages.js";
import { Models } from "./resources/models.js";
import { Processes } from "./resources/processes.js";
import { Quarantine } from "./resources/quarantine.js";
import { Repositories } from "./resources/repositories.js";
import { Sources } from "./resources/sources.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Boomi Platform REST API provides programmatic access to the Boomi Enterprise Platform. It
 * allows control of objects associated with your account including account administration, cloud
 * management, component management, deployment, environment management, execution statistics,
 * integration packs, process execution, and runtime management. The API follows an object/verb
 * hierarchy and uses Basic Authentication with the account ID embedded in the URL path., The Boomi
 * DataHub REST API provides programmatic access to master data management operations. It consists
 * of two layers: the Platform API for managing repositories, models, sources, and domains; and the
 * Repository API for querying and manipulating golden records and staged entities. The Platform API
 * uses Basic Authentication while the Repository API supports JWT authentication. Requests are
 * subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24
 * hours)., The Boomi Event Streams REST API enables HTTP-based applications to produce messages to
 * event topics. It supports two operational modes: multiple messages in a predefined JSON format,
 * and single messages in their original format without transformation. The API accommodates
 * messages up to 5 MB and enforces a rate limit of 60,000 requests per IP per 5-minute window. Each
 * topic has a unique REST API URL available in the Event Streams UI. Authentication uses an
 * Environment Token as a Bearer token., The Boomi DataHub REST API provides programmatic access to
 * master data management operations. It consists of two layers: the Platform API for managing
 * repositories, models, sources, and domains; and the Repository API for querying and manipulating
 * golden records and staged entities. The Platform API uses Basic Authentication while the
 * Repository API supports JWT authentication. Requests are subject to usage limits based on
 * licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi Platform REST
 * API provides programmatic access to the Boomi Enterprise Platform. It allows control of objects
 * associated with your account including account administration, cloud management, component
 * management, deployment, environment management, execution statistics, integration packs, process
 * execution, and runtime management. The API follows an object/verb hierarchy and uses Basic
 * Authentication with the account ID embedded in the URL path., The Boomi DataHub REST API provides
 * programmatic access to master data management operations. It consists of two layers: the Platform
 * API for managing repositories, models, sources, and domains; and the Repository API for querying
 * and manipulating golden records and staged entities. The Platform API uses Basic Authentication
 * while the Repository API supports JWT authentication. Requests are subject to usage limits based
 * on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi DataHub
 * REST API provides programmatic access to master data management operations. It consists of two
 * layers: the Platform API for managing repositories, models, sources, and domains; and the
 * Repository API for querying and manipulating golden records and staged entities. The Platform API
 * uses Basic Authentication while the Repository API supports JWT authentication. Requests are
 * subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24
 * hours)., The Boomi DataHub REST API provides programmatic access to master data management
 * operations. It consists of two layers: the Platform API for managing repositories, models,
 * sources, and domains; and the Repository API for querying and manipulating golden records and
 * staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT
 * authentication. Requests are subject to usage limits based on licensed connectors (1,000 times
 * the number of connectors per 24 hours).
 */
export class BoomiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #atoms?: Atoms;
  #components?: Components;
  #deployments?: Deployments;
  #environments?: Environments;
  #execution?: Execution;
  #goldenRecords?: GoldenRecords;
  #messages?: Messages;
  #models?: Models;
  #processes?: Processes;
  #quarantine?: Quarantine;
  #repositories?: Repositories;
  #sources?: Sources;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "BOOMI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "BoomiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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
   * Manage Boomi Atoms — the lightweight runtime engines that execute integration processes.
   */
  get atoms(): Atoms {
    return (this.#atoms ??= new Atoms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage packaged components and integration pack attachments.
   */
  get components(): Components {
    return (this.#components ??= new Components(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage deployed packages and the deployment of integration components to environments.
   */
  get deployments(): Deployments {
    return (this.#deployments ??= new Deployments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage runtime environments where Boomi Atoms and Molecules are deployed to run integration
   * processes.
   */
  get environments(): Environments {
    return (this.#environments ??= new Environments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Execute integration processes and retrieve execution statistics and job results.
   */
  get execution(): Execution {
    return (this.#execution ??= new Execution(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query and manage the authoritative master records that result from matching and merging source
   * records.
   */
  get goldenRecords(): GoldenRecords {
    return (this.#goldenRecords ??= new GoldenRecords(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints for producing messages to Boomi Event Streams topics via HTTP REST calls.
   */
  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage data models that define the schema and rules for master data domains.
   */
  get models(): Models {
    return (this.#models ??= new Models(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage integration processes (recipes) within the Boomi platform.
   */
  get processes(): Processes {
    return (this.#processes ??= new Processes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage quarantined records that could not be automatically processed due to data quality
   * issues.
   */
  get quarantine(): Quarantine {
    return (this.#quarantine ??= new Quarantine(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage DataHub repositories that contain master data domains.
   */
  get repositories(): Repositories {
    return (this.#repositories ??= new Repositories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage data sources that contribute records to the master data hub for matching and merging.
   */
  get sources(): Sources {
    return (this.#sources ??= new Sources(this.#rawClient, this.#servers, this.#auth));
  }
}
