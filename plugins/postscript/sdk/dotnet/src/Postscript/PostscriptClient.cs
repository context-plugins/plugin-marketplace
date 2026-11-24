using System.Net.Http;
using Postscript.Api;
using Postscript.Core;
using Postscript.Core.Configuration;
using Postscript.Core.Logging;
using Postscript.Core.Models;

namespace Postscript;

/// <summary>
/// The Postscript Partner API (v2) lets partners and Shopify shops manage SMS subscribers, send custom events into Flows, send transactional and conversational messages, read opt-in keywords, configure webhook subscriptions, and run TCPA compliance operations (unsubscribe, redact). Harvested verbatim from the per-operation OpenAPI definitions published on https://developers.postscript.io/reference.
/// </summary>
public sealed class PostscriptClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public PostscriptClient(HttpClient httpClient, PostscriptClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "PostscriptClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("POSTSCRIPT_LOG"),
            "PostscriptClient",
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
    /// TCPA compliance operations — unsubscribe and redact a subscriber.
    /// </summary>
    public Compliance Compliance => field ??= new Compliance(_rawClient, _server, _auth);

    /// <summary>
    /// Send custom events for use in Postscript Flows and triggers.
    /// </summary>
    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    /// <summary>
    /// Verify the identity and scope of the calling API token.
    /// </summary>
    public Identity Identity => field ??= new Identity(_rawClient, _server, _auth);

    /// <summary>
    /// Read the opt-in keywords configured for a shop.
    /// </summary>
    public Keywords Keywords => field ??= new Keywords(_rawClient, _server, _auth);

    /// <summary>
    /// Send messages and read message requests and sent messages.
    /// </summary>
    public Messages Messages => field ??= new Messages(_rawClient, _server, _auth);

    /// <summary>
    /// Read and update SMS subscribers for a shop.
    /// </summary>
    public Subscribers Subscribers => field ??= new Subscribers(_rawClient, _server, _auth);

    /// <summary>
    /// Create, read, update and delete webhook subscriptions; fetch the signing token, sample payloads and test deliveries.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
