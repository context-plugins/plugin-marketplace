import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ArticlesApi } from "./resources/articles-api.js";
import { CalendarEvents } from "./resources/calendar-events.js";
import { Categories } from "./resources/categories.js";
import { CompaniesApi } from "./resources/companies-api.js";
import { CountriesApi } from "./resources/countries-api.js";
import { EventTypes } from "./resources/event-types.js";
import { Events } from "./resources/events.js";
import { ExchangesApi } from "./resources/exchanges-api.js";
import { Health } from "./resources/health.js";
import { IndicesApi } from "./resources/indices-api.js";
import { Meta } from "./resources/meta.js";
import { SearchApi } from "./resources/search-api.js";
import { Sources } from "./resources/sources.js";
import { StoriesApi } from "./resources/stories-api.js";
import { Watchlists } from "./resources/watchlists.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * REST API for Nordic financial news. Each article is summarized in English (headline, short
 * summary, and key points) with the original-language article linked via `article_url`. The full
 * article body stays at the source. ## Authentication All endpoints require Bearer token
 * authentication using an API key. Include the API key in the Authorization header:
 * ```
 * Authorization: Bearer YOUR_API_KEY
 * ```
 *
 * ## Rate Limiting
 * Rate limits apply per account, shared across every API key on that account — not per individual
 * key:
 * - **Free**: 100 requests/hour
 * - **Plus**: 100 requests/hour
 * - **Pro**: 5,000 requests/hour
 *
 * On Free and Plus, MCP tool calls have their own hourly and monthly allowance and do not count
 * toward these REST limits. On Pro, REST requests and MCP tool calls share one allowance. Rate
 * limit information is included in response headers:
 * - `X-RateLimit-Limit`: Maximum requests per hour
 * - `X-RateLimit-Remaining`: Requests remaining
 * - `X-RateLimit-Reset`: Seconds until limit resets
 * - `X-RateLimit-Policy`: Human-readable rate limit policy (e.g. `5000 per hour; fixed window`)
 *
 * A single client IP is additionally capped at 300 requests per 5-minute window, so reaching your
 * account's full hourly allowance requires spreading requests across more than one source IP. The
 * `/health` endpoint is exempt from rate limiting and does not return rate limit headers. ##
 * Monthly Usage Limits Free and Plus accounts have a fixed monthly allowance that resets at the
 * start of each calendar month, shared across every API key on the account:
 * - **Free**: 100 requests/month
 * - **Plus**: 100 requests/month
 *
 * Responses on these plans include:
 * - `X-Monthly-Limit`: Maximum requests for the current month
 * - `X-Monthly-Remaining`: Requests remaining this month
 * - `X-Monthly-Reset`: ISO 8601 timestamp when the allowance resets
 *
 * When the allowance is exceeded, the API returns `429 Too Many Requests` with a `Retry-After`
 * header. Pro has no hard limit. It includes 25,000 requests per billing cycle, with usage-based
 * pricing beyond that, so requests are never blocked. Responses on Pro include:
 * - `X-Monthly-Usage`: Requests used in the current billing cycle
 * - `X-Monthly-Reset`: ISO 8601 timestamp when the current billing cycle ends
 *
 * A Pro billing cycle follows your subscription's billing period, which begins on the date you
 * subscribed and is not necessarily a calendar month. Usage is counted by day, so the first day of
 * a billing cycle is counted in full. ## Caching Every list and single-resource endpoint returns an
 * `ETag`. Most also return `Last-Modified` (on lists, when the page is not empty); `GET
 * /stories/{id}` and the Events endpoints do not. Send the ETag back as `If-None-Match`, or the
 * date as `If-Modified-Since`, to receive `304 Not Modified` when nothing has changed. A 304 has no
 * body and does not count against the monthly request allowance. `GET /events`, `GET /events/{id}`
 * and `GET /companies/{identifier}/events` return an `ETag` but no `Last-Modified`, so revalidate
 * those routes with `If-None-Match`. An event's visible company and story membership, and its live
 * article count, all change without moving its `updated_at`, so a date-based validator would report
 * "not modified" across a change the `ETag` catches. Some requests are never cached and return
 * `Cache-Control: no-cache, no-store` with no `ETag`: full-text search (`q`), `updated_after` sync
 * requests, and `GET /search`. The `ETag` reflects the response as served, not only record
 * timestamps. On articles and stories, including the company-scoped routes, and on `GET
 * /calendar_events`, it changes when a plan limit alters the visible set, and on stories when a
 * story's visible article set changes. A changed `ETag` does not necessarily mean a record was
 * updated. On the Events endpoints the `ETag` additionally covers each event's visible company and
 * story ids and its live article count, none of which move the event's `updated_at`. ## Pagination
 * List endpoints support cursor-based pagination.
 */
export class NordicFinancialNewsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #articlesApi?: ArticlesApi;
  #calendarEvents?: CalendarEvents;
  #categories?: Categories;
  #companiesApi?: CompaniesApi;
  #countriesApi?: CountriesApi;
  #eventTypes?: EventTypes;
  #events?: Events;
  #exchangesApi?: ExchangesApi;
  #health?: Health;
  #indicesApi?: IndicesApi;
  #meta?: Meta;
  #searchApi?: SearchApi;
  #sources?: Sources;
  #storiesApi?: StoriesApi;
  #watchlists?: Watchlists;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "NORDIC_FINANCIAL_NEWS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "NordicFinancialNewsClient/1.0.0 TypeScript", schema: s.string() },
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

  get articlesApi(): ArticlesApi {
    return (this.#articlesApi ??= new ArticlesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get calendarEvents(): CalendarEvents {
    return (this.#calendarEvents ??= new CalendarEvents(this.#rawClient, this.#servers, this.#auth));
  }

  get categories(): Categories {
    return (this.#categories ??= new Categories(this.#rawClient, this.#servers, this.#auth));
  }

  get companiesApi(): CompaniesApi {
    return (this.#companiesApi ??= new CompaniesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get countriesApi(): CountriesApi {
    return (this.#countriesApi ??= new CountriesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get eventTypes(): EventTypes {
    return (this.#eventTypes ??= new EventTypes(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get exchangesApi(): ExchangesApi {
    return (this.#exchangesApi ??= new ExchangesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get indicesApi(): IndicesApi {
    return (this.#indicesApi ??= new IndicesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get meta(): Meta {
    return (this.#meta ??= new Meta(this.#rawClient, this.#servers, this.#auth));
  }

  get searchApi(): SearchApi {
    return (this.#searchApi ??= new SearchApi(this.#rawClient, this.#servers, this.#auth));
  }

  get sources(): Sources {
    return (this.#sources ??= new Sources(this.#rawClient, this.#servers, this.#auth));
  }

  get storiesApi(): StoriesApi {
    return (this.#storiesApi ??= new StoriesApi(this.#rawClient, this.#servers, this.#auth));
  }

  get watchlists(): Watchlists {
    return (this.#watchlists ??= new Watchlists(this.#rawClient, this.#servers, this.#auth));
  }
}
