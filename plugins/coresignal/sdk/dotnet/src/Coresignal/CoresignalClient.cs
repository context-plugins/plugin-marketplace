using System.Net.Http;
using Coresignal.Api;
using Coresignal.Core;
using Coresignal.Core.Configuration;
using Coresignal.Core.Logging;
using Coresignal.Core.Models;

namespace Coresignal;

/// <summary>
/// The Multi-source Company API returns enriched company records combining public web data sources, deduplicated and standardized with 500+ fields. Search uses Elasticsearch DSL queries; Collect returns full records by ID. Authentication uses the apikey HTTP header.
/// </summary>
public sealed class CoresignalClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CoresignalClient(HttpClient httpClient, CoresignalClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CoresignalClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CORESIGNAL_LOG"),
            "CoresignalClient",
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

    /// <summary>
    /// Retrieve full company records by ID.
    /// </summary>
    public Collect Collect => field ??= new Collect(_rawClient, _server, _auth);

    /// <summary>
    /// Search and filter company records.
    /// </summary>
    public Search Search => field ??= new Search(_rawClient, _server, _auth);
}
