using System.Net.Http;
using MicrosoftDynamicsNav.Api;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Configuration;
using MicrosoftDynamicsNav.Core.Logging;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav;

/// <summary>
/// Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., REST API for programmatic administration of Dynamics 365 Business Central environments. Enables querying and managing production and sandbox environments, setting up administrative notifications, viewing tenant telemetry, managing apps, scheduling updates, and performing environment operations such as copy, rename, restore, and delete., API for automating company setup and tenant management in Dynamics 365 Business Central. Supports creating companies, installing and managing extensions, assigning permission sets to users, uploading and applying RapidStart packages, managing user groups and security groups, and activating features programmatically., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination., Modern RESTful API for Microsoft Dynamics 365 Business Central, the cloud evolution of Dynamics NAV. Provides a comprehensive set of endpoints for managing customers, vendors, items, sales orders, purchase orders, accounts, journals, and other business entities. Supports OData query parameters for filtering, sorting, and pagination.
/// </summary>
public sealed class MicrosoftDynamicsNavClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public MicrosoftDynamicsNavClient(HttpClient httpClient, MicrosoftDynamicsNavClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "MicrosoftDynamicsNavClient/2.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("MICROSOFT_DYNAMICS_NAV_LOG"),
            "MicrosoftDynamicsNavClient",
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
    /// Manage general ledger accounts
    /// </summary>
    public Accounts Accounts => field ??= new Accounts(_rawClient, _server, _auth);

    /// <summary>
    /// Manage installed applications
    /// </summary>
    public AppManagement AppManagement => field ??= new AppManagement(_rawClient, _server, _auth);

    /// <summary>
    /// Query available application versions and countries
    /// </summary>
    public AvailableApplications AvailableApplications =>
        field ??= new AvailableApplications(_rawClient, _server, _auth);

    /// <summary>
    /// Manage automation companies
    /// </summary>
    public Companies Companies => field ??= new Companies(_rawClient, _server, _auth);

    /// <summary>
    /// Manage RapidStart configuration packages
    /// </summary>
    public ConfigurationPackages ConfigurationPackages =>
        field ??= new ConfigurationPackages(_rawClient, _server, _auth);

    /// <summary>
    /// Manage country and region codes
    /// </summary>
    public CountriesRegions CountriesRegions => field ??= new CountriesRegions(_rawClient, _server, _auth);

    /// <summary>
    /// Manage currencies and exchange rates
    /// </summary>
    public CurrencyApi CurrencyApi => field ??= new CurrencyApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage customer payment journals
    /// </summary>
    public CustomerPayments CustomerPayments => field ??= new CustomerPayments(_rawClient, _server, _auth);

    /// <summary>
    /// Manage customer records
    /// </summary>
    public Customers Customers => field ??= new Customers(_rawClient, _server, _auth);

    /// <summary>
    /// Manage dimensions and dimension values
    /// </summary>
    public Dimensions Dimensions => field ??= new Dimensions(_rawClient, _server, _auth);

    /// <summary>
    /// Manage employee records
    /// </summary>
    public Employees Employees => field ??= new Employees(_rawClient, _server, _auth);

    /// <summary>
    /// View and track environment operations
    /// </summary>
    public EnvironmentOperations EnvironmentOperations =>
        field ??= new EnvironmentOperations(_rawClient, _server, _auth);

    /// <summary>
    /// Manage environment settings and configuration
    /// </summary>
    public EnvironmentSettingsApi EnvironmentSettingsApi =>
        field ??= new EnvironmentSettingsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage Business Central environments
    /// </summary>
    public Environments Environments => field ??= new Environments(_rawClient, _server, _auth);

    /// <summary>
    /// Monitor extension installation progress
    /// </summary>
    public ExtensionDeploymentStatusApi ExtensionDeploymentStatusApi =>
        field ??= new ExtensionDeploymentStatusApi(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and install per-tenant extensions
    /// </summary>
    public ExtensionUploadApi ExtensionUploadApi => field ??= new ExtensionUploadApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage installed extensions
    /// </summary>
    public ExtensionsApi ExtensionsApi => field ??= new ExtensionsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage feature flags
    /// </summary>
    public Features Features => field ??= new Features(_rawClient, _server, _auth);

    /// <summary>
    /// Manage item categories
    /// </summary>
    public ItemCategories ItemCategories => field ??= new ItemCategories(_rawClient, _server, _auth);

    /// <summary>
    /// Manage inventory items
    /// </summary>
    public Items Items => field ??= new Items(_rawClient, _server, _auth);

    /// <summary>
    /// Manage general journals and journal lines
    /// </summary>
    public Journals Journals => field ??= new Journals(_rawClient, _server, _auth);

    /// <summary>
    /// Manage administrative notifications
    /// </summary>
    public Notifications Notifications => field ??= new Notifications(_rawClient, _server, _auth);

    /// <summary>
    /// Manage payment methods
    /// </summary>
    public PaymentMethods PaymentMethods => field ??= new PaymentMethods(_rawClient, _server, _auth);

    /// <summary>
    /// Manage payment terms
    /// </summary>
    public PaymentTerms PaymentTerms => field ??= new PaymentTerms(_rawClient, _server, _auth);

    /// <summary>
    /// Manage permission sets and user permissions
    /// </summary>
    public PermissionSets PermissionSets => field ??= new PermissionSets(_rawClient, _server, _auth);

    /// <summary>
    /// Manage user profiles
    /// </summary>
    public Profiles Profiles => field ??= new Profiles(_rawClient, _server, _auth);

    /// <summary>
    /// Manage purchase invoices and lines
    /// </summary>
    public PurchaseInvoices PurchaseInvoices => field ??= new PurchaseInvoices(_rawClient, _server, _auth);

    /// <summary>
    /// Manage purchase orders and lines
    /// </summary>
    public PurchaseOrders PurchaseOrders => field ??= new PurchaseOrders(_rawClient, _server, _auth);

    /// <summary>
    /// Manage sales invoices and lines
    /// </summary>
    public SalesInvoices SalesInvoices => field ??= new SalesInvoices(_rawClient, _server, _auth);

    /// <summary>
    /// Manage sales orders and lines
    /// </summary>
    public SalesOrders SalesOrders => field ??= new SalesOrders(_rawClient, _server, _auth);

    /// <summary>
    /// View scheduled background jobs
    /// </summary>
    public ScheduledJobs ScheduledJobs => field ??= new ScheduledJobs(_rawClient, _server, _auth);

    /// <summary>
    /// Manage security groups
    /// </summary>
    public SecurityGroups SecurityGroups => field ??= new SecurityGroups(_rawClient, _server, _auth);

    /// <summary>
    /// View storage usage and quotas
    /// </summary>
    public Storage Storage => field ??= new Storage(_rawClient, _server, _auth);

    /// <summary>
    /// Manage support settings
    /// </summary>
    public SupportSettingsApi SupportSettingsApi => field ??= new SupportSettingsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage environment updates
    /// </summary>
    public UpdateManagement UpdateManagement => field ??= new UpdateManagement(_rawClient, _server, _auth);

    /// <summary>
    /// Manage Business Central users
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Manage vendor payment journals
    /// </summary>
    public VendorPayments VendorPayments => field ??= new VendorPayments(_rawClient, _server, _auth);

    /// <summary>
    /// Manage vendor records
    /// </summary>
    public Vendors Vendors => field ??= new Vendors(_rawClient, _server, _auth);
}
