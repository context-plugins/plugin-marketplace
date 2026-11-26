import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Crawl } from "./resources/crawl.js";
import { Feedback } from "./resources/feedback.js";
import { Screenshot } from "./resources/screenshot.js";
import { Search } from "./resources/search.js";
import { System } from "./resources/system.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Web search, news, crawling, screenshot, and content extraction APIs for AI agents. Supports
 * pay-per-request via MPP and x402 protocols.
 */
export class Search1ApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #crawl?: Crawl;
  #feedback?: Feedback;
  #screenshot?: Screenshot;
  #search?: Search;
  #system?: System;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SEARCH1_API_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "Search1ApiClient/1.0.0 TypeScript", schema: s.string() },
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

  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  get crawl(): Crawl {
    return (this.#crawl ??= new Crawl(this.#rawClient, this.#servers, this.#auth));
  }

  get feedback(): Feedback {
    return (this.#feedback ??= new Feedback(this.#rawClient, this.#servers, this.#auth));
  }

  get screenshot(): Screenshot {
    return (this.#screenshot ??= new Screenshot(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get system(): System {
    return (this.#system ??= new System(this.#rawClient, this.#servers));
  }
}
