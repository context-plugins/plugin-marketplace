using System.Net.Http;
using AwsXRay.Api;
using AwsXRay.Core;
using AwsXRay.Core.Configuration;
using AwsXRay.Core.Logging;
using AwsXRay.Core.Models;

namespace AwsXRay;

/// <summary>
/// Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 8 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 2 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s)., Generated from AWS's published Smithy model for AWS X-Ray. 1 operation(s).
/// </summary>
public sealed class AwsXRayClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsXRayClient(HttpClient httpClient, AwsXRayClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsXRayClient/2016-04-12 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2016-04-12"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_XRAY_LOG"),
            "AwsXRayClient",
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

    public Creategroup Creategroup => field ??= new Creategroup(_rawClient, _server, _auth);

    public Createsamplingrule Createsamplingrule => field ??= new Createsamplingrule(_rawClient, _server, _auth);

    public DeleteGroup DeleteGroup => field ??= new DeleteGroup(_rawClient, _server, _auth);

    public Deleteresourcepolicy Deleteresourcepolicy => field ??= new Deleteresourcepolicy(_rawClient, _server, _auth);

    public Deletesamplingrule Deletesamplingrule => field ??= new Deletesamplingrule(_rawClient, _server, _auth);

    public EncryptionconfigApi EncryptionconfigApi => field ??= new EncryptionconfigApi(_rawClient, _server, _auth);

    public GetGroup GetGroup => field ??= new GetGroup(_rawClient, _server, _auth);

    public Getsamplingrules Getsamplingrules => field ??= new Getsamplingrules(_rawClient, _server, _auth);

    public Groups Groups => field ??= new Groups(_rawClient, _server, _auth);

    public InsightApi InsightApi => field ??= new InsightApi(_rawClient, _server, _auth);

    public Insightevents Insightevents => field ??= new Insightevents(_rawClient, _server, _auth);

    public Insightimpactgraph Insightimpactgraph => field ??= new Insightimpactgraph(_rawClient, _server, _auth);

    public Insightsummaries Insightsummaries => field ??= new Insightsummaries(_rawClient, _server, _auth);

    public ListTagsForResource ListTagsForResource => field ??= new ListTagsForResource(_rawClient, _server, _auth);

    public Listresourcepolicies Listresourcepolicies => field ??= new Listresourcepolicies(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public Putencryptionconfig Putencryptionconfig => field ??= new Putencryptionconfig(_rawClient, _server, _auth);

    public Putresourcepolicy Putresourcepolicy => field ??= new Putresourcepolicy(_rawClient, _server, _auth);

    public Sampling Sampling => field ??= new Sampling(_rawClient, _server, _auth);

    public Samplingstatisticsummaries Samplingstatisticsummaries =>
        field ??= new Samplingstatisticsummaries(_rawClient, _server, _auth);

    public Samplingtargets Samplingtargets => field ??= new Samplingtargets(_rawClient, _server, _auth);

    public ServiceGraph ServiceGraph => field ??= new ServiceGraph(_rawClient, _server, _auth);

    public TagResource TagResource => field ??= new TagResource(_rawClient, _server, _auth);

    public Telemetryrecords Telemetryrecords => field ??= new Telemetryrecords(_rawClient, _server, _auth);

    public TimeseriesservicestatisticsApi TimeseriesservicestatisticsApi =>
        field ??= new TimeseriesservicestatisticsApi(_rawClient, _server, _auth);

    public Tracegraph Tracegraph => field ??= new Tracegraph(_rawClient, _server, _auth);

    public Traces Traces => field ??= new Traces(_rawClient, _server, _auth);

    public Tracesegments Tracesegments => field ??= new Tracesegments(_rawClient, _server, _auth);

    public Tracesummaries Tracesummaries => field ??= new Tracesummaries(_rawClient, _server, _auth);

    public UntagResource UntagResource => field ??= new UntagResource(_rawClient, _server, _auth);

    public UpdateGroup UpdateGroup => field ??= new UpdateGroup(_rawClient, _server, _auth);

    public Updatesamplingrule Updatesamplingrule => field ??= new Updatesamplingrule(_rawClient, _server, _auth);
}
