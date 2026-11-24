using System.Net.Http;
using AmazonComprehend.Api;
using AmazonComprehend.Core;
using AmazonComprehend.Core.Configuration;
using AmazonComprehend.Core.Logging;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Comprehend. 84 operation(s)., Generated from AWS's published Smithy model for Amazon Comprehend. 10 operation(s).
/// </summary>
public sealed class AmazonComprehendClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonComprehendClient(HttpClient httpClient, AmazonComprehendClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonComprehendClient/2017-11-27 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2017-11-27"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_COMPREHEND_LOG"),
            "AmazonComprehendClient",
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

    public AmazonComprehendApi AmazonComprehendApi => field ??= new AmazonComprehendApi(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);
}
