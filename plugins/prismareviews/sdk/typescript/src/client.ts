import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Connections } from "./resources/connections.js";
import { LocationsApi } from "./resources/locations-api.js";
import { Platforms } from "./resources/platforms.js";
import { Replies } from "./resources/replies.js";
import { Reviews } from "./resources/reviews.js";
import { StatsApi } from "./resources/stats-api.js";
import { UsageApi } from "./resources/usage-api.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Read the reviews of the businesses and apps you own or manage on the App Store, Google Play,
 * Judge.me, eBay, Trusted Shops, eKomi, Yelp, Tripadvisor, Booking.com, G2 and 50+ more platforms,
 * all in one normalized JSON shape, and reply through each platform's official API where it has one
 * (read-only platforms return the link where a review is answered). Google Business Profile,
 * Trustpilot, Allegro, Etsy, Angi and Mercado Libre are coming soon: `GET /v1/platforms` says which
 * platforms are ready (`live_ready`).
 *
 * - **Auth:** `Authorization: Bearer `. Live keys (`pk_live_…`) work with real accounts; test keys
 *   (`pk_test_…`) connect any platform with sample locations and reviews and never publish replies.
 *   Test and live data never mix.
 * - **Format:** JSON in and out; timestamps are ISO 8601 in UTC; IDs are prefixed (`rev_`, `loc_`,
 *   `con_`, `we_`, `evt_`, `req_`).
 * - **Pagination:** `GET /v1/reviews` is cursor paginated (`data` + `next_cursor`).
 * - **Rate limits:** per key and per minute, set by the plan (Spark 60, Beam 120, Spectrum 600,
 *   Aurora 1,200), reported in `X-RateLimit-Limit` and `X-RateLimit-Remaining`.
 * - **Errors:** one shape, `{ "error": { "type", "code", "message", "retryable", "request_id",
 *   "docs_url" } }`; codes on https://prismareviews.com/docs/errors.
 * - **Webhooks:** signed `POST`s for new and updated reviews, published or failed replies and
 *   connection changes.
 *
 * Get a free API key at https://app.prismareviews.com/signup.
 */
export class PrismaReviewsClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #connections?: Connections;
  #locationsApi?: LocationsApi;
  #platforms?: Platforms;
  #replies?: Replies;
  #reviews?: Reviews;
  #statsApi?: StatsApi;
  #usageApi?: UsageApi;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PRISMA_REVIEWS_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PrismaReviewsClient/1.0.0 TypeScript", schema: s.string() },
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
   * Connect platform accounts by OAuth, credentials or listing URL, or with a connect link.
   */
  get connections(): Connections {
    return (this.#connections ??= new Connections(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The places, apps, shops and listings that receive reviews.
   */
  get locationsApi(): LocationsApi {
    return (this.#locationsApi ??= new LocationsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * How each platform connects, the fields it needs and whether your workspace can connect it.
   */
  get platforms(): Platforms {
    return (this.#platforms ??= new Platforms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Publish and delete replies through each platform's official API.
   */
  get replies(): Replies {
    return (this.#replies ??= new Replies(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reviews from every connected location, in one JSON shape.
   */
  get reviews(): Reviews {
    return (this.#reviews ??= new Reviews(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Review statistics per workspace, location or platform.
   */
  get statsApi(): StatsApi {
    return (this.#statsApi ??= new StatsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Your plan and this month's usage.
   */
  get usageApi(): UsageApi {
    return (this.#usageApi ??= new UsageApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Signed event deliveries to your HTTPS endpoints.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
