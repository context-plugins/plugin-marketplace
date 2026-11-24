using System.Net.Http;
using Rendex.Api;
using Rendex.Core;
using Rendex.Core.Configuration;
using Rendex.Core.Logging;
using Rendex.Core.Models;

namespace Rendex;

/// <summary>
/// Render any webpage, raw HTML, or Markdown to a pixel-perfect image or PDF.
/// A rendering API for automation builders and AI agents — HTML-to-image, URL
/// screenshots, hosted OG links, and URL-to-Markdown extraction from one endpoint.
/// <para>
/// Deployed on Cloudflare's global edge (300+ locations, zero cold starts).
/// MCP-compatible for AI agent workflows. Free tier included.
/// </para>
/// <para>
/// <b>Features</b>: PNG/JPEG/WebP/PDF output, HTML/URL/Markdown input, batch capture (up to 500 URLs),
/// geo-targeted rendering (50+ countries), async pipeline with webhook
/// delivery, CSS/JS injection, custom cookies and headers, full-page capture,
/// dark mode emulation, ad blocking, element selectors, custom viewports
/// (320–3840px), device scale factor (1–3x), progressive navigation with
/// automatic fallback.
/// </para>
/// </summary>
public sealed class RendexClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public RendexClient(HttpClient httpClient, RendexClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "RendexClient/1.8.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.8.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("RENDEX_LOG"),
            "RendexClient",
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
    /// Plan, usage, and upgrade information
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Multi-URL batch capture
    /// </summary>
    public Batch Batch => field ??= new Batch(_rawClient, _server, _auth);

    /// <summary>
    /// Service health checks
    /// </summary>
    public Health Health => field ??= new Health(_rawClient, _server);

    /// <summary>
    /// Async job and batch status polling
    /// </summary>
    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    /// <summary>
    /// Capture webpage screenshots
    /// </summary>
    public Screenshot Screenshot => field ??= new Screenshot(_rawClient, _server, _auth);

    /// <summary>
    /// Website change monitoring — create watches, read run history, receive change webhooks.
    /// Rendex renders each check in real Chrome, runs a before/after visual (and/or text) diff,
    /// and alerts you by email (every plan) or signed webhook (Starter+). Shares your <c>rdx_</c>
    /// key and credit pool with the rendering endpoints — one credit per check.
    /// </summary>
    public WatchApi WatchApi => field ??= new WatchApi(_rawClient, _server, _auth);
}
