using System.Net.Http;
using Perigon.Api;
using Perigon.Core;
using Perigon.Core.Configuration;
using Perigon.Core.Logging;
using Perigon.Core.Models;

namespace Perigon;

/// <summary>
/// The Perigon API provides access to comprehensive news and web content data. To use the API, simply sign up for a Perigon Business Solutions account to obtain your API key. Your available features may vary based on your plan. See the Authentication section for details on how to use your API key.
/// </summary>
public sealed class PerigonClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public PerigonClient(HttpClient httpClient, PerigonClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "PerigonClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("PERIGON_LOG"),
            "PerigonClient",
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
    /// These endpoints enable semantic search beyond traditional keyword matching, content summarization, and advanced information retrieval across articles
    /// </summary>
    public AiAdvancedSearch AiAdvancedSearch => field ??= new AiAdvancedSearch(_rawClient, _server, _auth);

    /// <summary>
    /// Manage contact points used to deliver monitor notifications. Contact points define where and how monitor events are delivered (e.g. webhooks). Only WEBHOOK contact points can be created and managed via the API.
    /// </summary>
    public ContactPoints ContactPoints => field ??= new ContactPoints(_rawClient, _server, _auth);

    /// <summary>
    /// Manage AI Monitors — configurable monitors that continuously scan news content for topics, entities, and events of interest. Monitors run asynchronously and emit structured events and AI-generated summaries that can be delivered to contact points.
    /// </summary>
    public Monitors Monitors => field ??= new Monitors(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for accessing news articles and stories
    /// </summary>
    public NewsStories NewsStories => field ??= new NewsStories(_rawClient, _server, _auth);

    /// <summary>
    /// Manage custom source groups for organizing and filtering news sources. Source groups allow grouping domains together for use in search queries and monitors.
    /// </summary>
    public SourceGroups SourceGroups => field ??= new SourceGroups(_rawClient, _server, _auth);

    /// <summary>
    /// Additional endpoints for metadata and related information
    /// </summary>
    public SupplementalEndpoints SupplementalEndpoints =>
        field ??= new SupplementalEndpoints(_rawClient, _server, _auth);

    public Utilities Utilities => field ??= new Utilities(_rawClient, _server, _auth);

    /// <summary>
    /// Manage watchlists of people and companies for use with monitors. Watchlists can contain up to 100 combined entities and are used to track mentions across news content.
    /// </summary>
    public Watchlists Watchlists => field ??= new Watchlists(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for searching ingested Wikipedia content. Provides keyword and filtered search capabilities along with vector-based semantic search across Wikipedia pages.
    /// </summary>
    public Wikipedia Wikipedia => field ??= new Wikipedia(_rawClient, _server, _auth);
}
