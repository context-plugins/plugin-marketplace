import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { BestOfferPrices } from "./resources/best-offer-prices.js";
import { BulkSearch } from "./resources/bulk-search.js";
import { Cards } from "./resources/cards.js";
import { Depop } from "./resources/depop.js";
import { Grailed } from "./resources/grailed.js";
import { Mercari } from "./resources/mercari.js";
import { Poshmark } from "./resources/poshmark.js";
import { Psa } from "./resources/psa.js";
import { Scrape } from "./resources/scrape.js";
import { ShippingRates } from "./resources/shipping-rates.js";
import { SoldHistory } from "./resources/sold-history.js";
import { Summary } from "./resources/summary.js";
import { TcGplayer } from "./resources/tc-gplayer.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Public eBay (including up to 3 years of sold history), Poshmark, Mercari, TCGplayer, Grailed,
 * Depop and PSA graded card (prices by grade, population) data plus a separate quote-only US
 * shipping-rates product. Shipping quotes separate applicable services from carrier-packaging and
 * content-restricted options, use an independent subscription and quota, and do not consume
 * sold-comps requests or purchased credits.
 */
export class CompSniperClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #bestOfferPrices?: BestOfferPrices;
  #bulkSearch?: BulkSearch;
  #cards?: Cards;
  #depop?: Depop;
  #grailed?: Grailed;
  #mercari?: Mercari;
  #poshmark?: Poshmark;
  #psa?: Psa;
  #scrape?: Scrape;
  #shippingRates?: ShippingRates;
  #soldHistory?: SoldHistory;
  #summary?: Summary;
  #tcGplayer?: TcGplayer;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "COMP_SNIPER_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CompSniperClient/2.3.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.3.0", schema: s.string() },
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

  get bestOfferPrices(): BestOfferPrices {
    return (this.#bestOfferPrices ??= new BestOfferPrices(this.#rawClient, this.#servers, this.#auth));
  }

  get bulkSearch(): BulkSearch {
    return (this.#bulkSearch ??= new BulkSearch(this.#rawClient, this.#servers, this.#auth));
  }

  get cards(): Cards {
    return (this.#cards ??= new Cards(this.#rawClient, this.#servers, this.#auth));
  }

  get depop(): Depop {
    return (this.#depop ??= new Depop(this.#rawClient, this.#servers, this.#auth));
  }

  get grailed(): Grailed {
    return (this.#grailed ??= new Grailed(this.#rawClient, this.#servers, this.#auth));
  }

  get mercari(): Mercari {
    return (this.#mercari ??= new Mercari(this.#rawClient, this.#servers, this.#auth));
  }

  get poshmark(): Poshmark {
    return (this.#poshmark ??= new Poshmark(this.#rawClient, this.#servers, this.#auth));
  }

  get psa(): Psa {
    return (this.#psa ??= new Psa(this.#rawClient, this.#servers, this.#auth));
  }

  get scrape(): Scrape {
    return (this.#scrape ??= new Scrape(this.#rawClient, this.#servers, this.#auth));
  }

  get shippingRates(): ShippingRates {
    return (this.#shippingRates ??= new ShippingRates(this.#rawClient, this.#servers, this.#auth));
  }

  get soldHistory(): SoldHistory {
    return (this.#soldHistory ??= new SoldHistory(this.#rawClient, this.#servers, this.#auth));
  }

  get summary(): Summary {
    return (this.#summary ??= new Summary(this.#rawClient, this.#servers, this.#auth));
  }

  get tcGplayer(): TcGplayer {
    return (this.#tcGplayer ??= new TcGplayer(this.#rawClient, this.#servers, this.#auth));
  }
}
