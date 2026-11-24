using System.Net.Http;
using DoiT.Api;
using DoiT.Core;
using DoiT.Core.Configuration;
using DoiT.Core.Logging;
using DoiT.Core.Models;

namespace DoiT;

/// <summary>
/// Programmatic access to DoiT Platform
/// </summary>
public sealed class DoiTClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public DoiTClient(HttpClient httpClient, DoiTClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DoiTClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DOI_T_LOG"),
            "DoiTClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// Find DoiT account managers assigned to your organization.
    /// </summary>
    public AccountTeam AccountTeam => field ??= new AccountTeam(_rawClient, _server, _auth);

    /// <summary>
    /// Notifications triggered when cloud costs exceed defined thresholds or meet specific conditions.
    /// </summary>
    public Alerts Alerts => field ??= new Alerts(_rawClient, _server, _auth);

    /// <summary>
    /// Define how costs are distributed across your organization.
    /// </summary>
    public Allocations Allocations => field ??= new Allocations(_rawClient, _server, _auth);

    /// <summary>
    /// Custom notes added to cost data to provide contextual information.
    /// </summary>
    public Annotations Annotations => field ??= new Annotations(_rawClient, _server, _auth);

    /// <summary>
    /// Monitor cost spikes in your cloud environment.
    /// </summary>
    public Anomalies Anomalies => field ??= new Anomalies(_rawClient, _server, _auth);

    /// <summary>
    /// Manage cloud resources or services in your cloud environment.
    /// </summary>
    public Assets Assets => field ??= new Assets(_rawClient, _server, _auth);

    /// <summary>
    /// User authentication.
    /// </summary>
    public Auth Auth => field ??= new Auth(_rawClient, _server, _auth);

    /// <summary>
    /// Interact with Ava, DoiT's AI-powered cloud assistant.
    /// </summary>
    public Ava Ava => field ??= new Ava(_rawClient, _server, _auth);

    /// <summary>
    /// Explain month-over-month changes in invoiced cloud costs.
    /// </summary>
    public BillingExplainerApi BillingExplainerApi => field ??= new BillingExplainerApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage AWS billing-transfer mappings between distributors and resellers and between resellers and end customers, and list program management accounts.
    /// </summary>
    public BillingTransfer BillingTransfer => field ??= new BillingTransfer(_rawClient, _server, _auth);

    /// <summary>
    /// AI-generated budget recommendations you can accept (link to a budget you created) or dismiss.
    /// </summary>
    public BudgetSuggestions BudgetSuggestions => field ??= new BudgetSuggestions(_rawClient, _server, _auth);

    /// <summary>
    /// Track actual cloud spend against planned spend.
    /// </summary>
    public Budgets Budgets => field ??= new Budgets(_rawClient, _server, _auth);

    /// <summary>
    /// Manage cloud provider connections and check feature availability for connected accounts.
    /// </summary>
    public CloudConnect CloudConnect => field ??= new CloudConnect(_rawClient, _server, _auth);

    /// <summary>
    /// Cloud Diagrams visualize your cloud infrastructure and resource relationships.
    /// </summary>
    public CloudDiagrams CloudDiagrams => field ??= new CloudDiagrams(_rawClient, _server, _auth);

    /// <summary>
    /// Service disruptions and outages from cloud providers.
    /// </summary>
    public CloudIncidents CloudIncidents => field ??= new CloudIncidents(_rawClient, _server, _auth);

    /// <summary>
    /// Manage CloudFlow.
    /// </summary>
    public CloudFlowApi CloudFlowApi => field ??= new CloudFlowApi(_rawClient, _server, _auth);

    /// <summary>
    /// View and manage commitment contracts with DoiT.
    /// </summary>
    public CommitmentManager CommitmentManager => field ??= new CommitmentManager(_rawClient, _server, _auth);

    /// <summary>
    /// Beta. Read-only access to Composer recipes and their results. A recipe evaluates your cloud resources against a set of conditions; each result is a finding on one affected resource, and published recipes surface as proprietary Insights in the Console.
    /// </summary>
    public ComposerInsightsBeta ComposerInsightsBeta => field ??= new ComposerInsightsBeta(_rawClient, _server, _auth);

    /// <summary>
    /// Manage cloud provider connections used in CloudFlow workflows (AWS and GCP).
    /// </summary>
    public Connections Connections => field ??= new Connections(_rawClient, _server, _auth);

    /// <summary>
    /// Manage contract templates for PartnerOps resellers (T1/T2).
    /// </summary>
    public ContractTemplates ContractTemplates => field ??= new ContractTemplates(_rawClient, _server, _auth);

    /// <summary>
    /// List and manage tenant-scoped contracts as a T1/T2 PartnerOps caller.
    /// </summary>
    public Contracts Contracts => field ??= new Contracts(_rawClient, _server, _auth);

    /// <summary>
    /// Manage explicit, named groups of downstream customers and the users scoped to them.
    /// </summary>
    public CustomerGroups CustomerGroups => field ??= new CustomerGroups(_rawClient, _server, _auth);

    /// <summary>
    /// Read and update your organization's general settings.
    /// </summary>
    public Customers Customers => field ??= new Customers(_rawClient, _server, _auth);

    /// <summary>
    /// Ingest third-party cost, usage, and metric-based data for analysis.
    /// </summary>
    public DataHub DataHub => field ??= new DataHub(_rawClient, _server, _auth);

    /// <summary>
    /// View available dimensions for analysis.
    /// </summary>
    public Dimensions Dimensions => field ??= new Dimensions(_rawClient, _server, _auth);

    /// <summary>
    /// Organize Cloud Analytics resources (reports, allocations) into folders.
    /// </summary>
    public Folders Folders => field ??= new Folders(_rawClient, _server, _auth);

    /// <summary>
    /// Manage country-based access to tenants in your customer hierarchy.
    /// </summary>
    public GeographicAccess GeographicAccess => field ??= new GeographicAccess(_rawClient, _server, _auth);

    /// <summary>
    /// Manage cloud insights representing recommendations and findings for cloud resources.
    /// </summary>
    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    /// <summary>
    /// Access your current and historical billing documents.
    /// </summary>
    public Invoices Invoices => field ??= new Invoices(_rawClient, _server, _auth);

    /// <summary>
    /// Create and manage labels to organize and categorize your cloud resources.
    /// </summary>
    public Labels Labels => field ??= new Labels(_rawClient, _server, _auth);

    /// <summary>
    /// Organizations help you segment data by your company or team structure.
    /// </summary>
    public Organizations Organizations => field ??= new Organizations(_rawClient, _server, _auth);

    /// <summary>
    /// Evaluate current AWS commitments, plan and automate purchases, and optimize cloud costs with PerfectScale for Commitments.
    /// </summary>
    public PerfectScaleForCommitmentsAws PerfectScaleForCommitmentsAws =>
        field ??= new PerfectScaleForCommitmentsAws(_rawClient, _server, _auth);

    /// <summary>
    /// Evaluate current GCP commitments, plan and automate purchases, and optimize cloud costs with PerfectScale for Commitments.
    /// </summary>
    public PerfectScaleForCommitmentsGcp PerfectScaleForCommitmentsGcp =>
        field ??= new PerfectScaleForCommitmentsGcp(_rawClient, _server, _auth);

    /// <summary>
    /// Cloud-agnostic PerfectScale for Commitments resources — commitment policies shared by AWS and GCP.
    /// </summary>
    public PerfectScaleForCommitmentsGeneral PerfectScaleForCommitmentsGeneral =>
        field ??= new PerfectScaleForCommitmentsGeneral(_rawClient, _server, _auth);

    /// <summary>
    /// Metadata about supported cloud providers.
    /// </summary>
    public Platforms Platforms => field ??= new Platforms(_rawClient, _server, _auth);

    /// <summary>
    /// Metadata about cloud services and offerings.
    /// </summary>
    public Products Products => field ??= new Products(_rawClient, _server, _auth);

    /// <summary>
    /// Manage Cloud Analytics reports and get reports data in JSON format.
    /// </summary>
    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    /// <summary>
    /// Manage user permissions and access levels in your organization.
    /// </summary>
    public Roles Roles => field ??= new Roles(_rawClient, _server, _auth);

    /// <summary>
    /// Manage non-human identities whose API tokens call the DoiT API with a fixed set of permissions.
    /// </summary>
    public ServiceAccounts ServiceAccounts => field ??= new ServiceAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Monitor cloud service quota usage across connected accounts and projects.
    /// </summary>
    public ServiceQuotas ServiceQuotas => field ??= new ServiceQuotas(_rawClient, _server, _auth);

    public Settings Settings => field ??= new Settings(_rawClient, _server, _auth);

    /// <summary>
    /// Link and manage shared-payer account mappings for PartnerOps resellers (T2), reassigning AWS accounts under a shared payer to T3 end customers.
    /// </summary>
    public SharedPayers SharedPayers => field ??= new SharedPayers(_rawClient, _server, _auth);

    /// <summary>
    /// Manage permissions associated with specified Cloud Analytics resources.
    /// </summary>
    public Sharing Sharing => field ??= new Sharing(_rawClient, _server, _auth);

    /// <summary>
    /// Start a Cloud Intelligence trial for an organization that is not yet a DoiT customer. These operations require no API key: they are rate limited, idempotent, and provision nothing until the organization's admin verifies the request. Agents create a request and hand the returned consentUrl to the admin; the admin verifies by entering the emailed code (or signing the request on the console), after which the tenant is provisioned and the request reports its customer id.
    /// </summary>
    public Signup Signup => field ??= new Signup(_rawClient, _server);

    /// <summary>
    /// Create and manage support tickets with DoiT.
    /// </summary>
    public SupportRequests SupportRequests => field ??= new SupportRequests(_rawClient, _server, _auth);

    /// <summary>
    /// Browse the catalogue of read-only CloudFlow templates (blueprints) used to create flows.
    /// </summary>
    public Templates Templates => field ??= new Templates(_rawClient, _server, _auth);

    /// <summary>
    /// Manage users who have access to the DoiT platform.
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Beta. Read precomputed current-month cloud spend and forecast metrics. Widget results are
    /// refreshed in the background; reading a widget returns the latest cached result and never
    /// starts a synchronous refresh. Use the list operation to discover the complete catalogue.
    /// </summary>
    public WidgetsBeta WidgetsBeta => field ??= new WidgetsBeta(_rawClient, _server, _auth);
}
