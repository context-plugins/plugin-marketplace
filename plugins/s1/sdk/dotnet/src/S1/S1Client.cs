using System.Net.Http;
using S1.Api;
using S1.Core;
using S1.Core.Configuration;
using S1.Core.Logging;
using S1.Core.Models;

namespace S1;

/// <summary>
/// Web search, news, crawling, screenshot, and content extraction APIs for AI agents. Supports pay-per-request via MPP and x402 protocols.
/// </summary>
public sealed class S1Client
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public S1Client(HttpClient httpClient, S1ClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "S1Client/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("S1_LOG"),
            "S1Client",
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
