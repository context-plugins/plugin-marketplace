using System.Net.Http;
using CompSniper.Api;
using CompSniper.Core;
using CompSniper.Core.Configuration;
using CompSniper.Core.Logging;
using CompSniper.Core.Models;

namespace CompSniper;

/// <summary>
/// Public eBay (including up to 3 years of sold history), Poshmark, Mercari, TCGplayer, Grailed, Depop and PSA graded card (prices by grade, population) data plus a separate quote-only US shipping-rates product. Shipping quotes separate applicable services from carrier-packaging and content-restricted options, use an independent subscription and quota, and do not consume sold-comps requests or purchased credits.
/// </summary>
public sealed class CompSniperClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CompSniperClient(HttpClient httpClient, CompSniperClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CompSniperClient/2.3.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.3.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("COMP_SNIPER_LOG"),
            "CompSniperClient",
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

    public BestOfferPrices BestOfferPrices => field ??= new BestOfferPrices(_rawClient, _server, _auth);

    public BulkSearch BulkSearch => field ??= new BulkSearch(_rawClient, _server, _auth);

    public Cards Cards => field ??= new Cards(_rawClient, _server, _auth);

    public Depop Depop => field ??= new Depop(_rawClient, _server, _auth);

    public Grailed Grailed => field ??= new Grailed(_rawClient, _server, _auth);

    public Mercari Mercari => field ??= new Mercari(_rawClient, _server, _auth);

    public Psa Psa => field ??= new Psa(_rawClient, _server, _auth);

    public Poshmark Poshmark => field ??= new Poshmark(_rawClient, _server, _auth);

    public Scrape Scrape => field ??= new Scrape(_rawClient, _server, _auth);

    public ShippingRates ShippingRates => field ??= new ShippingRates(_rawClient, _server, _auth);

    public SoldHistory SoldHistory => field ??= new SoldHistory(_rawClient, _server, _auth);

    public Summary Summary => field ??= new Summary(_rawClient, _server, _auth);

    public TcGplayer TcGplayer => field ??= new TcGplayer(_rawClient, _server, _auth);
}
