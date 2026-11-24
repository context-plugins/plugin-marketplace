using System.Net.Http;
using Fellow.Api;
using Fellow.Core;
using Fellow.Core.Configuration;
using Fellow.Core.Logging;
using Fellow.Core.Models;

namespace Fellow;

/// <summary>
/// Create custom integrations and workflows with Fellow's meeting data
/// </summary>
public sealed class FellowClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FellowClient(HttpClient httpClient, FellowClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FellowClient/1.0.3 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.3"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FELLOW_LOG"),
            "FellowClient",
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
    /// Access and manage action items from meetings. Retrieve, list, complete, or archive action items with optional filters and pagination.
    /// </summary>
    public ActionItems ActionItems => field ??= new ActionItems(_rawClient, _server, _auth);

    /// <summary>
    /// Access and manage meeting notes and their agendas. Retrieve individual notes, list notes with filters and pagination, delete notes (privileged access required), or edit agenda content as Fellow Markdown by replacing the whole agenda, appending or prepending to it, or finding and replacing a single occurrence of text.
    /// </summary>
    public Notes Notes => field ??= new Notes(_rawClient, _server, _auth);

    /// <summary>
    /// Access and manage meeting recordings. Retrieve individual recordings, list recordings with filters and pagination, or delete recordings (privileged access required).
    /// </summary>
    public Recordings Recordings => field ??= new Recordings(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve information about the currently authenticated user and their workspace.
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Create and manage webhook endpoints to receive real-time notifications when events occur in your Fellow workspace.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
