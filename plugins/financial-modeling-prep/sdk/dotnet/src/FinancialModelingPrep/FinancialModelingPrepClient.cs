using System.Net.Http;
using FinancialModelingPrep.Api;
using FinancialModelingPrep.Core;
using FinancialModelingPrep.Core.Configuration;
using FinancialModelingPrep.Core.Logging;
using FinancialModelingPrep.Core.Models;

namespace FinancialModelingPrep;

/// <summary>
/// Financial Modeling Prep (FMP) provides financial market data including real-time and historical stock quotes, company fundamentals, financial statements (income, balance sheet, cash flow), insider transactions, earnings, ratios, and economic data. This OpenAPI spec covers a representative subset of the public REST API.
/// </summary>
public sealed class FinancialModelingPrepClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FinancialModelingPrepClient(HttpClient httpClient, FinancialModelingPrepClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FinancialModelingPrepClient/3.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "3.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FINANCIAL_MODELING_PREP_LOG"),
            "FinancialModelingPrepClient",
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

    public BalanceSheetStatement BalanceSheetStatement =>
        field ??= new BalanceSheetStatement(_rawClient, _server, _auth);

    public CashFlowStatement CashFlowStatement => field ??= new CashFlowStatement(_rawClient, _server, _auth);

    public HistoricalPriceFull HistoricalPriceFull => field ??= new HistoricalPriceFull(_rawClient, _server, _auth);

    public IncomeStatementApi IncomeStatementApi => field ??= new IncomeStatementApi(_rawClient, _server, _auth);

    public InsiderTrading InsiderTrading => field ??= new InsiderTrading(_rawClient, _server, _auth);

    public Profile Profile => field ??= new Profile(_rawClient, _server, _auth);

    public QuoteApi QuoteApi => field ??= new QuoteApi(_rawClient, _server, _auth);

    public Ratios Ratios => field ??= new Ratios(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public Stock Stock => field ??= new Stock(_rawClient, _server, _auth);
}
