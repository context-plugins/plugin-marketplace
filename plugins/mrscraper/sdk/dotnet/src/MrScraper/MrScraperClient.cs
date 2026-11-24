using System.Net.Http;
using MrScraper.Api;
using MrScraper.Core;
using MrScraper.Core.Configuration;
using MrScraper.Core.Logging;
using MrScraper.Core.Models;

namespace MrScraper;

/// <summary>
/// GENERATED FROM DOCUMENTATION by API Evangelist on 2026-10-07: 3 operation(s) read from 3 public documentation page(s) (each operation names its page in x-source)., A clean architecture Go service for managing scraping tasks, A clean architecture Go service for managing scraping tasks, A clean architecture Go service for managing scraping tasks, GENERATED FROM DOCUMENTATION by API Evangelist on 2026-10-07: 3 operation(s) read from 3 public documentation page(s) (each operation names its page in x-source)., GENERATED FROM DOCUMENTATION by API Evangelist on 2026-10-07: 3 operation(s) read from 3 public documentation page(s) (each operation names its page in x-source)., A clean architecture Go service for managing scraping tasks, A clean architecture Go service for managing scraping tasks
/// </summary>
public sealed class MrScraperClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public MrScraperClient(HttpClient httpClient, MrScraperClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "MrScraperClient/2026-10-07 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2026-10-07"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("MR_SCRAPER_LOG"),
            "MrScraperClient",
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

    public Analytic Analytic => field ??= new Analytic(_rawClient, _server, _auth);

    public Auth Auth => field ??= new Auth(_rawClient, _server, _auth);

    public Gateway Gateway => field ??= new Gateway(_rawClient, _server, _auth);

    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    public Proxies Proxies => field ??= new Proxies(_rawClient, _server, _auth);

    public Results Results => field ??= new Results(_rawClient, _server, _auth);

    public Storage Storage => field ??= new Storage(_rawClient, _server, _auth);

    public Tasks Tasks => field ??= new Tasks(_rawClient, _server, _auth);
}
