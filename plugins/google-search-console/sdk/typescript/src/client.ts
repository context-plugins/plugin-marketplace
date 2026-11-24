import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Searchanalytics } from "./resources/searchanalytics.js";
import { Sitemaps } from "./resources/sitemaps.js";
import { Sites } from "./resources/sites.js";
import { UrlInspection } from "./resources/url-inspection.js";
import { UrlTestingTools } from "./resources/url-testing-tools.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from Google's published Discovery document for Google Search Console API (searchconsole
 * v1, revision 20261110). 1 operation(s)., Generated from Google's published Discovery document for
 * Google Search Console API (searchconsole v1, revision 20261110). 4 operation(s)., Generated from
 * Google's published Discovery document for Google Search Console API (searchconsole v1, revision
 * 20261110). 4 operation(s)., Generated from Google's published Discovery document for Google
 * Search Console API (searchconsole v1, revision 20261110). 1 operation(s)., Generated from
 * Google's published Discovery document for Google Search Console API (searchconsole v1, revision
 * 20261110). 1 operation(s).
 */
export class GoogleSearchConsoleClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #searchanalytics?: Searchanalytics;
  #sitemaps?: Sitemaps;
  #sites?: Sites;
  #urlInspection?: UrlInspection;
  #urlTestingTools?: UrlTestingTools;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GOOGLE_SEARCH_CONSOLE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GoogleSearchConsoleClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get searchanalytics(): Searchanalytics {
    return (this.#searchanalytics ??= new Searchanalytics(this.#rawClient, this.#servers, this.#auth));
  }

  get sitemaps(): Sitemaps {
    return (this.#sitemaps ??= new Sitemaps(this.#rawClient, this.#servers, this.#auth));
  }

  get sites(): Sites {
    return (this.#sites ??= new Sites(this.#rawClient, this.#servers, this.#auth));
  }

  get urlInspection(): UrlInspection {
    return (this.#urlInspection ??= new UrlInspection(this.#rawClient, this.#servers, this.#auth));
  }

  get urlTestingTools(): UrlTestingTools {
    return (this.#urlTestingTools ??= new UrlTestingTools(this.#rawClient, this.#servers, this.#auth));
  }
}
