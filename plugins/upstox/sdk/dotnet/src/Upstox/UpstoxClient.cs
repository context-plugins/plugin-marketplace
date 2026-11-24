using System.Net.Http;
using Upstox.Api;
using Upstox.Core;
using Upstox.Core.Configuration;
using Upstox.Core.Logging;
using Upstox.Core.Models;

namespace Upstox;

/// <summary>
/// Historical Candle Data V3
/// </summary>
public sealed class UpstoxClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public UpstoxClient(HttpClient httpClient, UpstoxClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "UpstoxClient/v0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("UPSTOX_LOG"),
            "UpstoxClient",
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

    public Charge Charge => field ??= new Charge(_rawClient, _server, _auth);

    public ExpiredInstrument ExpiredInstrument => field ??= new ExpiredInstrument(_rawClient, _server, _auth);

    public Fundamentals Fundamentals => field ??= new Fundamentals(_rawClient, _server, _auth);

    public History History => field ??= new History(_rawClient, _server);

    /// <summary>
    /// Historical Candle Data V3
    /// </summary>
    public HistoryV3 HistoryV3 => field ??= new HistoryV3(_rawClient, _server);

    public Ipo Ipo => field ??= new Ipo(_rawClient, _server, _auth);

    public Instruments Instruments => field ??= new Instruments(_rawClient, _server, _auth);

    public Login Login => field ??= new Login(_rawClient, _server, _auth);

    public MarketHolidaysAndTimings MarketHolidaysAndTimings =>
        field ??= new MarketHolidaysAndTimings(_rawClient, _server, _auth);

    public MarketQuote MarketQuote => field ??= new MarketQuote(_rawClient, _server, _auth);

    public MarketQuoteV3 MarketQuoteV3 => field ??= new MarketQuoteV3(_rawClient, _server, _auth);

    public MutualFund MutualFund => field ??= new MutualFund(_rawClient, _server, _auth);

    public News News => field ??= new News(_rawClient, _server, _auth);

    public Options Options => field ??= new Options(_rawClient, _server, _auth);

    public Order Order => field ??= new Order(_rawClient, _server, _auth);

    public Payments Payments => field ??= new Payments(_rawClient, _server, _auth);

    public Portfolio Portfolio => field ??= new Portfolio(_rawClient, _server, _auth);

    public PostTrade PostTrade => field ??= new PostTrade(_rawClient, _server, _auth);

    public TradeProfitAndLoss TradeProfitAndLoss => field ??= new TradeProfitAndLoss(_rawClient, _server, _auth);

    public User User => field ??= new User(_rawClient, _server, _auth);

    public Websocket Websocket => field ??= new Websocket(_rawClient, _server, _auth);

    public EventsControllerV2 EventsControllerV2 => field ??= new EventsControllerV2(_rawClient, _server);
}
