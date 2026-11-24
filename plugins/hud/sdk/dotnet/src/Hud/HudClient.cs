using System.Net.Http;
using Hud.Api;
using Hud.Core;
using Hud.Core.Configuration;
using Hud.Core.Logging;
using Hud.Core.Models;

namespace Hud;

public sealed class HudClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public HudClient(HttpClient httpClient, HudClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "HudClient/2.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("HUD_LOG"),
            "HudClient",
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
    }

    public Builds Builds => field ??= new Builds(_rawClient, _server);

    public Checks Checks => field ??= new Checks(_rawClient, _server);

    public Completions Completions => field ??= new Completions(_rawClient, _server);

    public Data Data => field ??= new Data(_rawClient, _server);

    public Imports Imports => field ??= new Imports(_rawClient, _server);

    public Inference Inference => field ??= new Inference(_rawClient, _server);

    public Instances Instances => field ??= new Instances(_rawClient, _server);

    public Jobs Jobs => field ??= new Jobs(_rawClient, _server);

    public LimitsApi LimitsApi => field ??= new LimitsApi(_rawClient, _server);

    public ModelsApi ModelsApi => field ??= new ModelsApi(_rawClient, _server);

    public OAuth OAuth => field ??= new OAuth(_rawClient, _server);

    public RegistryApi RegistryApi => field ??= new RegistryApi(_rawClient, _server);

    public Storage Storage => field ??= new Storage(_rawClient, _server);

    public Tasks Tasks => field ??= new Tasks(_rawClient, _server);

    public Teams Teams => field ??= new Teams(_rawClient, _server);

    public Traces Traces => field ??= new Traces(_rawClient, _server);

    public Usage Usage => field ??= new Usage(_rawClient, _server);

    public ByokCredentials ByokCredentials => field ??= new ByokCredentials(_rawClient, _server);

    public EnvVars EnvVars => field ??= new EnvVars(_rawClient, _server);

    public MemberSecrets MemberSecrets => field ??= new MemberSecrets(_rawClient, _server);

    public Qa Qa => field ??= new Qa(_rawClient, _server);

    public QaAgents QaAgents => field ??= new QaAgents(_rawClient, _server);

    public Rollouts Rollouts => field ??= new Rollouts(_rawClient, _server);

    public Tasksets Tasksets => field ??= new Tasksets(_rawClient, _server);
}
