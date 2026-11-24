using System.Net.Http;
using Givebutter.Api;
using Givebutter.Core;
using Givebutter.Core.Configuration;
using Givebutter.Core.Logging;
using Givebutter.Core.Models;

namespace Givebutter;

/// <summary>
/// Givebutter Public API - Access and manage your campaigns, contacts, transactions, and more.
/// </summary>
public sealed class GivebutterClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GivebutterClient(HttpClient httpClient, GivebutterClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GivebutterClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GIVEBUTTER_LOG"),
            "GivebutterClient",
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

    public CampaignDiscountCodes CampaignDiscountCodes =>
        field ??= new CampaignDiscountCodes(_rawClient, _server, _auth);

    public CampaignMembers CampaignMembers => field ??= new CampaignMembers(_rawClient, _server, _auth);

    public CampaignTeams CampaignTeams => field ??= new CampaignTeams(_rawClient, _server, _auth);

    public CampaignTickets CampaignTickets => field ??= new CampaignTickets(_rawClient, _server, _auth);

    public Campaigns Campaigns => field ??= new Campaigns(_rawClient, _server, _auth);

    public ContactActivities ContactActivities => field ??= new ContactActivities(_rawClient, _server, _auth);

    public ContactTags ContactTags => field ??= new ContactTags(_rawClient, _server, _auth);

    public Contacts Contacts => field ??= new Contacts(_rawClient, _server, _auth);

    public Funds Funds => field ??= new Funds(_rawClient, _server, _auth);

    public HouseholdContacts HouseholdContacts => field ??= new HouseholdContacts(_rawClient, _server, _auth);

    public Households Households => field ??= new Households(_rawClient, _server, _auth);

    public Messages Messages => field ??= new Messages(_rawClient, _server, _auth);

    public Payouts Payouts => field ??= new Payouts(_rawClient, _server, _auth);

    public Pledges Pledges => field ??= new Pledges(_rawClient, _server, _auth);

    public RecurringPlans RecurringPlans => field ??= new RecurringPlans(_rawClient, _server, _auth);

    public SsoAccounts SsoAccounts => field ??= new SsoAccounts(_rawClient, _server, _auth);

    public SsoCampaigns SsoCampaigns => field ??= new SsoCampaigns(_rawClient, _server, _auth);

    public Tickets Tickets => field ??= new Tickets(_rawClient, _server, _auth);

    public Transactions Transactions => field ??= new Transactions(_rawClient, _server, _auth);

    public WebhookActivities WebhookActivities => field ??= new WebhookActivities(_rawClient, _server, _auth);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
