import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analytic } from "./resources/analytic.js";
import { Auth } from "./resources/auth.js";
import { Gateway } from "./resources/gateway.js";
import { Jobs } from "./resources/jobs.js";
import { Proxies } from "./resources/proxies.js";
import { Results } from "./resources/results.js";
import { Storage } from "./resources/storage.js";
import { Tasks } from "./resources/tasks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * GENERATED FROM DOCUMENTATION by API Evangelist on 2026-10-07: 3 operation(s) read from 3 public
 * documentation page(s) (each operation names its page in x-source)., A clean architecture Go
 * service for managing scraping tasks, A clean architecture Go service for managing scraping tasks,
 * A clean architecture Go service for managing scraping tasks, GENERATED FROM DOCUMENTATION by API
 * Evangelist on 2026-10-07: 3 operation(s) read from 3 public documentation page(s) (each operation
 * names its page in x-source)., GENERATED FROM DOCUMENTATION by API Evangelist on 2026-10-07: 3
 * operation(s) read from 3 public documentation page(s) (each operation names its page in
 * x-source)., A clean architecture Go service for managing scraping tasks, A clean architecture Go
 * service for managing scraping tasks
 */
export class MrScraperClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analytic?: Analytic;
  #auth2?: Auth;
  #gateway?: Gateway;
  #jobs?: Jobs;
  #proxies?: Proxies;
  #results?: Results;
  #storage?: Storage;
  #tasks?: Tasks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "MR_SCRAPER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "MrScraperClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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

  get analytic(): Analytic {
    return (this.#analytic ??= new Analytic(this.#rawClient, this.#servers, this.#auth));
  }

  get auth2(): Auth {
    return (this.#auth2 ??= new Auth(this.#rawClient, this.#servers, this.#auth));
  }

  get gateway(): Gateway {
    return (this.#gateway ??= new Gateway(this.#rawClient, this.#servers, this.#auth));
  }

  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  get proxies(): Proxies {
    return (this.#proxies ??= new Proxies(this.#rawClient, this.#servers, this.#auth));
  }

  get results(): Results {
    return (this.#results ??= new Results(this.#rawClient, this.#servers, this.#auth));
  }

  get storage(): Storage {
    return (this.#storage ??= new Storage(this.#rawClient, this.#servers, this.#auth));
  }

  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }
}
