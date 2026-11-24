import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AppStore } from "./resources/app-store.js";
import { Events } from "./resources/events.js";
import { GooglePlay } from "./resources/google-play.js";
import { Jobs } from "./resources/jobs.js";
import { SearchFilterV2 } from "./resources/search-filter-v2.js";
import { Suggestions } from "./resources/suggestions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * # Authentication
 *
 * The Appstorespy API uses API-KEY authentication.
 *
 * If you do not have an API Key token, you can get it on your account page
 * https://appstorespy.com/account.
 *
 * An API Key is required to be sent as part of every request in request header.
 *
 * ```
 *
 * -H 'accept: application/json'
 *
 * -H 'API-KEY: '
 *
 * ```
 *
 * # Agents and MCP
 *
 * AI agents can call the same endpoints as MCP tools at https://api.appstorespy.com/mcp, with the
 * same API-KEY header and the same credits per call.
 *
 * https://api.appstorespy.com/agentic-access lists what each operation costs and whether it reads,
 * queues or writes; https://api.appstorespy.com/skills/ holds one agent skill per capability;
 * https://api.appstorespy.com/llms.txt links every agent document.
 *
 * # Fields
 *
 * Use the fields parameter to specify which fields should be returned.
 *
 * Example:
 *
 * ```
 *
 * Request: fields=name,developer_name,ipd,downloads,...
 *
 * Response: {name: ..., developer_name: ..., ipd: ..., downloads: ..., ...}
 *
 * ```
 *
 * Don`t use fields parameter if you need to get all fields.
 *
 * # Sort
 *
 * When you use search, you can add a sort parameter.
 *
 * ```
 *
 * Request: sort=ratingCount
 *
 * Response: [{name: app1, ratingCount: 4.2}, {name: app2, ratingCount: 4.4}, ...]
 *
 * ```
 *
 * If you need DESC sorting add "-" before sort parametr.
 *
 * ```
 *
 * Request: sort=-ratingCount
 *
 * Response: [{name: app2, ratingCount: 4.4}, {name: app1, ratingCount: 4.2}, ...]
 *
 * ```
 *
 * # County & Language params
 *
 * ...
 *
 * # Status codes / Error codes
 *
 * * 200 OK.
 *
 * * 202 Accepted - The app was not present in our databases and has been submitted for crawling. If
 *   the app is available anywhere, it will be available soon.
 *
 * * 204 No Content - No data for requested country.
 *
 * * 403 Forbidden - Your access token is not valid.
 *
 * * 429 Too Many Requests - Your request rate is over the limit.
 */
export class AppstoreSpyClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #appStore?: AppStore;
  #events?: Events;
  #googlePlay?: GooglePlay;
  #jobs?: Jobs;
  #searchFilterV2?: SearchFilterV2;
  #suggestions?: Suggestions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "APPSTORE_SPY_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AppstoreSpyClient/1.5.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.5.0", schema: s.string() },
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
   * App Store apps and developers: lookup, search, reviews, rankings, similar apps, download and
   * revenue estimates and reference data.
   */
  get appStore(): AppStore {
    return (this.#appStore ??= new AppStore(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * LiveOps events Google Play surfaces on an app listing: sales, tournaments, updates and new
   * content.
   */
  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Google Play apps and developers: lookup, search, reviews, rankings, similar apps, daily
   * installs, download and revenue estimates, live store listings and reference data.
   */
  get googlePlay(): GooglePlay {
    return (this.#googlePlay ??= new GooglePlay(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Asynchronous keyword crawl jobs: submit a term for a store and country, then poll for the
   * results.
   */
  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Structured filter search: a JSON filter body with field selection, paging and sorting.
   */
  get searchFilterV2(): SearchFilterV2 {
    return (this.#searchFilterV2 ??= new SearchFilterV2(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Google Play search autocomplete suggestions for a term, country and language.
   */
  get suggestions(): Suggestions {
    return (this.#suggestions ??= new Suggestions(this.#rawClient, this.#servers, this.#auth));
  }
}
