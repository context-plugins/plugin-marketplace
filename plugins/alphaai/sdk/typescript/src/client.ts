import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Calendar } from "./resources/calendar.js";
import { CoverageApi } from "./resources/coverage-api.js";
import { News } from "./resources/news.js";
import { Radar } from "./resources/radar.js";
import { Stories } from "./resources/stories.js";
import { Symbols } from "./resources/symbols.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Public REST API for AlphAI's relevance-scored, ticker-linked financial news. All endpoints accept
 * `Authorization: Bearer ak_live_…` (issued from your `/account/api-keys`). Authenticated traffic
 * is metered per account with two layers — a per-minute burst cap and a per-day volume cap (Free
 * 20/min + 100/day, Basic 60/min + 10,000/day, Pro 150/min + 100,000/day); a request passes only if
 * both are under budget. The Free tier is for evaluation / personal non-commercial use; Basic is
 * licensed for internal commercial use; Pro adds redistribution of the enriched feed. Send all API
 * traffic to `api.alphai.io`; a key is required on every request. The API is server-side only. It
 * sends no CORS headers, so a cross-origin call from a browser page fails at the preflight: the
 * `OPTIONS` request is answered with `403` at the edge and never reaches the API. Keep the key on
 * your server and expose your own route to the browser; a key embedded in page code is readable by
 * every visitor and spends your quota. Every keyed response carries `X-RateLimit-Limit`,
 * `X-RateLimit-Remaining` and `X-RateLimit-Reset`; these report the per-day volume layer (Reset =
 * epoch seconds of the next 00:00 UTC reset) so you can watch your daily budget without provoking a
 * 429. A per-minute burst surfaces only as a 429 with a short `Retry-After`. A 429 body also names
 * your tier, its caps and an `upgrade` block. A request rejected with 429 does not itself spend
 * quota. The headers reflect origin processing, so a response served from a shared cache may omit
 * them. On the MCP server (`mcp.alphai.io`) the same two layers meter **tool calls only** — the
 * connect handshake (`initialize`, `tools/list`, notifications, keepalives, the SSE stream) is
 * protocol traffic and does not consume your quota. It carries a separate, far larger ceiling that
 * exists only to stop a client reconnecting in a loop; hitting it returns a 429 whose body reports
 * `"window": "transport"`, which means your client is reconnecting too often, not that you are out
 * of quota. MCP news tools accept `detail="compact"` for headline triage and polling:
 * `alphai_news_search`, `alphai_ticker_news`, `alphai_insider_news`, `alphai_trending`,
 * `alphai_actionable_now`, `alphai_macro` and `alphai_pair_analysis`. Compact items keep identity,
 * source, publication and ingest times, tickers, category, relevance_score, top-level actionability
 * and information_novelty, story fields, ownership_form and search_match. Summary, analysis, images
 * and SEC detail blocks are omitted; fetch `alphai_article(uid)` for those details. `detail="full"`
 * is the default and preserves the existing format, including the condensed recent lists on
 * pair_analysis. Selection, order, cursors, query interpretation and macro releases are unchanged,
 * so detail can change between pages. This parameter belongs to MCP tools only; REST parameters are
 * unchanged. Interactive MCP clients use a separate OAuth approval flow. Check the callback host or
 * app scheme and full callback address before approving; app names are self-declared, not verified
 * by AlphAI. MCP access includes news, market data and the saved watchlist, plus creating, changing
 * and disabling the user's own alerts on Basic or Pro (including after an upgrade). The OAuth scope
 * `tools.read` is not a read-only restriction. Registered callbacks can be reviewed in Account →
 * MCP connections. That account management surface requires website login, not an API key.
 * Disconnect blocks all existing MCP OAuth access and refresh tokens for that app connection,
 * including its other sessions; work already in progress may finish. Other connections and API keys
 * are unaffected. Revoking either token type through the separate MCP host's `/oauth/revoke` has
 * the same effect. Serialize refresh requests and save each replacement token: reuse ends the
 * connection.
 */
export class AlphaAiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #calendar?: Calendar;
  #coverageApi?: CoverageApi;
  #news?: News;
  #radar?: Radar;
  #stories?: Stories;
  #symbols?: Symbols;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ALPHA_AI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AlphaAiClient/1.52.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.52.0", schema: s.string() },
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
   * Scheduled US macro releases (FOMC, CPI, jobs, GDP, PCE…).
   */
  get calendar(): Calendar {
    return (this.#calendar ??= new Calendar(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * What each data source holds — from when, how dense, with which caveats.
   */
  get coverageApi(): CoverageApi {
    return (this.#coverageApi ??= new CoverageApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Relevance-scored, ticker-linked news.
   */
  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Descriptive news activity and supporting headlines.
   */
  get radar(): Radar {
    return (this.#radar ??= new Radar(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Market events covered by two or more publishers, summarised from their sources.
   */
  get stories(): Stories {
    return (this.#stories ??= new Stories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Active equity, crypto, and foreign symbols (tickers).
   */
  get symbols(): Symbols {
    return (this.#symbols ??= new Symbols(this.#rawClient, this.#servers, this.#auth));
  }
}
