using System.Net.Http;
using GoogleSearchConsole.Api;
using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Configuration;
using GoogleSearchConsole.Core.Logging;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole;

/// <summary>
/// Generated from Google's published Discovery document for Google Search Console API (searchconsole v1, revision 20261110). 1 operation(s)., Generated from Google's published Discovery document for Google Search Console API (searchconsole v1, revision 20261110). 4 operation(s)., Generated from Google's published Discovery document for Google Search Console API (searchconsole v1, revision 20261110). 4 operation(s)., Generated from Google's published Discovery document for Google Search Console API (searchconsole v1, revision 20261110). 1 operation(s)., Generated from Google's published Discovery document for Google Search Console API (searchconsole v1, revision 20261110). 1 operation(s).
/// </summary>
public sealed class GoogleSearchConsoleClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleSearchConsoleClient(HttpClient httpClient, GoogleSearchConsoleClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleSearchConsoleClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_SEARCH_CONSOLE_LOG"),
            "GoogleSearchConsoleClient",
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

    public Searchanalytics Searchanalytics => field ??= new Searchanalytics(_rawClient, _server, _auth);

    public Sitemaps Sitemaps => field ??= new Sitemaps(_rawClient, _server, _auth);

    public Sites Sites => field ??= new Sites(_rawClient, _server, _auth);

    public UrlInspection UrlInspection => field ??= new UrlInspection(_rawClient, _server, _auth);

    public UrlTestingTools UrlTestingTools => field ??= new UrlTestingTools(_rawClient, _server, _auth);
}
