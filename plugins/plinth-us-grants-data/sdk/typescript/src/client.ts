import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Analyze } from "./resources/analyze.js";
import { Batch } from "./resources/batch.js";
import { Credentials } from "./resources/credentials.js";
import { GrantsApi } from "./resources/grants-api.js";
import { Meta } from "./resources/meta.js";
import { Organizations } from "./resources/organizations.js";
import { Pulse } from "./resources/pulse.js";
import { Resolve } from "./resources/resolve.js";
import { Sql } from "./resources/sql.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF
 * e-file filings.
 *
 * The funder-grantee graph traverses in BOTH directions: filter by `funder_id` for everything a
 * foundation funded, or by `recip_id` for every funder behind a nonprofit.
 *
 * Start with `/api/search` to turn an organization name into an EIN and a canonical page URL — it
 * needs no key. Every other endpoint requires one (free tier: 50 calls a month).
 *
 * Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month
 * lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are
 * reported as association, never as causation. Organizations that do not e-file may be absent., A
 * read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF
 * e-file filings.
 *
 * The funder-grantee graph traverses in BOTH directions: filter by `funder_id` for everything a
 * foundation funded, or by `recip_id` for every funder behind a nonprofit.
 *
 * Start with `/api/v1/search` to turn an organization name into an EIN and a canonical page URL —
 * it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints
 * (/compliance, /essentials, /premier) need a paid one.
 *
 * **No CORS headers, deliberately.** This is a server-side API: a key in browser JavaScript is a
 * key you have published, and every allowance here is per-key. Call it from your backend, or from
 * an agent. There is no browser-callable subset planned.
 *
 * Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month
 * lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are
 * reported as association, never as causation. Organizations that do not e-file may be absent., A
 * read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF
 * e-file filings.
 *
 * The funder-grantee graph traverses in BOTH directions: filter by `funder_id` for everything a
 * foundation funded, or by `recip_id` for every funder behind a nonprofit.
 *
 * Start with `/api/v1/search` to turn an organization name into an EIN and a canonical page URL —
 * it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints
 * (/compliance, /essentials, /premier) need a paid one.
 *
 * **No CORS headers, deliberately.** This is a server-side API: a key in browser JavaScript is a
 * key you have published, and every allowance here is per-key. Call it from your backend, or from
 * an agent. There is no browser-callable subset planned.
 *
 * Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month
 * lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are
 * reported as association, never as causation. Organizations that do not e-file may be absent.,
 * Operations tagged Grants across 2 of this provider's published API definitions:
 * plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path
 * carries the servers of the definition it was published in., A read API over the US grantmaking
 * universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
 *
 * The funder-grantee graph traverses in BOTH directions: filter by `funder_id` for everything a
 * foundation funded, or by `recip_id` for every funder behind a nonprofit.
 *
 * Start with `/api/v1/search` to turn an organization name into an EIN and a canonical page URL —
 * it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints
 * (/compliance, /essentials, /premier) need a paid one.
 *
 * **No CORS headers, deliberately.** This is a server-side API: a key in browser JavaScript is a
 * key you have published, and every allowance here is per-key. Call it from your backend, or from
 * an agent. There is no browser-callable subset planned.
 *
 * Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month
 * lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are
 * reported as association, never as causation. Organizations that do not e-file may be absent.,
 * Operations tagged Organizations across 2 of this provider's published API definitions:
 * plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path
 * carries the servers of the definition it was published in., A read API over the US grantmaking
 * universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
 *
 * The funder-grantee graph traverses in BOTH directions: filter by `funder_id` for everything a
 * foundation funded, or by `recip_id` for every funder behind a nonprofit.
 *
 * Start with `/api/v1/search` to turn an organization name into an EIN and a canonical page URL —
 * it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints
 * (/compliance, /essentials, /premier) need a paid one.
 *
 * **No CORS headers, deliberately.** This is a server-side API: a key in browser JavaScript is a
 * key you have published, and every allowance here is per-key. Call it from your backend, or from
 * an agent. There is no browser-callable subset planned.
 *
 * Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month
 * lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are
 * reported as association, never as causation. Organizations that do not e-file may be absent.,
 * Operations tagged Resolve across 2 of this provider's published API definitions:
 * plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path
 * carries the servers of the definition it was published in., Operations tagged SQL across 2 of
 * this provider's published API definitions: plinth-us-grants-data-openapi-2026-08-14.json,
 * plinth-us-grants-data-openapi.json. Each path carries the servers of the definition it was
 * published in.
 */
export class PlinthUsGrantsDataClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #analyze?: Analyze;
  #batch?: Batch;
  #credentials?: Credentials;
  #grantsApi?: GrantsApi;
  #meta?: Meta;
  #organizations?: Organizations;
  #pulse?: Pulse;
  #resolve?: Resolve;
  #sql?: Sql;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PLINTH_US_GRANTS_DATA_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PlinthUsGrantsDataClient/1.0.0 TypeScript", schema: s.string() },
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
   * Plain-English questions answered with SQL the service writes itself.
   */
  get analyze(): Analyze {
    return (this.#analyze ??= new Analyze(this.#rawClient, this.#servers, this.#auth));
  }

  get batch(): Batch {
    return (this.#batch ??= new Batch(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Getting a key, including the one an agent can mint for itself.
   */
  get credentials(): Credentials {
    return (this.#credentials ??= new Credentials(this.#rawClient, this.#servers));
  }

  /**
   * The funder-grantee graph: grants, funders, recipients and aggregates.
   */
  get grantsApi(): GrantsApi {
    return (this.#grantsApi ??= new GrantsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Dataset scope, source freshness, and which Candid parameters this API honors. No key required.
   */
  get meta(): Meta {
    return (this.#meta ??= new Meta(this.#rawClient, this.#servers));
  }

  /**
   * Per-organization profiles, financials and IRS compliance facets.
   */
  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Recurring monitoring over a set of EINs: compliance, filings, grants, government funding,
   * governance, and web signals, delivered as a page, email, or PDF. Pro keys only.
   */
  get pulse(): Pulse {
    return (this.#pulse ??= new Pulse(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Turn an organization name into an EIN and a canonical URL. No key required.
   */
  get resolve(): Resolve {
    return (this.#resolve ??= new Resolve(this.#rawClient, this.#servers));
  }

  /**
   * Ad-hoc read-only SQL over the warehouse. Paid keys only.
   */
  get sql(): Sql {
    return (this.#sql ??= new Sql(this.#rawClient, this.#servers, this.#auth));
  }
}
