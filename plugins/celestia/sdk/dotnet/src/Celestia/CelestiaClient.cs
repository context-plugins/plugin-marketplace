using System.Net.Http;
using Celestia.Api;
using Celestia.Core;
using Celestia.Core.Configuration;
using Celestia.Core.Logging;
using Celestia.Core.Models;

namespace Celestia;

/// <summary>
/// JSON-RPC methods in the <c>blob</c> module of celestia-node. Used to submit, retrieve,
/// and prove blobs of arbitrary data published to the Celestia data availability layer
/// against one or more namespaces. Blobs are the canonical payload unit for rollups
/// and other applications using Celestia for DA., HTTP endpoints for the Celestia marketing website. This is not the Celestia blockchain Node API. Use https://docs.celestia.org/build/rpc/node-api/ for the node JSON-RPC API, authentication, and OpenRPC schemas. Contact and newsletter submissions require user consent; newsletter subscriptions also require browser reCAPTCHA., HTTP endpoints for the Celestia marketing website. This is not the Celestia blockchain Node API. Use https://docs.celestia.org/build/rpc/node-api/ for the node JSON-RPC API, authentication, and OpenRPC schemas. Contact and newsletter submissions require user consent; newsletter subscriptions also require browser reCAPTCHA., HTTP endpoints for the Celestia marketing website. This is not the Celestia blockchain Node API. Use https://docs.celestia.org/build/rpc/node-api/ for the node JSON-RPC API, authentication, and OpenRPC schemas. Contact and newsletter submissions require user consent; newsletter subscriptions also require browser reCAPTCHA.
/// </summary>
public sealed class CelestiaClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CelestiaClient(HttpClient httpClient, CelestiaClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CelestiaClient/0.30.x CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.30.x"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CELESTIA_LOG"),
            "CelestiaClient",
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
    /// Submit, retrieve, and prove blobs against Celestia namespaces.
    /// </summary>
    public Blob Blob => field ??= new Blob(_rawClient, _server, _auth);

    public Contact Contact => field ??= new Contact(_rawClient, _server);

    public HealthApi HealthApi => field ??= new HealthApi(_rawClient, _server);

    public Subscribe Subscribe => field ??= new Subscribe(_rawClient, _server);
}
