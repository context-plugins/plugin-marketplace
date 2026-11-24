using System.Net.Http;
using OddsRelay.Api;
using OddsRelay.Core;
using OddsRelay.Core.Configuration;
using OddsRelay.Core.Logging;
using OddsRelay.Core.Models;

namespace OddsRelay;

/// <summary>
/// The OddsRelay odds API: matched boards, the raw board, discovery, coverage and status, as served at <c>https://api.oddsrelay.io</c>.
/// </summary>
public sealed class OddsRelayClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public OddsRelayClient(HttpClient httpClient, OddsRelayClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "OddsRelayClient/2026-07-08 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2026-07-08"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("ODDS_RELAY_LOG"),
            "OddsRelayClient",
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
    /// Usage and prices. Free.
    /// </summary>
    public AccountApi AccountApi => field ??= new AccountApi(_rawClient, _server, _auth);

    /// <summary>
    /// Sports, events, venues, regions. Free.
    /// </summary>
    public Discovery Discovery => field ??= new Discovery(_rawClient, _server, _auth);

    /// <summary>
    /// Matched boards, raw, one event.
    /// </summary>
    public Odds Odds => field ??= new Odds(_rawClient, _server, _auth);

    /// <summary>
    /// Coverage, status, health, liveness and this document.
    /// </summary>
    public Service Service => field ??= new Service(_rawClient, _server, _auth);
}
