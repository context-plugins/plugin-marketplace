using System.Net.Http;
using Search1Api.Api;
using Search1Api.Core;
using Search1Api.Core.Configuration;
using Search1Api.Core.Logging;
using Search1Api.Core.Models;

namespace Search1Api;

/// <summary>
/// Web search, news, crawling, screenshot, and content extraction APIs for AI agents. Supports pay-per-request via MPP and x402 protocols.
/// </summary>
public sealed class Search1ApiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public Search1ApiClient(HttpClient httpClient, Search1ApiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "Search1ApiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SEARCH1_API_LOG"),
            "Search1ApiClient",
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

    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    public Crawl Crawl => field ??= new Crawl(_rawClient, _server, _auth);

    public Feedback Feedback => field ??= new Feedback(_rawClient, _server, _auth);

    public Screenshot Screenshot => field ??= new Screenshot(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public SystemApi SystemApi => field ??= new SystemApi(_rawClient, _server);
}
