import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountTeam } from "./resources/account-team.js";
import { Alerts } from "./resources/alerts.js";
import { Allocations } from "./resources/allocations.js";
import { Annotations } from "./resources/annotations.js";
import { Anomalies } from "./resources/anomalies.js";
import { Assets } from "./resources/assets.js";
import { Auth } from "./resources/auth.js";
import { Ava } from "./resources/ava.js";
import { BillingExplainerApi } from "./resources/billing-explainer-api.js";
import { BillingTransfer } from "./resources/billing-transfer.js";
import { BudgetSuggestions } from "./resources/budget-suggestions.js";
import { Budgets } from "./resources/budgets.js";
import { CloudConnect } from "./resources/cloud-connect.js";
import { CloudDiagrams } from "./resources/cloud-diagrams.js";
import { CloudFlowApi } from "./resources/cloud-flow-api.js";
import { CloudIncidents } from "./resources/cloud-incidents.js";
import { CommitmentManager } from "./resources/commitment-manager.js";
import { ComposerInsightsBeta } from "./resources/composer-insights-beta.js";
import { Connections } from "./resources/connections.js";
import { ContractTemplates } from "./resources/contract-templates.js";
import { Contracts } from "./resources/contracts.js";
import { CustomerGroups } from "./resources/customer-groups.js";
import { Customers } from "./resources/customers.js";
import { DataHub } from "./resources/data-hub.js";
import { Dimensions } from "./resources/dimensions.js";
import { Folders } from "./resources/folders.js";
import { GeographicAccess } from "./resources/geographic-access.js";
import { Insights } from "./resources/insights.js";
import { Invoices } from "./resources/invoices.js";
import { Labels } from "./resources/labels.js";
import { Organizations } from "./resources/organizations.js";
import { PerfectScaleForCommitmentsAws } from "./resources/perfect-scale-for-commitments-aws.js";
import { PerfectScaleForCommitmentsGcp } from "./resources/perfect-scale-for-commitments-gcp.js";
import { PerfectScaleForCommitmentsGeneral } from "./resources/perfect-scale-for-commitments-general.js";
import { Platforms } from "./resources/platforms.js";
import { Products } from "./resources/products.js";
import { Reports } from "./resources/reports.js";
import { Roles } from "./resources/roles.js";
import { ServiceAccounts } from "./resources/service-accounts.js";
import { ServiceQuotas } from "./resources/service-quotas.js";
import { Settings } from "./resources/settings.js";
import { SharedPayers } from "./resources/shared-payers.js";
import { Sharing } from "./resources/sharing.js";
import { Signup } from "./resources/signup.js";
import { SupportRequests } from "./resources/support-requests.js";
import { Templates } from "./resources/templates.js";
import { Users } from "./resources/users.js";
import { WidgetsBeta } from "./resources/widgets-beta.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Programmatic access to DoiT Platform
 */
export class DoiTClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accountTeam?: AccountTeam;
  #alerts?: Alerts;
  #allocations?: Allocations;
  #annotations?: Annotations;
  #anomalies?: Anomalies;
  #assets?: Assets;
  #auth2?: Auth;
  #ava?: Ava;
  #billingExplainerApi?: BillingExplainerApi;
  #billingTransfer?: BillingTransfer;
  #budgetSuggestions?: BudgetSuggestions;
  #budgets?: Budgets;
  #cloudConnect?: CloudConnect;
  #cloudDiagrams?: CloudDiagrams;
  #cloudIncidents?: CloudIncidents;
  #cloudFlowApi?: CloudFlowApi;
  #commitmentManager?: CommitmentManager;
  #composerInsightsBeta?: ComposerInsightsBeta;
  #connections?: Connections;
  #contractTemplates?: ContractTemplates;
  #contracts?: Contracts;
  #customerGroups?: CustomerGroups;
  #customers?: Customers;
  #dataHub?: DataHub;
  #dimensions?: Dimensions;
  #folders?: Folders;
  #geographicAccess?: GeographicAccess;
  #insights?: Insights;
  #invoices?: Invoices;
  #labels?: Labels;
  #organizations?: Organizations;
  #perfectScaleForCommitmentsAws?: PerfectScaleForCommitmentsAws;
  #perfectScaleForCommitmentsGcp?: PerfectScaleForCommitmentsGcp;
  #perfectScaleForCommitmentsGeneral?: PerfectScaleForCommitmentsGeneral;
  #platforms?: Platforms;
  #products?: Products;
  #reports?: Reports;
  #roles?: Roles;
  #serviceAccounts?: ServiceAccounts;
  #serviceQuotas?: ServiceQuotas;
  #settings?: Settings;
  #sharedPayers?: SharedPayers;
  #sharing?: Sharing;
  #signup?: Signup;
  #supportRequests?: SupportRequests;
  #templates?: Templates;
  #users?: Users;
  #widgetsBeta?: WidgetsBeta;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DOI_T_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DoiTClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Find DoiT account managers assigned to your organization.
   */
  get accountTeam(): AccountTeam {
    return (this.#accountTeam ??= new AccountTeam(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Notifications triggered when cloud costs exceed defined thresholds or meet specific conditions.
   */
  get alerts(): Alerts {
    return (this.#alerts ??= new Alerts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Define how costs are distributed across your organization.
   */
  get allocations(): Allocations {
    return (this.#allocations ??= new Allocations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Custom notes added to cost data to provide contextual information.
   */
  get annotations(): Annotations {
    return (this.#annotations ??= new Annotations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Monitor cost spikes in your cloud environment.
   */
  get anomalies(): Anomalies {
    return (this.#anomalies ??= new Anomalies(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage cloud resources or services in your cloud environment.
   */
  get assets(): Assets {
    return (this.#assets ??= new Assets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * User authentication.
   */
  get auth2(): Auth {
    return (this.#auth2 ??= new Auth(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Interact with Ava, DoiT's AI-powered cloud assistant.
   */
  get ava(): Ava {
    return (this.#ava ??= new Ava(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Explain month-over-month changes in invoiced cloud costs.
   */
  get billingExplainerApi(): BillingExplainerApi {
    return (this.#billingExplainerApi ??= new BillingExplainerApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage AWS billing-transfer mappings between distributors and resellers and between resellers
   * and end customers, and list program management accounts.
   */
  get billingTransfer(): BillingTransfer {
    return (this.#billingTransfer ??= new BillingTransfer(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * AI-generated budget recommendations you can accept (link to a budget you created) or dismiss.
   */
  get budgetSuggestions(): BudgetSuggestions {
    return (this.#budgetSuggestions ??= new BudgetSuggestions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Track actual cloud spend against planned spend.
   */
  get budgets(): Budgets {
    return (this.#budgets ??= new Budgets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage cloud provider connections and check feature availability for connected accounts.
   */
  get cloudConnect(): CloudConnect {
    return (this.#cloudConnect ??= new CloudConnect(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Cloud Diagrams visualize your cloud infrastructure and resource relationships.
   */
  get cloudDiagrams(): CloudDiagrams {
    return (this.#cloudDiagrams ??= new CloudDiagrams(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Service disruptions and outages from cloud providers.
   */
  get cloudIncidents(): CloudIncidents {
    return (this.#cloudIncidents ??= new CloudIncidents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage CloudFlow.
   */
  get cloudFlowApi(): CloudFlowApi {
    return (this.#cloudFlowApi ??= new CloudFlowApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View and manage commitment contracts with DoiT.
   */
  get commitmentManager(): CommitmentManager {
    return (this.#commitmentManager ??= new CommitmentManager(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Beta. Read-only access to Composer recipes and their results. A recipe evaluates your cloud
   * resources against a set of conditions; each result is a finding on one affected resource, and
   * published recipes surface as proprietary Insights in the Console.
   */
  get composerInsightsBeta(): ComposerInsightsBeta {
    return (this.#composerInsightsBeta ??= new ComposerInsightsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage cloud provider connections used in CloudFlow workflows (AWS and GCP).
   */
  get connections(): Connections {
    return (this.#connections ??= new Connections(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage contract templates for PartnerOps resellers (T1/T2).
   */
  get contractTemplates(): ContractTemplates {
    return (this.#contractTemplates ??= new ContractTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * List and manage tenant-scoped contracts as a T1/T2 PartnerOps caller.
   */
  get contracts(): Contracts {
    return (this.#contracts ??= new Contracts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage explicit, named groups of downstream customers and the users scoped to them.
   */
  get customerGroups(): CustomerGroups {
    return (this.#customerGroups ??= new CustomerGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Read and update your organization's general settings.
   */
  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Ingest third-party cost, usage, and metric-based data for analysis.
   */
  get dataHub(): DataHub {
    return (this.#dataHub ??= new DataHub(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View available dimensions for analysis.
   */
  get dimensions(): Dimensions {
    return (this.#dimensions ??= new Dimensions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Organize Cloud Analytics resources (reports, allocations) into folders.
   */
  get folders(): Folders {
    return (this.#folders ??= new Folders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage country-based access to tenants in your customer hierarchy.
   */
  get geographicAccess(): GeographicAccess {
    return (this.#geographicAccess ??= new GeographicAccess(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage cloud insights representing recommendations and findings for cloud resources.
   */
  get insights(): Insights {
    return (this.#insights ??= new Insights(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Access your current and historical billing documents.
   */
  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and manage labels to organize and categorize your cloud resources.
   */
  get labels(): Labels {
    return (this.#labels ??= new Labels(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Organizations help you segment data by your company or team structure.
   */
  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Evaluate current AWS commitments, plan and automate purchases, and optimize cloud costs with
   * PerfectScale for Commitments.
   */
  get perfectScaleForCommitmentsAws(): PerfectScaleForCommitmentsAws {
    return (this.#perfectScaleForCommitmentsAws ??= new PerfectScaleForCommitmentsAws(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Evaluate current GCP commitments, plan and automate purchases, and optimize cloud costs with
   * PerfectScale for Commitments.
   */
  get perfectScaleForCommitmentsGcp(): PerfectScaleForCommitmentsGcp {
    return (this.#perfectScaleForCommitmentsGcp ??= new PerfectScaleForCommitmentsGcp(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Cloud-agnostic PerfectScale for Commitments resources — commitment policies shared by AWS and
   * GCP.
   */
  get perfectScaleForCommitmentsGeneral(): PerfectScaleForCommitmentsGeneral {
    return (this.#perfectScaleForCommitmentsGeneral ??= new PerfectScaleForCommitmentsGeneral(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Metadata about supported cloud providers.
   */
  get platforms(): Platforms {
    return (this.#platforms ??= new Platforms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Metadata about cloud services and offerings.
   */
  get products(): Products {
    return (this.#products ??= new Products(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage Cloud Analytics reports and get reports data in JSON format.
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage user permissions and access levels in your organization.
   */
  get roles(): Roles {
    return (this.#roles ??= new Roles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage non-human identities whose API tokens call the DoiT API with a fixed set of permissions.
   */
  get serviceAccounts(): ServiceAccounts {
    return (this.#serviceAccounts ??= new ServiceAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Monitor cloud service quota usage across connected accounts and projects.
   */
  get serviceQuotas(): ServiceQuotas {
    return (this.#serviceQuotas ??= new ServiceQuotas(this.#rawClient, this.#servers, this.#auth));
  }

  get settings(): Settings {
    return (this.#settings ??= new Settings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Link and manage shared-payer account mappings for PartnerOps resellers (T2), reassigning AWS
   * accounts under a shared payer to T3 end customers.
   */
  get sharedPayers(): SharedPayers {
    return (this.#sharedPayers ??= new SharedPayers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage permissions associated with specified Cloud Analytics resources.
   */
  get sharing(): Sharing {
    return (this.#sharing ??= new Sharing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Start a Cloud Intelligence trial for an organization that is not yet a DoiT customer. These
   * operations require no API key: they are rate limited, idempotent, and provision nothing until
   * the organization's admin verifies the request. Agents create a request and hand the returned
   * consentUrl to the admin; the admin verifies by entering the emailed code (or signing the
   * request on the console), after which the tenant is provisioned and the request reports its
   * customer id.
   */
  get signup(): Signup {
    return (this.#signup ??= new Signup(this.#rawClient, this.#servers));
  }

  /**
   * Create and manage support tickets with DoiT.
   */
  get supportRequests(): SupportRequests {
    return (this.#supportRequests ??= new SupportRequests(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Browse the catalogue of read-only CloudFlow templates (blueprints) used to create flows.
   */
  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage users who have access to the DoiT platform.
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Beta. Read precomputed current-month cloud spend and forecast metrics. Widget results are
   * refreshed in the background; reading a widget returns the latest cached result and never starts
   * a synchronous refresh. Use the list operation to discover the complete catalogue.
   */
  get widgetsBeta(): WidgetsBeta {
    return (this.#widgetsBeta ??= new WidgetsBeta(this.#rawClient, this.#servers, this.#auth));
  }
}
