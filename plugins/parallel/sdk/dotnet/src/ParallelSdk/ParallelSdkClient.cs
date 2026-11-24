using System.Net.Http;
using ParallelSdk.Api;
using ParallelSdk.Core;
using ParallelSdk.Core.Configuration;
using ParallelSdk.Core.Logging;
using ParallelSdk.Core.Models;

namespace ParallelSdk;

/// <summary>
/// Operations tagged Chat API (Beta) across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-chat-api-beta-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Extract across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-extract-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged FindAll across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-findall-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Memory across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-memory-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Monitor across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-monitor-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Responses API across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-responses-api-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Search across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-search-api-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Tasks across 2 of this provider's published API definitions: parallel-openapi-original.json, parallel-tasks-api-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class ParallelSdkClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ParallelSdkClient(HttpClient httpClient, ParallelSdkClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ParallelSdkClient/0.1.2 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "0.1.2"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("PARALLEL_SDK_LOG"),
            "ParallelSdkClient",
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
    /// The Chat API provides a programmatic chat-style text generation interface. It accepts a sequence of messages and returns model responses. Intended for assistant-like interactions and evaluation. Streaming responses are supported.
    /// </summary>
    public ChatApiBeta ChatApiBeta => field ??= new ChatApiBeta(_rawClient, _server, _auth);

    /// <summary>
    /// Extract returns excerpts or full content from one or more URLs. Inputs are a list of URLs and an optional search objective and keyword queries. The returned excerpts or full content is formatted as markdown and suitable for LLM consumption.
    /// - Result: excerpts or full content from the URL formatted as markdown
    /// </summary>
    public Extract Extract => field ??= new Extract(_rawClient, _server, _auth);

    /// <summary>
    /// The FindAll API discovers and evaluates entities that match complex criteria from natural language objectives. Submit a high-level goal and the service automatically generates structured match conditions, discovers relevant candidates, and evaluates each against the criteria. Returns comprehensive results with detailed reasoning, citations, and confidence scores for each match decision. Streaming events and webhooks are supported.
    /// </summary>
    public FindAll FindAll => field ??= new FindAll(_rawClient, _server, _auth);

    /// <summary>
    /// The Memory API retrieves and manages memories created by Tasks, Monitors, and FindAll runs. Memories can be personal or isolated with a <c>memory_scope_key</c>.
    /// </summary>
    public MemoryApi MemoryApi => field ??= new MemoryApi(_rawClient, _server, _auth);

    /// <summary>
    /// The Monitor API watches the web for material changes on a fixed frequency. Each monitor runs once on creation and then on its configured schedule, emitting events when meaningful changes are detected.
    /// - <c>event_stream</c> monitors track a search query and emit an event for each new material change.
    /// - <c>snapshot</c> monitors track a specific task run's output and emit an event when the output changes.
    /// <para>
    /// Results can be polled via the events endpoint or delivered via webhooks.
    /// </para>
    /// </summary>
    public MonitorApi MonitorApi => field ??= new MonitorApi(_rawClient, _server, _auth);

    /// <summary>
    /// An OpenAI-Responses-compatible interface for answers grounded in live web research, with URL citations.
    /// </summary>
    public ResponsesApi ResponsesApi => field ??= new ResponsesApi(_rawClient, _server, _auth);

    /// <summary>
    /// Search returns ranked URLs with extended excerpts suitable for LLM consumption. Inputs are a natural-language objective and optional keyword queries. Source policies allow including or excluding specific domains and have configurable output sizes. The returned extended snippets contain dense, relevant information from relevant pages.
    /// - Result: ranked list with URL, title, and long text excerpts
    /// </summary>
    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    /// <summary>
    /// The Task API executes web research and extraction tasks.
    /// </summary>
    public Tasks Tasks => field ??= new Tasks(_rawClient, _server, _auth);
}
