using System.Net.Http;
using Statable.Api;
using Statable.Core;
using Statable.Core.Configuration;
using Statable.Core.Logging;
using Statable.Core.Models;

namespace Statable;

/// <summary>
/// Read-only public analytics API for Statable.
/// </summary>
public sealed class StatableClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public StatableClient(HttpClient httpClient, StatableClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "StatableClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("STATABLE_LOG"),
            "StatableClient",
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
    /// Register an account and obtain its first API key without a browser. The only operations in this spec that take NO bearer token. Behind the server-side <c>API_BOOTSTRAP_ENABLED</c> flag; while it is off both routes answer 404 <c>write_disabled</c>. See docs/api-v1-write-surface.md §2.
    /// </summary>
    public Bootstrap Bootstrap => field ??= new Bootstrap(_rawClient, _server);

    /// <summary>
    /// Manage API keys (write surface). Requires the <c>keys:manage</c> scope and the server-side <c>API_WRITE_ENABLED</c> flag; while the flag is off every route here answers 404 <c>write_disabled</c>. See docs/api-v1-write-surface.md.
    /// </summary>
    public Keys Keys => field ??= new Keys(_rawClient, _server, _auth);

    /// <summary>
    /// Create, change and delete sites (write surface). Requires the <c>sites:write</c> scope and the server-side <c>API_WRITE_ENABLED</c> flag; the snippet route needs only <c>read</c>. See docs/api-v1-write-surface.md §5.
    /// </summary>
    public Sites Sites => field ??= new Sites(_rawClient, _server, _auth);

    /// <summary>
    /// Read analytics data.
    /// </summary>
    public Stats Stats => field ??= new Stats(_rawClient, _server, _auth);
}
