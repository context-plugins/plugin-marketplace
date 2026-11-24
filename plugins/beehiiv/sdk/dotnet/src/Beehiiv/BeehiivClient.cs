using System.Net.Http;
using Beehiiv.Api;
using Beehiiv.Core;
using Beehiiv.Core.Configuration;
using Beehiiv.Core.Logging;
using Beehiiv.Core.Models;

namespace Beehiiv;

/// <summary>
/// Operations tagged Webhooks across 2 of this provider's published API definitions: beehiiv-openapi.yml, beehiiv-webhook-events-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class BeehiivClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public BeehiivClient(HttpClient httpClient, BeehiivClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BeehiivClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BEEHIIV_LOG"),
            "BeehiivClient",
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

    public AdNetworkOffers AdNetworkOffers => field ??= new AdNetworkOffers(_rawClient, _server);

    public AdNetworkReports AdNetworkReports => field ??= new AdNetworkReports(_rawClient, _server);

    public AdvertisementOpportunities AdvertisementOpportunities =>
        field ??= new AdvertisementOpportunities(_rawClient, _server);

    public Authorizations Authorizations => field ??= new Authorizations(_rawClient, _server);

    public Authors Authors => field ??= new Authors(_rawClient, _server);

    public AutomationJourneys AutomationJourneys => field ??= new AutomationJourneys(_rawClient, _server);

    public Automations Automations => field ??= new Automations(_rawClient, _server);

    public BulkSubscriptionUpdates BulkSubscriptionUpdates =>
        field ??= new BulkSubscriptionUpdates(_rawClient, _server);

    public BulkSubscriptions BulkSubscriptions => field ??= new BulkSubscriptions(_rawClient, _server);

    public ComplimentaryAccessApi ComplimentaryAccessApi => field ??= new ComplimentaryAccessApi(_rawClient, _server);

    public ConditionSets ConditionSets => field ??= new ConditionSets(_rawClient, _server);

    public CustomFields CustomFields => field ??= new CustomFields(_rawClient, _server);

    public DataDeletion DataDeletion => field ??= new DataDeletion(_rawClient, _server);

    public Engagements Engagements => field ??= new Engagements(_rawClient, _server);

    public NewsletterListSubscriptions NewsletterListSubscriptions =>
        field ??= new NewsletterListSubscriptions(_rawClient, _server);

    public NewsletterLists NewsletterLists => field ??= new NewsletterLists(_rawClient, _server);

    public Podcasts Podcasts => field ??= new Podcasts(_rawClient, _server);

    public Polls Polls => field ??= new Polls(_rawClient, _server);

    public PostTemplates PostTemplates => field ??= new PostTemplates(_rawClient, _server);

    public Posts Posts => field ??= new Posts(_rawClient, _server);

    public Publications Publications => field ??= new Publications(_rawClient, _server);

    public ReferralProgram ReferralProgram => field ??= new ReferralProgram(_rawClient, _server);

    public Segments Segments => field ??= new Segments(_rawClient, _server);

    public SubscriptionTags SubscriptionTags => field ??= new SubscriptionTags(_rawClient, _server);

    public Subscriptions Subscriptions => field ??= new Subscriptions(_rawClient, _server);

    public Tiers Tiers => field ??= new Tiers(_rawClient, _server);

    public Tokens Tokens => field ??= new Tokens(_rawClient, _server);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server);

    public Workspaces Workspaces => field ??= new Workspaces(_rawClient, _server);

    public OauthUsers OauthUsers => field ??= new OauthUsers(_rawClient, _server);
}
