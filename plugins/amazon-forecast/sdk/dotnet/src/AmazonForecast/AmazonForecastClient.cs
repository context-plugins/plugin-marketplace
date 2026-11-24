using System.Net.Http;
using AmazonForecast.Api;
using AmazonForecast.Core;
using AmazonForecast.Core.Configuration;
using AmazonForecast.Core.Logging;
using AmazonForecast.Core.Models;

namespace AmazonForecast;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Forecast Service. 5 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 1 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 7 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 3 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s)., Generated from AWS's published Smithy model for Amazon Forecast Service. 4 operation(s).
/// </summary>
public sealed class AmazonForecastClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonForecastClient(HttpClient httpClient, AmazonForecastClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonForecastClient/2018-06-26 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2018-06-26"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_FORECAST_LOG"),
            "AmazonForecastClient",
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

    public DatasetGroups DatasetGroups => field ??= new DatasetGroups(_rawClient, _server, _auth);

    public DatasetImportJob DatasetImportJob => field ??= new DatasetImportJob(_rawClient, _server, _auth);

    public Datasets Datasets => field ??= new Datasets(_rawClient, _server, _auth);

    public Explainability Explainability => field ??= new Explainability(_rawClient, _server, _auth);

    public ExplainabilityExport ExplainabilityExport => field ??= new ExplainabilityExport(_rawClient, _server, _auth);

    public ExportJobs ExportJobs => field ??= new ExportJobs(_rawClient, _server, _auth);

    public ForecastExportJob ForecastExportJob => field ??= new ForecastExportJob(_rawClient, _server, _auth);

    public Forecasts Forecasts => field ??= new Forecasts(_rawClient, _server, _auth);

    public MonitorApi MonitorApi => field ??= new MonitorApi(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public PredictorBacktestExportJob PredictorBacktestExportJob =>
        field ??= new PredictorBacktestExportJob(_rawClient, _server, _auth);

    public Predictors Predictors => field ??= new Predictors(_rawClient, _server, _auth);

    public Resource Resource => field ??= new Resource(_rawClient, _server, _auth);

    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    public WhatIfAnalysis WhatIfAnalysis => field ??= new WhatIfAnalysis(_rawClient, _server, _auth);

    public WhatIfForecast WhatIfForecast => field ??= new WhatIfForecast(_rawClient, _server, _auth);

    public WhatIfForecastExport WhatIfForecastExport => field ??= new WhatIfForecastExport(_rawClient, _server, _auth);
}
