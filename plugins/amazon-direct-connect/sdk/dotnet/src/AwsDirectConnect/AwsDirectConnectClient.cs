using System.Net.Http;
using AwsDirectConnect.Api;
using AwsDirectConnect.Core;
using AwsDirectConnect.Core.Configuration;
using AwsDirectConnect.Core.Logging;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect;

/// <summary>
/// Generated from AWS's published Smithy model for AWS Direct Connect. 63 operation(s)., Generated from AWS's published Smithy model for AWS Direct Connect. 15 operation(s)., Generated from AWS's published Smithy model for AWS Direct Connect. 5 operation(s).
/// </summary>
public sealed class AwsDirectConnectClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AwsDirectConnectClient(HttpClient httpClient, AwsDirectConnectClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AwsDirectConnectClient/2012-10-25 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2012-10-25"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AWS_DIRECT_CONNECT_LOG"),
            "AwsDirectConnectClient",
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

    public AwsDirectConnectApi AwsDirectConnectApi => field ??= new AwsDirectConnectApi(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);

    public ResiliencyGroupApi ResiliencyGroupApi => field ??= new ResiliencyGroupApi(_rawClient, _server, _auth);
}
