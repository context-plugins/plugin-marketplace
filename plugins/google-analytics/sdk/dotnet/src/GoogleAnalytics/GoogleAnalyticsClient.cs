using System.Net.Http;
using GoogleAnalytics.Api;
using GoogleAnalytics.Core;
using GoogleAnalytics.Core.Configuration;
using GoogleAnalytics.Core.Logging;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics;

/// <summary>
/// Generated from Google's published Discovery document for Google Analytics Admin API (analyticsadmin v1beta, revision 20261110). 8 operation(s)., Generated from Google's published Discovery document for Google Analytics Admin API (analyticsadmin v1beta, revision 20261110). 1 operation(s)., Operations tagged Properties across 2 of this provider's published API definitions: google-analytics-analyticsadmin-properties-api-openapi.yml, google-analytics-analyticsdata-properties-api-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class GoogleAnalyticsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleAnalyticsClient(HttpClient httpClient, GoogleAnalyticsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleAnalyticsClient/v1beta CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1beta"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_ANALYTICS_LOG"),
            "GoogleAnalyticsClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    public AccountSummaries AccountSummaries => field ??= new AccountSummaries(_rawClient, _server, _auth);

    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    public Properties Properties => field ??= new Properties(_rawClient, _server, _auth);
}
