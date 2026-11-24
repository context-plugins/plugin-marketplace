import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Campaigns } from "./resources/campaigns.js";
import { DecisionEngine } from "./resources/decision-engine.js";
import { Destinations } from "./resources/destinations.js";
import { Events } from "./resources/events.js";
import { IdGraphs } from "./resources/id-graphs.js";
import { Idr } from "./resources/idr.js";
import { Models } from "./resources/models.js";
import { Signups } from "./resources/signups.js";
import { Sources } from "./resources/sources.js";
import { SyncSequences } from "./resources/sync-sequences.js";
import { SyncTemplates } from "./resources/sync-templates.js";
import { Syncs } from "./resources/syncs.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Hightouch Public Rest API to access syncs, models, sources and destinations
 */
export class HightouchClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #campaigns?: Campaigns;
  #decisionEngine?: DecisionEngine;
  #destinations?: Destinations;
  #events?: Events;
  #idGraphs?: IdGraphs;
  #idr?: Idr;
  #models?: Models;
  #signups?: Signups;
  #sources?: Sources;
  #syncSequences?: SyncSequences;
  #syncTemplates?: SyncTemplates;
  #syncs?: Syncs;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "HIGHTOUCH_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "HightouchClient/1.0.0 TypeScript", schema: s.string() },
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

  get campaigns(): Campaigns {
    return (this.#campaigns ??= new Campaigns(this.#rawClient, this.#servers, this.#auth));
  }

  get decisionEngine(): DecisionEngine {
    return (this.#decisionEngine ??= new DecisionEngine(this.#rawClient, this.#servers, this.#auth));
  }

  get destinations(): Destinations {
    return (this.#destinations ??= new Destinations(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get idGraphs(): IdGraphs {
    return (this.#idGraphs ??= new IdGraphs(this.#rawClient, this.#servers, this.#auth));
  }

  get idr(): Idr {
    return (this.#idr ??= new Idr(this.#rawClient, this.#servers, this.#auth));
  }

  get models(): Models {
    return (this.#models ??= new Models(this.#rawClient, this.#servers, this.#auth));
  }

  get signups(): Signups {
    return (this.#signups ??= new Signups(this.#rawClient, this.#servers, this.#auth));
  }

  get sources(): Sources {
    return (this.#sources ??= new Sources(this.#rawClient, this.#servers, this.#auth));
  }

  get syncSequences(): SyncSequences {
    return (this.#syncSequences ??= new SyncSequences(this.#rawClient, this.#servers, this.#auth));
  }

  get syncTemplates(): SyncTemplates {
    return (this.#syncTemplates ??= new SyncTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  get syncs(): Syncs {
    return (this.#syncs ??= new Syncs(this.#rawClient, this.#servers, this.#auth));
  }
}
