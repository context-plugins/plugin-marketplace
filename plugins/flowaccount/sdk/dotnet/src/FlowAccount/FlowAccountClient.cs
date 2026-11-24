using System.Net.Http;
using FlowAccount.Api;
using FlowAccount.Core;
using FlowAccount.Core.Configuration;
using FlowAccount.Core.Logging;
using FlowAccount.Core.Models;

namespace FlowAccount;

public sealed class FlowAccountClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FlowAccountClient(HttpClient httpClient, FlowAccountClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FlowAccountClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FLOW_ACCOUNT_LOG"),
            "FlowAccountClient",
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

    public BatchImport BatchImport => field ??= new BatchImport(_rawClient, _server, _auth);

    public BillingNote BillingNote => field ??= new BillingNote(_rawClient, _server, _auth);

    public CashInvoice CashInvoice => field ??= new CashInvoice(_rawClient, _server, _auth);

    public CompanyCurrency CompanyCurrency => field ??= new CompanyCurrency(_rawClient, _server, _auth);

    public ContactApi ContactApi => field ??= new ContactApi(_rawClient, _server, _auth);

    public CreditNote CreditNote => field ??= new CreditNote(_rawClient, _server, _auth);

    public DebitNote DebitNote => field ??= new DebitNote(_rawClient, _server, _auth);

    public EmployeeApi EmployeeApi => field ??= new EmployeeApi(_rawClient, _server, _auth);

    public Expense Expense => field ??= new Expense(_rawClient, _server, _auth);

    public ProductCategoryApi ProductCategoryApi => field ??= new ProductCategoryApi(_rawClient, _server, _auth);

    public ProductInventory ProductInventory => field ??= new ProductInventory(_rawClient, _server, _auth);

    public ProductUnitApi ProductUnitApi => field ??= new ProductUnitApi(_rawClient, _server, _auth);

    public Products Products => field ??= new Products(_rawClient, _server, _auth);

    public Purchase Purchase => field ??= new Purchase(_rawClient, _server, _auth);

    public PurchaseOrder PurchaseOrder => field ??= new PurchaseOrder(_rawClient, _server, _auth);

    public Quotation Quotation => field ??= new Quotation(_rawClient, _server, _auth);

    public Receipt Receipt => field ??= new Receipt(_rawClient, _server, _auth);

    public ReceivableInvoiceApi ReceivableInvoiceApi => field ??= new ReceivableInvoiceApi(_rawClient, _server, _auth);

    public TaxInvoice TaxInvoice => field ??= new TaxInvoice(_rawClient, _server, _auth);
}
