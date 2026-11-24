using System.Net.Http;
using AlphaAi.Api;
using AlphaAi.Core;
using AlphaAi.Core.Configuration;
using AlphaAi.Core.Logging;
using AlphaAi.Core.Models;

namespace AlphaAi;

/// <summary>
/// Public REST API for AlphAI's relevance-scored, ticker-linked financial news. All endpoints accept <c>Authorization: Bearer ak_live_…</c> (issued from your
/// <c>/account/api-keys</c>). Authenticated traffic is metered per account with two
/// layers — a per-minute burst cap and a per-day volume cap (Free 20/min +
/// 100/day, Basic 60/min + 10,000/day, Pro 150/min + 100,000/day); a request
/// passes only if both are under budget. The Free tier is for evaluation /
/// personal non-commercial use; Basic is licensed for internal commercial use;
/// Pro adds redistribution of the enriched feed. Send all API traffic to
/// <c>api.alphai.io</c>; a key is required on every request. The API is server-side only. It sends no CORS headers, so a cross-origin
/// call from a browser page fails at the preflight: the <c>OPTIONS</c> request is
/// answered with <c>403</c> at the edge and never reaches the API. Keep the key on
/// your server and expose your own route to the browser; a key embedded in
/// page code is readable by every visitor and spends your quota. Every keyed response carries <c>X-RateLimit-Limit</c>, <c>X-RateLimit-Remaining</c>
/// and <c>X-RateLimit-Reset</c>; these report the per-day volume layer (Reset =
/// epoch seconds of the next 00:00 UTC reset) so you can watch your daily budget
/// without provoking a 429. A per-minute burst surfaces only as a 429 with a
/// short <c>Retry-After</c>. A 429 body also names your tier, its caps and an
/// <c>upgrade</c> block. A request rejected with 429 does not itself spend quota. The headers reflect origin processing, so a response served from a shared
/// cache may omit them. On the MCP server (<c>mcp.alphai.io</c>) the same two layers meter **tool calls
/// only** — the connect handshake (<c>initialize</c>, <c>tools/list</c>, notifications,
/// keepalives, the SSE stream) is protocol traffic and does not consume your
/// quota. It carries a separate, far larger ceiling that exists only to stop a
/// client reconnecting in a loop; hitting it returns a 429 whose body reports
/// <c>"window": "transport"</c>, which means your client is reconnecting too often,
/// not that you are out of quota. MCP news tools accept <c>detail="compact"</c> for headline triage and polling:
/// <c>alphai_news_search</c>, <c>alphai_ticker_news</c>, <c>alphai_insider_news</c>,
/// <c>alphai_trending</c>, <c>alphai_actionable_now</c>, <c>alphai_macro</c> and
/// <c>alphai_pair_analysis</c>. Compact items keep identity, source, publication
/// and ingest times, tickers, category, relevance_score, top-level
/// actionability and information_novelty, story fields, ownership_form and
/// search_match. Summary, analysis, images and SEC detail blocks are omitted;
/// fetch <c>alphai_article(uid)</c> for those details. <c>detail="full"</c> is the
/// default and preserves the existing format, including the condensed recent
/// lists on pair_analysis. Selection, order, cursors, query interpretation
/// and macro releases are unchanged, so detail can change between pages. This parameter belongs to MCP tools only; REST parameters are unchanged. Interactive MCP clients use a separate OAuth approval flow. Check the
/// callback host or app scheme and full callback address before approving;
/// app names are self-declared, not verified by AlphAI. MCP access includes
/// news, market data and the saved watchlist, plus creating, changing and
/// disabling the user's own alerts on Basic or Pro (including after an
/// upgrade). The OAuth scope <c>tools.read</c> is not a read-only restriction. Registered callbacks can be reviewed in Account → MCP connections. That account management surface requires website login, not an API key. Disconnect blocks all existing MCP OAuth access and refresh tokens for that
/// app connection, including its other sessions; work already in progress may
/// finish. Other connections and API keys are unaffected. Revoking either token
/// type through the separate MCP host's <c>/oauth/revoke</c> has the same effect. Serialize refresh requests and save each replacement token: reuse ends the
/// connection.
/// </summary>
public sealed class AlphaAiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AlphaAiClient(HttpClient httpClient, AlphaAiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AlphaAiClient/1.52.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.52.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ALPHA_AI_LOG"),
            "AlphaAiClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// Scheduled US macro releases (FOMC, CPI, jobs, GDP, PCE…).
    /// </summary>
    public Calendar Calendar => field ??= new Calendar(_rawClient, _server, _auth);

    /// <summary>
    /// What each data source holds — from when, how dense, with which caveats.
    /// </summary>
    public CoverageApi CoverageApi => field ??= new CoverageApi(_rawClient, _server, _auth);

    /// <summary>
    /// Relevance-scored, ticker-linked news.
    /// </summary>
    public News News => field ??= new News(_rawClient, _server, _auth);

    /// <summary>
    /// Descriptive news activity and supporting headlines.
    /// </summary>
    public Radar Radar => field ??= new Radar(_rawClient, _server, _auth);

    /// <summary>
    /// Market events covered by two or more publishers, summarised from their sources.
    /// </summary>
    public Stories Stories => field ??= new Stories(_rawClient, _server, _auth);

    /// <summary>
    /// Active equity, crypto, and foreign symbols (tickers).
    /// </summary>
    public Symbols Symbols => field ??= new Symbols(_rawClient, _server, _auth);
}
