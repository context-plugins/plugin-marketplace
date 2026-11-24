using System.Net.Http;
using AmazonDevOpsGuru.Api;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Configuration;
using AmazonDevOpsGuru.Core.Logging;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon DevOps Guru. 3 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 3 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 4 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 5 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 1 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s)., Generated from AWS's published Smithy model for Amazon DevOps Guru. 2 operation(s).
/// </summary>
public sealed class AmazonDevOpsGuruClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonDevOpsGuruClient(HttpClient httpClient, AmazonDevOpsGuruClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonDevOpsGuruClient/2020-12-01 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2020-12-01"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_DEV_OPS_GURU_LOG"),
            "AmazonDevOpsGuruClient",
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

    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    public Anomalies Anomalies => field ??= new Anomalies(_rawClient, _server, _auth);

    public Channels Channels => field ??= new Channels(_rawClient, _server, _auth);

    public CostEstimation CostEstimation => field ??= new CostEstimation(_rawClient, _server, _auth);

    public EventSources EventSources => field ??= new EventSources(_rawClient, _server, _auth);

    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    public FeedbackApi FeedbackApi => field ??= new FeedbackApi(_rawClient, _server, _auth);

    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    public ListLogAnomalies ListLogAnomalies => field ??= new ListLogAnomalies(_rawClient, _server, _auth);

    public MonitoredResources MonitoredResources => field ??= new MonitoredResources(_rawClient, _server, _auth);

    public Organization Organization => field ??= new Organization(_rawClient, _server, _auth);

    public Recommendations Recommendations => field ??= new Recommendations(_rawClient, _server, _auth);

    public ResourceCollections ResourceCollections => field ??= new ResourceCollections(_rawClient, _server, _auth);

    public ServiceIntegrations ServiceIntegrations => field ??= new ServiceIntegrations(_rawClient, _server, _auth);
}
