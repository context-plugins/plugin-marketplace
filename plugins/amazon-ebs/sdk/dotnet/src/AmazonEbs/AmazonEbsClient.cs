using System.Net.Http;
using AmazonEbs.Api;
using AmazonEbs.Core;
using AmazonEbs.Core.Configuration;
using AmazonEbs.Core.Logging;
using AmazonEbs.Core.Models;

namespace AmazonEbs;

/// <summary>
/// Generated from AWS's published Smithy model for Amazon Elastic Block Store. 3 operation(s).
/// </summary>
public sealed class AmazonEbsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AmazonEbsClient(HttpClient httpClient, AmazonEbsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AmazonEbsClient/2019-11-02 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2019-11-02"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AMAZON_EBS_LOG"),
            "AmazonEbsClient",
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

    public AmazonEbsAmazonElasticBlockStoreEbsApi AmazonEbsAmazonElasticBlockStoreEbsApi =>
        field ??= new AmazonEbsAmazonElasticBlockStoreEbsApi(_rawClient, _server, _auth);

    public Blocks Blocks => field ??= new Blocks(_rawClient, _server, _auth);
}
