import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Companies } from "./resources/companies.js";
import { Financials } from "./resources/financials.js";
import { Health } from "./resources/health.js";
import { News } from "./resources/news.js";
import { Persons } from "./resources/persons.js";
import { Registers } from "./resources/registers.js";
import { Tenders } from "./resources/tenders.js";
import { Usage } from "./resources/usage.js";
import { Watchlist } from "./resources/watchlist.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Companies across 2 of this provider's published API definitions:
 * compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the definition
 * it was published in., Operations tagged Financials across 2 of this provider's published API
 * definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of the
 * definition it was published in., Operations tagged Health across 2 of this provider's published
 * API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of
 * the definition it was published in., Operations tagged News across 2 of this provider's published
 * API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the servers of
 * the definition it was published in., Operations tagged Persons across 2 of this provider's
 * published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path carries the
 * servers of the definition it was published in., Operations tagged Registers across 2 of this
 * provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each path
 * carries the servers of the definition it was published in., Operations tagged Tenders across 2 of
 * this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml. Each
 * path carries the servers of the definition it was published in., Operations tagged Usage across 2
 * of this provider's published API definitions: compabase-openapi.yaml, compabase-openapi.yaml.
 * Each path carries the servers of the definition it was published in., Operations tagged Watchlist
 * across 2 of this provider's published API definitions: compabase-openapi.yaml,
 * compabase-openapi.yaml. Each path carries the servers of the definition it was published in.
 */
export class CompabaseClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #companies?: Companies;
  #financials?: Financials;
  #health?: Health;
  #news?: News;
  #persons?: Persons;
  #registers?: Registers;
  #tenders?: Tenders;
  #usage?: Usage;
  #watchlist?: Watchlist;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "COMPABASE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CompabaseClient/1.0.0 TypeScript", schema: s.string() },
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

  get companies(): Companies {
    return (this.#companies ??= new Companies(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Financial statements, original filings and financial statistics of one company.
   */
  get financials(): Financials {
    return (this.#financials ??= new Financials(this.#rawClient, this.#servers, this.#auth));
  }

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  get persons(): Persons {
    return (this.#persons ??= new Persons(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Public-register data of one company (CRBR, MSiG, KRZ, URE, BDO, SUDOP, KNF, FE, FTS, BZP/TED,
   * NFZ contracts and waiting lists, sanctions and PEP lists, Warsaw Stock Exchange, real estate,
   * secured liabilities, website facts).
   */
  get registers(): Registers {
    return (this.#registers ??= new Registers(this.#rawClient, this.#servers, this.#auth));
  }

  get tenders(): Tenders {
    return (this.#tenders ??= new Tenders(this.#rawClient, this.#servers, this.#auth));
  }

  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers, this.#auth));
  }

  get watchlist(): Watchlist {
    return (this.#watchlist ??= new Watchlist(this.#rawClient, this.#servers, this.#auth));
  }
}
