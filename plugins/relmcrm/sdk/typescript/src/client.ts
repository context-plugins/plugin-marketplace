import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Activities } from "./resources/activities.js";
import { Automations } from "./resources/automations.js";
import { Batch } from "./resources/batch.js";
import { Companies } from "./resources/companies.js";
import { Connections } from "./resources/connections.js";
import { Contacts } from "./resources/contacts.js";
import { Deals } from "./resources/deals.js";
import { Discovery } from "./resources/discovery.js";
import { Pipelines } from "./resources/pipelines.js";
import { Registry } from "./resources/registry.js";
import { Search } from "./resources/search.js";
import { Sequences } from "./resources/sequences.js";
import { Templates } from "./resources/templates.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * REST surface for Relm.
 */
export class RelmCrmClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #activities?: Activities;
  #automations?: Automations;
  #batch?: Batch;
  #companies?: Companies;
  #connections?: Connections;
  #contacts?: Contacts;
  #deals?: Deals;
  #discovery?: Discovery;
  #pipelines?: Pipelines;
  #registry?: Registry;
  #search?: Search;
  #sequences?: Sequences;
  #templates?: Templates;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "RELM_CRM_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "RelmCrmClient/0.17.1 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.17.1", schema: s.string() },
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

  get activities(): Activities {
    return (this.#activities ??= new Activities(this.#rawClient, this.#servers, this.#auth));
  }

  get automations(): Automations {
    return (this.#automations ??= new Automations(this.#rawClient, this.#servers, this.#auth));
  }

  get batch(): Batch {
    return (this.#batch ??= new Batch(this.#rawClient, this.#servers, this.#auth));
  }

  get companies(): Companies {
    return (this.#companies ??= new Companies(this.#rawClient, this.#servers, this.#auth));
  }

  get connections(): Connections {
    return (this.#connections ??= new Connections(this.#rawClient, this.#servers, this.#auth));
  }

  get contacts(): Contacts {
    return (this.#contacts ??= new Contacts(this.#rawClient, this.#servers, this.#auth));
  }

  get deals(): Deals {
    return (this.#deals ??= new Deals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Self-describing schema, usage, settings.
   */
  get discovery(): Discovery {
    return (this.#discovery ??= new Discovery(this.#rawClient, this.#servers, this.#auth));
  }

  get pipelines(): Pipelines {
    return (this.#pipelines ??= new Pipelines(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Custom fields, enums, object types.
   */
  get registry(): Registry {
    return (this.#registry ??= new Registry(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get sequences(): Sequences {
    return (this.#sequences ??= new Sequences(this.#rawClient, this.#servers, this.#auth));
  }

  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
