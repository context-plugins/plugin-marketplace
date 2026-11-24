using System.Net.Http;
using BetterStack.Api;
using BetterStack.Core;
using BetterStack.Core.Configuration;
using BetterStack.Core.Logging;
using BetterStack.Core.Models;

namespace BetterStack;

/// <summary>
/// Programmatic access to Better Stack's uptime monitoring, heartbeat monitoring,
/// incident management, status pages, escalation policies, and on-call surfaces.
/// Responses follow the JSON:API specification.
/// <para>
/// This document is a best-effort reconstruction from Better Stack's public
/// documentation and is not exhaustive. Refer to
/// https://betterstack.com/docs/uptime/api/ for authoritative reference.
/// </para>
/// </summary>
public sealed class BetterStackClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BetterStackClient(HttpClient httpClient, BetterStackClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BetterStackClient/2.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BETTER_STACK_LOG"),
            "BetterStackClient",
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

    public Heartbeats Heartbeats => field ??= new Heartbeats(_rawClient, _server, _auth);

    public Incidents Incidents => field ??= new Incidents(_rawClient, _server, _auth);

    public Monitors Monitors => field ??= new Monitors(_rawClient, _server, _auth);

    public StatusPages StatusPages => field ??= new StatusPages(_rawClient, _server, _auth);
}
