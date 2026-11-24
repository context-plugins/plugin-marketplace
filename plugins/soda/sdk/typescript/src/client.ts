import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Attributes } from "./resources/attributes.js";
import { Checks } from "./resources/checks.js";
import { Contracts } from "./resources/contracts.js";
import { DataSources } from "./resources/data-sources.js";
import { DataStandards } from "./resources/data-standards.js";
import { Datasets } from "./resources/datasets.js";
import { DiscoveredDatasets } from "./resources/discovered-datasets.js";
import { Incidents } from "./resources/incidents.js";
import { Licensing } from "./resources/licensing.js";
import { NotificationRules } from "./resources/notification-rules.js";
import { Runners } from "./resources/runners.js";
import { Scans } from "./resources/scans.js";
import { Secrets } from "./resources/secrets.js";
import { Users } from "./resources/users.js";
import { Utility } from "./resources/utility.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Soda Cloud REST API (v4 public API). Assembled verbatim from the OpenAPI 3.1.0 documents Soda
 * publishes inside each REST API reference page at
 * https://docs.soda.io/reference/soda-apis/rest-api/.
 */
export class SodaClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #attributes?: Attributes;
  #checks?: Checks;
  #contracts?: Contracts;
  #dataSources?: DataSources;
  #dataStandards?: DataStandards;
  #datasets?: Datasets;
  #discoveredDatasets?: DiscoveredDatasets;
  #incidents?: Incidents;
  #licensing?: Licensing;
  #notificationRules?: NotificationRules;
  #runners?: Runners;
  #scans?: Scans;
  #secrets?: Secrets;
  #users?: Users;
  #utility?: Utility;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SODA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SodaClient/1.0.0 TypeScript", schema: s.string() },
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
   * Soda Cloud API Attribute Endpoints
   */
  get attributes(): Attributes {
    return (this.#attributes ??= new Attributes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Check Endpoints
   */
  get checks(): Checks {
    return (this.#checks ??= new Checks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Contract Endpoints
   */
  get contracts(): Contracts {
    return (this.#contracts ??= new Contracts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Datasource Endpoints
   */
  get dataSources(): DataSources {
    return (this.#dataSources ??= new DataSources(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Data Standard Endpoints
   */
  get dataStandards(): DataStandards {
    return (this.#dataStandards ??= new DataStandards(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Dataset Endpoints
   */
  get datasets(): Datasets {
    return (this.#datasets ??= new Datasets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Discovered Dataset Endpoints
   */
  get discoveredDatasets(): DiscoveredDatasets {
    return (this.#discoveredDatasets ??= new DiscoveredDatasets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Incidents Endpoints
   */
  get incidents(): Incidents {
    return (this.#incidents ??= new Incidents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Licensing Endpoints
   */
  get licensing(): Licensing {
    return (this.#licensing ??= new Licensing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Notification Rule Endpoints
   */
  get notificationRules(): NotificationRules {
    return (this.#notificationRules ??= new NotificationRules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Runner Endpoints
   */
  get runners(): Runners {
    return (this.#runners ??= new Runners(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Scan Endpoints
   */
  get scans(): Scans {
    return (this.#scans ??= new Scans(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Secret Endpoints
   */
  get secrets(): Secrets {
    return (this.#secrets ??= new Secrets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Users Endpoints
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Soda Cloud API Utility Endpoints
   */
  get utility(): Utility {
    return (this.#utility ??= new Utility(this.#rawClient, this.#servers, this.#auth));
  }
}
