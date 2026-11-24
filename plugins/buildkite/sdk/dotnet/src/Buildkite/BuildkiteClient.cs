using System.Net.Http;
using Buildkite.Api;
using Buildkite.Core;
using Buildkite.Core.Configuration;
using Buildkite.Core.Logging;
using Buildkite.Core.Models;

namespace Buildkite;

/// <summary>
/// Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Public subset of the Buildkite Agent API consumed by the open-source agent (Go) to register,
/// accept, and finish jobs. Most endpoints are reserved for internal use; only the documented
/// public endpoints are stable. Authenticated with an Agent Token (<c>Authorization: Token </c>)., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Public subset of the Buildkite Agent API consumed by the open-source agent (Go) to register,
/// accept, and finish jobs. Most endpoints are reserved for internal use; only the documented
/// public endpoints are stable. Authenticated with an Agent Token (<c>Authorization: Token </c>)., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token., Programmatic control of Buildkite Pipelines covering organizations, pipelines,
/// builds, jobs, artifacts, annotations, agents, clusters, queues, and access tokens.
/// Authenticated with a Bearer API access token.
/// </summary>
public sealed class BuildkiteClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BuildkiteClient(HttpClient httpClient, BuildkiteClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BuildkiteClient/v2 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v2"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BUILDKITE_LOG"),
            "BuildkiteClient",
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

    public AccessToken AccessToken => field ??= new AccessToken(_rawClient, _server, _auth);

    public AgentTokens AgentTokens => field ??= new AgentTokens(_rawClient, _server, _auth);

    public AgentsApi AgentsApi => field ??= new AgentsApi(_rawClient, _server, _auth);

    public Annotations Annotations => field ??= new Annotations(_rawClient, _server, _auth);

    public Artifacts Artifacts => field ??= new Artifacts(_rawClient, _server, _auth);

    public Builds Builds => field ??= new Builds(_rawClient, _server, _auth);

    public Clusters Clusters => field ??= new Clusters(_rawClient, _server, _auth);

    public Emojis Emojis => field ??= new Emojis(_rawClient, _server, _auth);

    public JobsApi JobsApi => field ??= new JobsApi(_rawClient, _server, _auth);

    public Meta Meta => field ??= new Meta(_rawClient, _server, _auth);

    public Metrics Metrics => field ??= new Metrics(_rawClient, _server, _auth);

    public Organizations Organizations => field ??= new Organizations(_rawClient, _server, _auth);

    public PipelineTemplates PipelineTemplates => field ??= new PipelineTemplates(_rawClient, _server, _auth);

    public Pipelines Pipelines => field ??= new Pipelines(_rawClient, _server, _auth);

    public Queues Queues => field ??= new Queues(_rawClient, _server, _auth);

    public Rules Rules => field ??= new Rules(_rawClient, _server, _auth);

    public Stacks Stacks => field ??= new Stacks(_rawClient, _server, _auth);

    public Teams Teams => field ??= new Teams(_rawClient, _server, _auth);

    public UserApi UserApi => field ??= new UserApi(_rawClient, _server, _auth);
}
