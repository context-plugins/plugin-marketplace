import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountApi } from "./resources/account-api.js";
import { DataApi } from "./resources/data-api.js";
import { Jobs } from "./resources/jobs.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * One accommodation-data API for Airbnb, Booking.com, Vrbo and Google Hotels — availability, search
 * and cross-OTA price comparison in a single unified schema. Every endpoint returns the canonical
 * envelope (§6.3.3); errors use the locked sub-code catalog (§6.4). Failed, empty and blocked calls
 * are never billed; cached results bill at tier (caching is margin, not a discount). Full docs:
 * https://stayingapi.com/docs.
 */
export class StayingApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountApi?: AccountApi;
  #dataApi?: DataApi;
  #jobs?: Jobs;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "STAYING_API_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "StayingApiClient/1.0.0 TypeScript", schema: s.string() },
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
   * Account, plan and credit balance
   */
  get accountApi(): AccountApi {
    return (this.#accountApi ??= new AccountApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Accommodation data endpoints
   */
  get dataApi(): DataApi {
    return (this.#dataApi ??= new DataApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Async job polling
   */
  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }
}
