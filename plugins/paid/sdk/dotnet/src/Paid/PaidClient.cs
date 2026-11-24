using System.Net.Http;
using Paid.Api;
using Paid.Core;
using Paid.Core.Configuration;
using Paid.Core.Logging;
using Paid.Core.Models;

namespace Paid;

/// <summary>
/// Operations tagged contacts across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the servers of the definition it was published in., Operations tagged customers across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the servers of the definition it was published in., Operations tagged orders across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the servers of the definition it was published in., Operations tagged plans across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the servers of the definition it was published in., Operations tagged products across 2 of this provider's published API definitions: paid-v1.json, paid-v2.json. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class PaidClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public PaidClient(HttpClient httpClient, PaidClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "PaidClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("PAID_LOG"),
            "PaidClient",
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

    public Agents Agents => field ??= new Agents(_rawClient, _server);

    public Checkouts Checkouts => field ??= new Checkouts(_rawClient, _server);

    public Contacts Contacts => field ??= new Contacts(_rawClient, _server);

    public Costs Costs => field ??= new Costs(_rawClient, _server);

    public Credits Credits => field ??= new Credits(_rawClient, _server);

    public CustomerGroups CustomerGroups => field ??= new CustomerGroups(_rawClient, _server);

    public Customers Customers => field ??= new Customers(_rawClient, _server);

    public Invoices Invoices => field ??= new Invoices(_rawClient, _server);

    public Orders Orders => field ??= new Orders(_rawClient, _server);

    public Plans Plans => field ??= new Plans(_rawClient, _server);

    public PricingApi PricingApi => field ??= new PricingApi(_rawClient, _server);

    public Products Products => field ??= new Products(_rawClient, _server);

    public Signals Signals => field ??= new Signals(_rawClient, _server);

    public Traces Traces => field ??= new Traces(_rawClient, _server);

    public Usage Usage => field ??= new Usage(_rawClient, _server);

    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server);

    public AnalyticsExperimental AnalyticsExperimental => field ??= new AnalyticsExperimental(_rawClient, _server);

    public CustomViewsExperimental CustomViewsExperimental =>
        field ??= new CustomViewsExperimental(_rawClient, _server);

    public CustomerPortals CustomerPortals => field ??= new CustomerPortals(_rawClient, _server);

    public OrdersLines OrdersLines => field ??= new OrdersLines(_rawClient, _server);

    public ValueModels ValueModels => field ??= new ValueModels(_rawClient, _server);

    public ValueReceipts ValueReceipts => field ??= new ValueReceipts(_rawClient, _server);
}
