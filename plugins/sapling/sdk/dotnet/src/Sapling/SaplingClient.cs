using System.Net.Http;
using Sapling.Api;
using Sapling.Core;
using Sapling.Core.Configuration;
using Sapling.Core.Logging;
using Sapling.Core.Models;

namespace Sapling;

/// <summary>
/// Operations tagged account across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged analysis across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged detection across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged files across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged generation across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged proofreading across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged service across 2 of this provider's published API definitions: api-sapling-openapi.json, sapling-openapi.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class SaplingClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SaplingClient(HttpClient httpClient, SaplingClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SaplingClient/1.4.3 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.4.3"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SAPLING_LOG"),
            "SaplingClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// API key status, usage and quota reporting.
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Tone, sentiment, readability, quality, SEO, classification, extraction, style-guide compliance, and inclusive language.
    /// </summary>
    public Analysis Analysis => field ??= new Analysis(_rawClient, _server, _auth);

    /// <summary>
    /// AI-content, language, PII, named-entity, and unsafe-content detection.
    /// </summary>
    public Detection Detection => field ??= new Detection(_rawClient, _server, _auth);

    /// <summary>
    /// PDF/Word text extraction and text chunking.
    /// </summary>
    public Files Files => field ??= new Files(_rawClient, _server, _auth);

    /// <summary>
    /// Health and version probes (no API key).
    /// </summary>
    public Service Service => field ??= new Service(_rawClient, _server);

    /// <summary>
    /// Text rewriting, summarization, translation, and completion.
    /// </summary>
    public Generation Generation => field ??= new Generation(_rawClient, _server, _auth);

    /// <summary>
    /// Grammar and spelling correction.
    /// </summary>
    public Proofreading Proofreading => field ??= new Proofreading(_rawClient, _server, _auth);
}
