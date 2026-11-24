using System.Net.Http;
using AgentReady.Api;
using AgentReady.Core;
using AgentReady.Core.Configuration;
using AgentReady.Core.Logging;
using AgentReady.Core.Models;

namespace AgentReady;

/// <summary>
/// Programmatic access to agent-ready.dev scans.
/// </summary>
public sealed class AgentReadyClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public AgentReadyClient(HttpClient httpClient, AgentReadyClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "AgentReadyClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("AGENT_READY_LOG"),
            "AgentReadyClient",
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

    public Mcp Mcp => field ??= new Mcp(_rawClient, _server);

    public NlWeb NlWeb => field ??= new NlWeb(_rawClient, _server);

    public Scans Scans => field ??= new Scans(_rawClient, _server, _auth);
}
