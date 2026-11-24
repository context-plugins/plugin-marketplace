using System.Net.Http;
using StayingApi.Api;
using StayingApi.Core;
using StayingApi.Core.Configuration;
using StayingApi.Core.Logging;
using StayingApi.Core.Models;

namespace StayingApi;

/// <summary>
/// One accommodation-data API for Airbnb, Booking.com, Vrbo and Google Hotels — availability, search and cross-OTA price comparison in a single unified schema. Every endpoint returns the canonical envelope (§6.3.3); errors use the locked sub-code catalog (§6.4). Failed, empty and blocked calls are never billed; cached results bill at tier (caching is margin, not a discount). Full docs: https://stayingapi.com/docs.
/// </summary>
public sealed class StayingApiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public StayingApiClient(HttpClient httpClient, StayingApiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "StayingApiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("STAYING_API_LOG"),
            "StayingApiClient",
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
    /// Account, plan and credit balance
    /// </summary>
    public AccountApi AccountApi => field ??= new AccountApi(_rawClient, _server, _auth);

    /// <summary>
    /// Accommodation data endpoints
    /// </summary>
    public DataApi DataApi => field ??= new DataApi(_rawClient, _server, _auth);

    /// <summary>
    /// Async job polling
    /// </summary>
    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);
}
