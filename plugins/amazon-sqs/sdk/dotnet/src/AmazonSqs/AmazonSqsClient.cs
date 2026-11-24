using System.Net.Http;
using AmazonSqs.Api;
using AmazonSqs.Core;
using AmazonSqs.Core.Configuration;
using AmazonSqs.Core.Logging;
using AmazonSqs.Core.Models;

namespace AmazonSqs;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Simple Queue Service. 10 operation(s)., Generated from AWS's published Smithy model for Amazon Simple Queue Service. 2 operation(s)., Generated from AWS's published Smithy model for Amazon Simple Queue Service. 10 operation(s)., Generated from AWS's published Smithy model for Amazon Simple Queue Service. 3 operation(s).
/// </summary>
public sealed class AmazonSqsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonSqsClient(HttpClient httpClient, AmazonSqsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonSqsClient/2012-11-05 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2012-11-05"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_SQS_LOG"),
            "AmazonSqsClient",
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

    public Messages Messages => field ??= new Messages(_rawClient, _server, _auth);

    public Permissions Permissions => field ??= new Permissions(_rawClient, _server, _auth);

    public Queues Queues => field ??= new Queues(_rawClient, _server, _auth);

    public Tags Tags => field ??= new Tags(_rawClient, _server, _auth);
}
