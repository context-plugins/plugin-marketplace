using System.Net.Http;
using AmazonAppSync.Api;
using AmazonAppSync.Core;
using AmazonAppSync.Core.Configuration;
using AmazonAppSync.Core.Logging;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync;

/// <summary>
/// Generated from AWS's published Smithy model for AWS AppSync. 4 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 10 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 5 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 7 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 8 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 5 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 6 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 9 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 6 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 3 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 5 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 3 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 6 operation(s).
/// </summary>
public sealed class AmazonAppSyncClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonAppSyncClient(HttpClient httpClient, AmazonAppSyncClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonAppSyncClient/2017-07-25 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2017-07-25"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_APP_SYNC_LOG"),
            "AmazonAppSyncClient",
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

    public ApiKeys ApiKeys => field ??= new ApiKeys(_rawClient, _server, _auth);

    public Apicaches Apicaches => field ??= new Apicaches(_rawClient, _server, _auth);

    public Apis Apis => field ??= new Apis(_rawClient, _server, _auth);

    public Channelnamespaces Channelnamespaces => field ??= new Channelnamespaces(_rawClient, _server, _auth);

    public DataSources DataSources => field ??= new DataSources(_rawClient, _server, _auth);

    public DomainNames DomainNames => field ??= new DomainNames(_rawClient, _server, _auth);

    public Functions Functions => field ??= new Functions(_rawClient, _server, _auth);

    public GraphqlApis GraphqlApis => field ??= new GraphqlApis(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public Resolvers Resolvers => field ??= new Resolvers(_rawClient, _server, _auth);

    public Schema Schema => field ??= new Schema(_rawClient, _server, _auth);

    public Sourceapiassociations Sourceapiassociations =>
        field ??= new Sourceapiassociations(_rawClient, _server, _auth);

    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);

    public Types Types => field ??= new Types(_rawClient, _server, _auth);
}
