import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Account } from "./resources/account.js";
import { Batch } from "./resources/batch.js";
import { Health } from "./resources/health.js";
import { Jobs } from "./resources/jobs.js";
import { Screenshot } from "./resources/screenshot.js";
import { WatchApi } from "./resources/watch-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Render any webpage, raw HTML, or Markdown to a pixel-perfect image or PDF. A rendering API for
 * automation builders and AI agents — HTML-to-image, URL screenshots, hosted OG links, and
 * URL-to-Markdown extraction from one endpoint.
 *
 * Deployed on Cloudflare's global edge (300+ locations, zero cold starts). MCP-compatible for AI
 * agent workflows. Free tier included.
 *
 * **Features**: PNG/JPEG/WebP/PDF output, HTML/URL/Markdown input, batch capture (up to 500 URLs),
 * geo-targeted rendering (50+ countries), async pipeline with webhook delivery, CSS/JS injection,
 * custom cookies and headers, full-page capture, dark mode emulation, ad blocking, element
 * selectors, custom viewports (320–3840px), device scale factor (1–3x), progressive navigation with
 * automatic fallback.
 */
export class RendexClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #account?: Account;
  #batch?: Batch;
  #health?: Health;
  #jobs?: Jobs;
  #screenshot?: Screenshot;
  #watchApi?: WatchApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "RENDEX_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "RendexClient/1.8.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.8.0", schema: s.string() },
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
   * Plan, usage, and upgrade information
   */
  get account(): Account {
    return (this.#account ??= new Account(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Multi-URL batch capture
   */
  get batch(): Batch {
    return (this.#batch ??= new Batch(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Service health checks
   */
  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  /**
   * Async job and batch status polling
   */
  get jobs(): Jobs {
    return (this.#jobs ??= new Jobs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Capture webpage screenshots
   */
  get screenshot(): Screenshot {
    return (this.#screenshot ??= new Screenshot(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Website change monitoring — create watches, read run history, receive change webhooks. Rendex
   * renders each check in real Chrome, runs a before/after visual (and/or text) diff, and alerts
   * you by email (every plan) or signed webhook (Starter+). Shares your `rdx_` key and credit pool
   * with the rendering endpoints — one credit per check.
   */
  get watchApi(): WatchApi {
    return (this.#watchApi ??= new WatchApi(this.#rawClient, this.#servers, this.#auth));
  }
}
