using System.Net.Http;
using AwsStorageGateway.Api;
using AwsStorageGateway.Core;
using AwsStorageGateway.Core.Configuration;
using AwsStorageGateway.Core.Logging;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway;

/// <summary>
/// Generated from AWS's published Smithy model for AWS Storage Gateway. 5 operation(s)., Generated from AWS's published Smithy model for AWS Storage Gateway. 91 operation(s)., Generated from AWS's published Smithy model for AWS Storage Gateway. 5 operation(s)., Generated from AWS's published Smithy model for AWS Storage Gateway. 9 operation(s).
/// </summary>
public sealed class AwsStorageGatewayClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsStorageGatewayClient(HttpClient httpClient, AwsStorageGatewayClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsStorageGatewayClient/2013-06-30 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2013-06-30"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_STORAGE_GATEWAY_LOG"),
            "AwsStorageGatewayClient",
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

    public AmazonStorageGatewayRestApi AmazonStorageGatewayRestApi =>
        field ??= new AmazonStorageGatewayRestApi(_rawClient, _server, _auth);

    public AwsStorageGatewayApi AwsStorageGatewayApi => field ??= new AwsStorageGatewayApi(_rawClient, _server, _auth);

    public CacheReport CacheReport => field ??= new CacheReport(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);
}
