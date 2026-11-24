import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Accounts } from "./resources/accounts.js";
import { AppManagement } from "./resources/app-management.js";
import { AvailableApplications } from "./resources/available-applications.js";
import { Companies } from "./resources/companies.js";
import { ConfigurationPackages } from "./resources/configuration-packages.js";
import { CountriesRegions } from "./resources/countries-regions.js";
import { CurrencyApi } from "./resources/currency-api.js";
import { CustomerPayments } from "./resources/customer-payments.js";
import { Customers } from "./resources/customers.js";
import { Dimensions } from "./resources/dimensions.js";
import { Employees } from "./resources/employees.js";
import { EnvironmentOperations } from "./resources/environment-operations.js";
import { EnvironmentSettingsApi } from "./resources/environment-settings-api.js";
import { Environments } from "./resources/environments.js";
import { ExtensionDeploymentStatusApi } from "./resources/extension-deployment-status-api.js";
import { ExtensionUploadApi } from "./resources/extension-upload-api.js";
import { Extensions } from "./resources/extensions.js";
import { Features } from "./resources/features.js";
import { ItemCategories } from "./resources/item-categories.js";
import { Items } from "./resources/items.js";
import { Journals } from "./resources/journals.js";
import { Notifications } from "./resources/notifications.js";
import { PaymentMethods } from "./resources/payment-methods.js";
import { PaymentTerms } from "./resources/payment-terms.js";
import { PermissionSets } from "./resources/permission-sets.js";
import { Profiles } from "./resources/profiles.js";
import { PurchaseInvoices } from "./resources/purchase-invoices.js";
import { PurchaseOrders } from "./resources/purchase-orders.js";
import { SalesInvoices } from "./resources/sales-invoices.js";
import { SalesOrders } from "./resources/sales-orders.js";
import { ScheduledJobs } from "./resources/scheduled-jobs.js";
import { SecurityGroups } from "./resources/security-groups.js";
import { Storage } from "./resources/storage.js";
import { SupportSettingsApi } from "./resources/support-settings-api.js";
import { UpdateManagement } from "./resources/update-management.js";
import { Users } from "./resources/users.js";
import { VendorPayments } from "./resources/vendor-payments.js";
import { Vendors } from "./resources/vendors.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics
 * NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales
 * orders, purchase orders, accounts, journals, and other business entities. Supports OData query
 * parameters for filtering, sorting, and pagination., REST API for programmatic administration of
 * Dynamics 365 Business Central environments. Enables querying and managing production and sandbox
 * environments, setting up administrative notifications, viewing tenant telemetry, managing apps,
 * scheduling updates, and performing environment operations such as copy, rename, restore, and
 * delete., REST API for programmatic administration of Dynamics 365 Business Central environments.
 * Enables querying and managing production and sandbox environments, setting up administrative
 * notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing
 * environment operations such as copy, rename, restore, and delete., API for automating company
 * setup and tenant management in Dynamics 365 Business Central. Supports creating companies,
 * installing and managing extensions, assigning permission sets to users, uploading and applying
 * RapidStart packages, managing user groups and security groups, and activating features
 * programmatically., API for automating company setup and tenant management in Dynamics 365
 * Business Central. Supports creating companies, installing and managing extensions, assigning
 * permission sets to users, uploading and applying RapidStart packages, managing user groups and
 * security groups, and activating features programmatically., Modern RESTful API for Microsoft
 * Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set
 * of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts,
 * journals, and other business entities. Supports OData query parameters for filtering, sorting,
 * and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud
 * evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers,
 * vendors, items, sales orders, purchase orders, accounts, journals, and other business entities.
 * Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for
 * Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a
 * comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase
 * orders, accounts, journals, and other business entities. Supports OData query parameters for
 * filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business
 * Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for
 * managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other
 * business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics
 * NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales
 * orders, purchase orders, accounts, journals, and other business entities. Supports OData query
 * parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365
 * Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints
 * for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and
 * other business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * REST API for programmatic administration of Dynamics 365 Business Central environments. Enables
 * querying and managing production and sandbox environments, setting up administrative
 * notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing
 * environment operations such as copy, rename, restore, and delete., REST API for programmatic
 * administration of Dynamics 365 Business Central environments. Enables querying and managing
 * production and sandbox environments, setting up administrative notifications, viewing tenant
 * telemetry, managing apps, scheduling updates, and performing environment operations such as copy,
 * rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business
 * Central environments. Enables querying and managing production and sandbox environments, setting
 * up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and
 * performing environment operations such as copy, rename, restore, and delete., API for automating
 * company setup and tenant management in Dynamics 365 Business Central. Supports creating
 * companies, installing and managing extensions, assigning permission sets to users, uploading and
 * applying RapidStart packages, managing user groups and security groups, and activating features
 * programmatically., API for automating company setup and tenant management in Dynamics 365
 * Business Central. Supports creating companies, installing and managing extensions, assigning
 * permission sets to users, uploading and applying RapidStart packages, managing user groups and
 * security groups, and activating features programmatically., API for automating company setup and
 * tenant management in Dynamics 365 Business Central. Supports creating companies, installing and
 * managing extensions, assigning permission sets to users, uploading and applying RapidStart
 * packages, managing user groups and security groups, and activating features programmatically.,
 * API for automating company setup and tenant management in Dynamics 365 Business Central. Supports
 * creating companies, installing and managing extensions, assigning permission sets to users,
 * uploading and applying RapidStart packages, managing user groups and security groups, and
 * activating features programmatically., Modern RESTful API for Microsoft Dynamics 365 Business
 * Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for
 * managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other
 * business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics
 * NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales
 * orders, purchase orders, accounts, journals, and other business entities. Supports OData query
 * parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365
 * Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints
 * for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and
 * other business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * REST API for programmatic administration of Dynamics 365 Business Central environments. Enables
 * querying and managing production and sandbox environments, setting up administrative
 * notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing
 * environment operations such as copy, rename, restore, and delete., Modern RESTful API for
 * Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a
 * comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase
 * orders, accounts, journals, and other business entities. Supports OData query parameters for
 * filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business
 * Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for
 * managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other
 * business entities. Supports OData query parameters for filtering, sorting, and pagination., API
 * for automating company setup and tenant management in Dynamics 365 Business Central. Supports
 * creating companies, installing and managing extensions, assigning permission sets to users,
 * uploading and applying RapidStart packages, managing user groups and security groups, and
 * activating features programmatically., API for automating company setup and tenant management in
 * Dynamics 365 Business Central. Supports creating companies, installing and managing extensions,
 * assigning permission sets to users, uploading and applying RapidStart packages, managing user
 * groups and security groups, and activating features programmatically., Modern RESTful API for
 * Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a
 * comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase
 * orders, accounts, journals, and other business entities. Supports OData query parameters for
 * filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business
 * Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for
 * managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other
 * business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics
 * NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales
 * orders, purchase orders, accounts, journals, and other business entities. Supports OData query
 * parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365
 * Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints
 * for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and
 * other business entities. Supports OData query parameters for filtering, sorting, and pagination.,
 * API for automating company setup and tenant management in Dynamics 365 Business Central. Supports
 * creating companies, installing and managing extensions, assigning permission sets to users,
 * uploading and applying RapidStart packages, managing user groups and security groups, and
 * activating features programmatically., API for automating company setup and tenant management in
 * Dynamics 365 Business Central. Supports creating companies, installing and managing extensions,
 * assigning permission sets to users, uploading and applying RapidStart packages, managing user
 * groups and security groups, and activating features programmatically., REST API for programmatic
 * administration of Dynamics 365 Business Central environments. Enables querying and managing
 * production and sandbox environments, setting up administrative notifications, viewing tenant
 * telemetry, managing apps, scheduling updates, and performing environment operations such as copy,
 * rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business
 * Central environments. Enables querying and managing production and sandbox environments, setting
 * up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and
 * performing environment operations such as copy, rename, restore, and delete., REST API for
 * programmatic administration of Dynamics 365 Business Central environments. Enables querying and
 * managing production and sandbox environments, setting up administrative notifications, viewing
 * tenant telemetry, managing apps, scheduling updates, and performing environment operations such
 * as copy, rename, restore, and delete., API for automating company setup and tenant management in
 * Dynamics 365 Business Central. Supports creating companies, installing and managing extensions,
 * assigning permission sets to users, uploading and applying RapidStart packages, managing user
 * groups and security groups, and activating features programmatically., Modern RESTful API for
 * Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a
 * comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase
 * orders, accounts, journals, and other business entities. Supports OData query parameters for
 * filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business
 * Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for
 * managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other
 * business entities. Supports OData query parameters for filtering, sorting, and pagination.
 */
export class MicrosoftDynamicsNavClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accounts?: Accounts;
  #appManagement?: AppManagement;
  #availableApplications?: AvailableApplications;
  #companies?: Companies;
  #configurationPackages?: ConfigurationPackages;
  #countriesRegions?: CountriesRegions;
  #currencyApi?: CurrencyApi;
  #customerPayments?: CustomerPayments;
  #customers?: Customers;
  #dimensions?: Dimensions;
  #employees?: Employees;
  #environmentOperations?: EnvironmentOperations;
  #environmentSettingsApi?: EnvironmentSettingsApi;
  #environments?: Environments;
  #extensionDeploymentStatusApi?: ExtensionDeploymentStatusApi;
  #extensionUploadApi?: ExtensionUploadApi;
  #extensions?: Extensions;
  #features?: Features;
  #itemCategories?: ItemCategories;
  #items?: Items;
  #journals?: Journals;
  #notifications?: Notifications;
  #paymentMethods?: PaymentMethods;
  #paymentTerms?: PaymentTerms;
  #permissionSets?: PermissionSets;
  #profiles?: Profiles;
  #purchaseInvoices?: PurchaseInvoices;
  #purchaseOrders?: PurchaseOrders;
  #salesInvoices?: SalesInvoices;
  #salesOrders?: SalesOrders;
  #scheduledJobs?: ScheduledJobs;
  #securityGroups?: SecurityGroups;
  #storage?: Storage;
  #supportSettingsApi?: SupportSettingsApi;
  #updateManagement?: UpdateManagement;
  #users?: Users;
  #vendorPayments?: VendorPayments;
  #vendors?: Vendors;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "MICROSOFT_DYNAMICS_NAV_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "MicrosoftDynamicsNavClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
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
   * Manage general ledger accounts
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage installed applications
   */
  get appManagement(): AppManagement {
    return (this.#appManagement ??= new AppManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query available application versions and countries
   */
  get availableApplications(): AvailableApplications {
    return (this.#availableApplications ??= new AvailableApplications(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage automation companies
   */
  get companies(): Companies {
    return (this.#companies ??= new Companies(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage RapidStart configuration packages
   */
  get configurationPackages(): ConfigurationPackages {
    return (this.#configurationPackages ??= new ConfigurationPackages(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage country and region codes
   */
  get countriesRegions(): CountriesRegions {
    return (this.#countriesRegions ??= new CountriesRegions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage currencies and exchange rates
   */
  get currencyApi(): CurrencyApi {
    return (this.#currencyApi ??= new CurrencyApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage customer payment journals
   */
  get customerPayments(): CustomerPayments {
    return (this.#customerPayments ??= new CustomerPayments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage customer records
   */
  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage dimensions and dimension values
   */
  get dimensions(): Dimensions {
    return (this.#dimensions ??= new Dimensions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage employee records
   */
  get employees(): Employees {
    return (this.#employees ??= new Employees(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View and track environment operations
   */
  get environmentOperations(): EnvironmentOperations {
    return (this.#environmentOperations ??= new EnvironmentOperations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage environment settings and configuration
   */
  get environmentSettingsApi(): EnvironmentSettingsApi {
    return (this.#environmentSettingsApi ??= new EnvironmentSettingsApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Manage Business Central environments
   */
  get environments(): Environments {
    return (this.#environments ??= new Environments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Monitor extension installation progress
   */
  get extensionDeploymentStatusApi(): ExtensionDeploymentStatusApi {
    return (this.#extensionDeploymentStatusApi ??= new ExtensionDeploymentStatusApi(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Upload and install per-tenant extensions
   */
  get extensionUploadApi(): ExtensionUploadApi {
    return (this.#extensionUploadApi ??= new ExtensionUploadApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage installed extensions
   */
  get extensions(): Extensions {
    return (this.#extensions ??= new Extensions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage feature flags
   */
  get features(): Features {
    return (this.#features ??= new Features(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage item categories
   */
  get itemCategories(): ItemCategories {
    return (this.#itemCategories ??= new ItemCategories(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage inventory items
   */
  get items(): Items {
    return (this.#items ??= new Items(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage general journals and journal lines
   */
  get journals(): Journals {
    return (this.#journals ??= new Journals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage administrative notifications
   */
  get notifications(): Notifications {
    return (this.#notifications ??= new Notifications(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage payment methods
   */
  get paymentMethods(): PaymentMethods {
    return (this.#paymentMethods ??= new PaymentMethods(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage payment terms
   */
  get paymentTerms(): PaymentTerms {
    return (this.#paymentTerms ??= new PaymentTerms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage permission sets and user permissions
   */
  get permissionSets(): PermissionSets {
    return (this.#permissionSets ??= new PermissionSets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage user profiles
   */
  get profiles(): Profiles {
    return (this.#profiles ??= new Profiles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage purchase invoices and lines
   */
  get purchaseInvoices(): PurchaseInvoices {
    return (this.#purchaseInvoices ??= new PurchaseInvoices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage purchase orders and lines
   */
  get purchaseOrders(): PurchaseOrders {
    return (this.#purchaseOrders ??= new PurchaseOrders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage sales invoices and lines
   */
  get salesInvoices(): SalesInvoices {
    return (this.#salesInvoices ??= new SalesInvoices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage sales orders and lines
   */
  get salesOrders(): SalesOrders {
    return (this.#salesOrders ??= new SalesOrders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View scheduled background jobs
   */
  get scheduledJobs(): ScheduledJobs {
    return (this.#scheduledJobs ??= new ScheduledJobs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage security groups
   */
  get securityGroups(): SecurityGroups {
    return (this.#securityGroups ??= new SecurityGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * View storage usage and quotas
   */
  get storage(): Storage {
    return (this.#storage ??= new Storage(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage support settings
   */
  get supportSettingsApi(): SupportSettingsApi {
    return (this.#supportSettingsApi ??= new SupportSettingsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage environment updates
   */
  get updateManagement(): UpdateManagement {
    return (this.#updateManagement ??= new UpdateManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage Business Central users
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage vendor payment journals
   */
  get vendorPayments(): VendorPayments {
    return (this.#vendorPayments ??= new VendorPayments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage vendor records
   */
  get vendors(): Vendors {
    return (this.#vendors ??= new Vendors(this.#rawClient, this.#servers, this.#auth));
  }
}
