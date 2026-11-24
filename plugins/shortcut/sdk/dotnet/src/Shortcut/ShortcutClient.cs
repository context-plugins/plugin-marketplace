using System.Net.Http;
using Shortcut.Api;
using Shortcut.Core;
using Shortcut.Core.Configuration;
using Shortcut.Core.Logging;
using Shortcut.Core.Models;

namespace Shortcut;

/// <summary>
/// Shortcut API
/// </summary>
public sealed class ShortcutClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ShortcutClient(HttpClient httpClient, ShortcutClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ShortcutClient/3.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "3.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SHORTCUT_LOG"),
            "ShortcutClient",
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

    public Categories Categories => field ??= new Categories(_rawClient, _server, _auth);

    public CustomFields CustomFields => field ??= new CustomFields(_rawClient, _server, _auth);

    public Documents Documents => field ??= new Documents(_rawClient, _server, _auth);

    public EntityTemplates EntityTemplates => field ??= new EntityTemplates(_rawClient, _server, _auth);

    public EpicWorkflowApi EpicWorkflowApi => field ??= new EpicWorkflowApi(_rawClient, _server, _auth);

    public Epics Epics => field ??= new Epics(_rawClient, _server, _auth);

    public ExternalLink ExternalLink => field ??= new ExternalLink(_rawClient, _server, _auth);

    public Files Files => field ??= new Files(_rawClient, _server, _auth);

    public Groups Groups => field ??= new Groups(_rawClient, _server, _auth);

    public HealthApi HealthApi => field ??= new HealthApi(_rawClient, _server, _auth);

    public Integrations Integrations => field ??= new Integrations(_rawClient, _server, _auth);

    public Iterations Iterations => field ??= new Iterations(_rawClient, _server, _auth);

    public KeyResults KeyResults => field ??= new KeyResults(_rawClient, _server, _auth);

    public Labels Labels => field ??= new Labels(_rawClient, _server, _auth);

    public LinkedFiles LinkedFiles => field ??= new LinkedFiles(_rawClient, _server, _auth);

    public MemberApi MemberApi => field ??= new MemberApi(_rawClient, _server, _auth);

    public Members Members => field ??= new Members(_rawClient, _server, _auth);

    public Milestones Milestones => field ??= new Milestones(_rawClient, _server, _auth);

    public Objectives Objectives => field ??= new Objectives(_rawClient, _server, _auth);

    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    public Repositories Repositories => field ??= new Repositories(_rawClient, _server, _auth);

    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    public Stories Stories => field ??= new Stories(_rawClient, _server, _auth);

    public StoryLinks StoryLinks => field ??= new StoryLinks(_rawClient, _server, _auth);

    public Workflows Workflows => field ??= new Workflows(_rawClient, _server, _auth);
}
