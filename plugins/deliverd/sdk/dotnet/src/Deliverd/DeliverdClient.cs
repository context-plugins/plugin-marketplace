using System.Net.Http;
using Deliverd.Api;
using Deliverd.Core;
using Deliverd.Core.Configuration;
using Deliverd.Core.Logging;
using Deliverd.Core.Models;

namespace Deliverd;

/// <summary>
/// Operations tagged Actions across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Agents across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Ai Systems across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Analytics across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Approvals across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Audiences across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Audit Events across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Collections across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Comments across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Decision Sessions across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Drafts across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Evidence across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Flows across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Gates across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Governance across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Knowledge across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Playbooks across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Policies across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Reports across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Reviews across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Risk Indicators across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Schedules across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Screen across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Tasks across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Templates across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Uploads across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Webhook Endpoints across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Workspaces across 2 of this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class DeliverdClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public DeliverdClient(HttpClient httpClient, DeliverdClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DeliverdClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DELIVERD_LOG"),
            "DeliverdClient",
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

    public Actions Actions => field ??= new Actions(_rawClient, _server, _auth);

    public Agents Agents => field ??= new Agents(_rawClient, _server, _auth);

    public AiSystems AiSystems => field ??= new AiSystems(_rawClient, _server, _auth);

    public Analytics Analytics => field ??= new Analytics(_rawClient, _server, _auth);

    public Approvals Approvals => field ??= new Approvals(_rawClient, _server, _auth);

    public Audiences Audiences => field ??= new Audiences(_rawClient, _server, _auth);

    public AuditEvents AuditEvents => field ??= new AuditEvents(_rawClient, _server, _auth);

    public Collections Collections => field ??= new Collections(_rawClient, _server, _auth);

    public Comments Comments => field ??= new Comments(_rawClient, _server, _auth);

    public DecisionSessions DecisionSessions => field ??= new DecisionSessions(_rawClient, _server, _auth);

    public Drafts Drafts => field ??= new Drafts(_rawClient, _server);

    public Evidence Evidence => field ??= new Evidence(_rawClient, _server);

    public Flows Flows => field ??= new Flows(_rawClient, _server, _auth);

    public Gates Gates => field ??= new Gates(_rawClient, _server, _auth);

    public GovernanceApi GovernanceApi => field ??= new GovernanceApi(_rawClient, _server, _auth);

    public Knowledge Knowledge => field ??= new Knowledge(_rawClient, _server, _auth);

    public Playbooks Playbooks => field ??= new Playbooks(_rawClient, _server, _auth);

    public Policies Policies => field ??= new Policies(_rawClient, _server, _auth);

    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    public Reviews Reviews => field ??= new Reviews(_rawClient, _server, _auth);

    public RiskIndicators RiskIndicators => field ??= new RiskIndicators(_rawClient, _server, _auth);

    public Schedules Schedules => field ??= new Schedules(_rawClient, _server, _auth);

    public Screen Screen => field ??= new Screen(_rawClient, _server, _auth);

    public Tasks Tasks => field ??= new Tasks(_rawClient, _server, _auth);

    public Templates Templates => field ??= new Templates(_rawClient, _server, _auth);

    public Uploads Uploads => field ??= new Uploads(_rawClient, _server, _auth);

    public WebhookEndpoints WebhookEndpoints => field ??= new WebhookEndpoints(_rawClient, _server, _auth);

    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server, _auth);
}
