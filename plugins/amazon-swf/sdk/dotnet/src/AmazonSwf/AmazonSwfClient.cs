using System.Net.Http;
using AmazonSwf.Api;
using AmazonSwf.Core;
using AmazonSwf.Core.Configuration;
using AmazonSwf.Core.Logging;
using AmazonSwf.Core.Models;

namespace AmazonSwf;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Simple Workflow Service. 37 operation(s)., Generated from AWS's published Smithy model for Amazon Simple Workflow Service. 22 operation(s).
/// </summary>
public sealed class AmazonSwfClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonSwfClient(HttpClient httpClient, AmazonSwfClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonSwfClient/2012-01-25 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2012-01-25"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_SWF_LOG"),
            "AmazonSwfClient",
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

    public AmazonSimpleWorkflowService AmazonSimpleWorkflowService =>
        field ??= new AmazonSimpleWorkflowService(_rawClient, _server, _auth);

    public Operations Operations => field ??= new Operations(_rawClient, _server, _auth);
}
