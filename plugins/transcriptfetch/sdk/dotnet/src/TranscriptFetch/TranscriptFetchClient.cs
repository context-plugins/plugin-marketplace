using System.Net.Http;
using TranscriptFetch.Api;
using TranscriptFetch.Core;
using TranscriptFetch.Core.Configuration;
using TranscriptFetch.Core.Logging;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch;

/// <summary>
/// Operations tagged System across 2 of this provider's published API definitions: transcriptfetch-api-v1-openapi.json, transcriptfetch-api-v2-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged Transcripts across 2 of this provider's published API definitions: transcriptfetch-api-v1-openapi.json, transcriptfetch-api-v2-openapi.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class TranscriptFetchClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public TranscriptFetchClient(HttpClient httpClient, TranscriptFetchClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "TranscriptFetchClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("TRANSCRIPT_FETCH_LOG"),
            "TranscriptFetchClient",
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
    /// Service health and metadata
    /// </summary>
    public SystemApi SystemApi => field ??= new SystemApi(_rawClient, _server, _auth);

    /// <summary>
    /// Transcript and video-list endpoints
    /// </summary>
    public Transcripts Transcripts => field ??= new Transcripts(_rawClient, _server, _auth);
}
