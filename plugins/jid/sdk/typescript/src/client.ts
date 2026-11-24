import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Monitors } from "./resources/monitors.js";
import { Qualify } from "./resources/qualify.js";
import { Screen } from "./resources/screen.js";
import { Search } from "./resources/search.js";
import { SignalApi } from "./resources/signal-api.js";
import { Verify } from "./resources/verify.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Before an agent pays, signs, books, hires or buys, Jid checks the business it is dealing with:
 * real, active, licensed for this activity, not sanctioned, with the receipts. Every fact is cited
 * to the registry that issued it. Decisions apply the published rules
 * (https://jid.com/decision-rules, version 2026-10-15.1) and are not legal advice. No key: 10
 * requests a minute and 100 a day per IP. A free key (no card) includes 1,000 checks a month.
 * Business information only; not a consumer report and not for FCRA purposes.
 */
export class JidClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #monitors?: Monitors;
  #qualify?: Qualify;
  #screen?: Screen;
  #search?: Search;
  #signalApi?: SignalApi;
  #verify?: Verify;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "JID_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "JidClient/1.3.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.3.0", schema: s.string() },
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
   * Change monitoring with signed webhooks
   */
  get monitors(): Monitors {
    return (this.#monitors ??= new Monitors(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * B2B lead and counterparty qualification
   */
  get qualify(): Qualify {
    return (this.#qualify ??= new Qualify(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Engage or not: a fast, deterministic answer for a lead, sender, vendor or website
   */
  get screen(): Screen {
    return (this.#screen ??= new Screen(this.#rawClient, this.#servers));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers));
  }

  get signalApi(): SignalApi {
    return (this.#signalApi ??= new SignalApi(this.#rawClient, this.#servers));
  }

  /**
   * Decisions, files and receipts
   */
  get verify(): Verify {
    return (this.#verify ??= new Verify(this.#rawClient, this.#servers));
  }
}
