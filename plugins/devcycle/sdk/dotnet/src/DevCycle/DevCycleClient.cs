using System.Net.Http;
using DevCycle.Api;
using DevCycle.Core;
using DevCycle.Core.Configuration;
using DevCycle.Core.Logging;
using DevCycle.Core.Models;

namespace DevCycle;

/// <summary>
/// An API for managing features and variables on the DevCycle platform., Documents the DevCycle Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., Documents the DevCycle Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., Documents the DevCycle Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., Documents the DevCycle Bucketing API which provides an API interface to User Bucketing and for Server SDKs configured to use Cloud Bucketing., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform., An API for managing features and variables on the DevCycle platform.
/// </summary>
public sealed class DevCycleClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public DevCycleClient(HttpClient httpClient, DevCycleClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DevCycleClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DEV_CYCLE_LOG"),
            "DevCycleClient",
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

    public Audiences Audiences => field ??= new Audiences(_rawClient, _server);

    public AuditLog AuditLog => field ??= new AuditLog(_rawClient, _server);

    public BucketingApi BucketingApi => field ??= new BucketingApi(_rawClient, _server, _auth);

    public CustomProperties CustomProperties => field ??= new CustomProperties(_rawClient, _server);

    public EdgeDb EdgeDb => field ??= new EdgeDb(_rawClient, _server);

    public Environments Environments => field ??= new Environments(_rawClient, _server);

    public FeatureChangeRequests FeatureChangeRequests => field ??= new FeatureChangeRequests(_rawClient, _server);

    public FeatureConfigurations FeatureConfigurations => field ??= new FeatureConfigurations(_rawClient, _server);

    public FeatureOptIn FeatureOptIn => field ??= new FeatureOptIn(_rawClient, _server);

    public FeaturesV2 FeaturesV2 => field ??= new FeaturesV2(_rawClient, _server);

    public IntegrationsDynatrace IntegrationsDynatrace => field ??= new IntegrationsDynatrace(_rawClient, _server);

    public IntegrationsJira IntegrationsJira => field ??= new IntegrationsJira(_rawClient, _server);

    public MetricAssociations MetricAssociations => field ??= new MetricAssociations(_rawClient, _server);

    public Metrics Metrics => field ??= new Metrics(_rawClient, _server);

    /// <summary>
    /// See the OpenFeature documentation for more information: https://github.com/open-feature/protocol
    /// </summary>
    public OpenFeatureRemoteEvaluationApiOfrep OpenFeatureRemoteEvaluationApiOfrep =>
        field ??= new OpenFeatureRemoteEvaluationApiOfrep(_rawClient, _server);

    public Overrides Overrides => field ??= new Overrides(_rawClient, _server);

    public ProjectChangeRequests ProjectChangeRequests => field ??= new ProjectChangeRequests(_rawClient, _server);

    public Projects Projects => field ??= new Projects(_rawClient, _server);

    public Results Results => field ??= new Results(_rawClient, _server);

    public UserProfiles UserProfiles => field ??= new UserProfiles(_rawClient, _server);

    public VariablesApi VariablesApi => field ??= new VariablesApi(_rawClient, _server);

    public Variations Variations => field ??= new Variations(_rawClient, _server);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server);

    public BetaSemanticPatch BetaSemanticPatch => field ??= new BetaSemanticPatch(_rawClient, _server);

    public DeprecatedFeaturesV1 DeprecatedFeaturesV1 => field ??= new DeprecatedFeaturesV1(_rawClient, _server);
}
