using System.Net.Http;
using Divvy.Api;
using Divvy.Core;
using Divvy.Core.Configuration;
using Divvy.Core.Logging;
using Divvy.Core.Models;

namespace Divvy;

/// <summary>
/// BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., RESTful API for working with BILL webhooks, BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., RESTful API for working with BILL webhooks, BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation., BILL is a cloud-based financial operations platform for an organization's accounts payable (AP), accounts receivable (AR), and spend &amp; expense (S&amp;E) automation.
/// </summary>
public sealed class DivvyClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public DivvyClient(HttpClient httpClient, DivvyClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DivvyClient/1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DIVVY_LOG"),
            "DivvyClient",
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

    public Attachments Attachments => field ??= new Attachments(_rawClient, _server);

    public AuthenticationApi AuthenticationApi => field ??= new AuthenticationApi(_rawClient, _server);

    public Bills Bills => field ??= new Bills(_rawClient, _server);

    public Budgets Budgets => field ??= new Budgets(_rawClient, _server);

    public Cards Cards => field ??= new Cards(_rawClient, _server);

    public ClassificationsApi ClassificationsApi => field ??= new ClassificationsApi(_rawClient, _server);

    public CustomFields CustomFields => field ??= new CustomFields(_rawClient, _server);

    public Customers Customers => field ??= new Customers(_rawClient, _server);

    public Documents Documents => field ??= new Documents(_rawClient, _server);

    public Events Events => field ??= new Events(_rawClient, _server);

    public Exports Exports => field ??= new Exports(_rawClient, _server);

    public Health Health => field ??= new Health(_rawClient, _server);

    public Invoices Invoices => field ??= new Invoices(_rawClient, _server);

    public Mfa Mfa => field ??= new Mfa(_rawClient, _server);

    public NetworkApi NetworkApi => field ??= new NetworkApi(_rawClient, _server);

    public Organizations Organizations => field ??= new Organizations(_rawClient, _server);

    public Partner Partner => field ??= new Partner(_rawClient, _server);

    public Payments Payments => field ??= new Payments(_rawClient, _server);

    public Reports Reports => field ??= new Reports(_rawClient, _server);

    public Roles Roles => field ??= new Roles(_rawClient, _server);

    public Subscriptions Subscriptions => field ??= new Subscriptions(_rawClient, _server);

    public Transactions Transactions => field ??= new Transactions(_rawClient, _server);

    public Users Users => field ??= new Users(_rawClient, _server);

    public VendorCredits VendorCredits => field ??= new VendorCredits(_rawClient, _server);

    public Vendors Vendors => field ??= new Vendors(_rawClient, _server);

    public BillApprovals BillApprovals => field ??= new BillApprovals(_rawClient, _server);

    public CreditMemos CreditMemos => field ??= new CreditMemos(_rawClient, _server);

    public FundingAccounts FundingAccounts => field ??= new FundingAccounts(_rawClient, _server);

    public OrganizationUsers OrganizationUsers => field ??= new OrganizationUsers(_rawClient, _server);

    public PaymentTerms PaymentTerms => field ??= new PaymentTerms(_rawClient, _server);

    public ReceivablePayments ReceivablePayments => field ??= new ReceivablePayments(_rawClient, _server);

    public RecurringInvoices RecurringInvoices => field ??= new RecurringInvoices(_rawClient, _server);

    public Recurringbills Recurringbills => field ??= new Recurringbills(_rawClient, _server);

    public Reimbursements Reimbursements => field ??= new Reimbursements(_rawClient, _server);

    public RiskVerifications RiskVerifications => field ??= new RiskVerifications(_rawClient, _server);
}
