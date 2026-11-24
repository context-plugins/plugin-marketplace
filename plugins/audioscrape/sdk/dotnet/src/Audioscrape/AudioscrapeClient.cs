using System.Net.Http;
using Audioscrape.Api;
using Audioscrape.Core;
using Audioscrape.Core.Configuration;
using Audioscrape.Core.Logging;
using Audioscrape.Core.Models;

namespace Audioscrape;

/// <summary>
/// Operations tagged Account across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Agent rail across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged API Keys across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Charts across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Data Export across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Episodes across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Items across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Knowledge Graph across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Libraries across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Persons across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Podcasts across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Search across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged System across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Workspaces across 2 of this provider's published API definitions: audioscrape-com-openapi.json, audioscrape-com-openapi.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class AudioscrapeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AudioscrapeClient(HttpClient httpClient, AudioscrapeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AudioscrapeClient/2026-05-16 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2026-05-16"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AUDIOSCRAPE_LOG"),
            "AudioscrapeClient",
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
    /// Create and manage API keys for programmatic access
    /// </summary>
    public ApiKeys ApiKeys => field ??= new ApiKeys(_rawClient, _server, _auth);

    /// <summary>
    /// Current-user introspection: plan, limits, usage
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Pay-as-you-go answers for AI agents over HTTP 402: a pay-as-you-go workspace balance topped up by card or Link through the Machine Payments Protocol (Stripe), and x402 (USDC per call) where the 402 offers it. A first top-up opens the workspace and returns its API key and a claim link. Subscribers' keys are served within the plan. Price list: GET /api/agent/v1
    /// </summary>
    public AgentRail AgentRail => field ??= new AgentRail(_rawClient, _server, _auth);

    /// <summary>
    /// Apple Podcasts and Spotify chart rankings
    /// </summary>
    public Charts Charts => field ??= new Charts(_rawClient, _server, _auth);

    /// <summary>
    /// Customer-initiated bulk export of workspace data (audio, transcripts, items, metadata) into a downloadable archive
    /// </summary>
    public DataExport DataExport => field ??= new DataExport(_rawClient, _server, _auth);

    /// <summary>
    /// Convenience alias for podcast-episode items. For multi-format integrations, prefer <c>/api/items</c>.
    /// </summary>
    public Episodes Episodes => field ??= new Episodes(_rawClient, _server, _auth);

    /// <summary>
    /// Universal audio items — podcast episodes, uploads, conference talks, anything with a transcript. The <c>source_type</c> field distinguishes formats.
    /// </summary>
    public Items Items => field ??= new Items(_rawClient, _server, _auth);

    /// <summary>
    /// Named-entity search and trending topics
    /// </summary>
    public KnowledgeGraph KnowledgeGraph => field ??= new KnowledgeGraph(_rawClient, _server, _auth);

    /// <summary>
    /// Published content catalogs — public workspaces and published datasets. The organizational hierarchy: Library → Dataset → Item. Use these endpoints to browse content shared with everyone; for your own tenant, use Workspaces.
    /// </summary>
    public Libraries Libraries => field ??= new Libraries(_rawClient, _server, _auth);

    /// <summary>
    /// Look up speakers and their appearances
    /// </summary>
    public Persons Persons => field ??= new Persons(_rawClient, _server, _auth);

    /// <summary>
    /// Convenience alias for items where <c>source_type = 'podcast_episode'</c>. For multi-format integrations, prefer <c>/api/items</c>.
    /// </summary>
    public Podcasts Podcasts => field ??= new Podcasts(_rawClient, _server, _auth);

    /// <summary>
    /// Hybrid, text, and semantic search across all audio content, regardless of source type
    /// </summary>
    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    /// <summary>
    /// Service health and version
    /// </summary>
    public SystemApi SystemApi => field ??= new SystemApi(_rawClient, _server);

    /// <summary>
    /// The canonical tenant surface: your workspace and its datasets, private included. Members-only — workspaces you don't belong to are 404s here; browse other people's published content via Libraries.
    /// </summary>
    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server, _auth);
}
