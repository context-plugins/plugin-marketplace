using System.Net.Http;
using UiPath.Api;
using UiPath.Core;
using UiPath.Core.Configuration;
using UiPath.Core.Logging;
using UiPath.Core.Models;

namespace UiPath;

/// <summary>
/// The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Automation Hub API provides access to the automation pipeline and idea management platform, allowing developers to programmatically create, retrieve, and manage automation ideas, projects, and pipeline data., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Platform Management API covers foundational platform administration resources including identity management, audit log access, and licensing operations., The UiPath Automation Hub API provides access to the automation pipeline and idea management platform, allowing developers to programmatically create, retrieve, and manage automation ideas, projects, and pipeline data., The UiPath Document Understanding API enables programmatic access to intelligent document processing capabilities including digitization, classification, extraction, and validation of document content., The UiPath Document Understanding API enables programmatic access to intelligent document processing capabilities including digitization, classification, extraction, and validation of document content., The UiPath Document Understanding API enables programmatic access to intelligent document processing capabilities including digitization, classification, extraction, and validation of document content., The UiPath Data Service API, also referred to as the Data Fabric OpenAPI, enables external applications to interact with structured data entities stored in UiPath's cloud data platform., The UiPath Document Understanding API enables programmatic access to intelligent document processing capabilities including digitization, classification, extraction, and validation of document content., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Platform Management API covers foundational platform administration resources including identity management, audit log access, and licensing operations., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Platform Management API covers foundational platform administration resources including identity management, audit log access, and licensing operations., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Automation Hub API provides access to the automation pipeline and idea management platform, allowing developers to programmatically create, retrieve, and manage automation ideas, projects, and pipeline data., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Test Manager API allows external tools and systems to integrate with UiPath's test management platform for managing test projects, test cases, test sets, requirements, and execution results programmatically., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Test Manager API allows external tools and systems to integrate with UiPath's test management platform for managing test projects, test cases, test sets, requirements, and execution results programmatically., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more., The UiPath Test Manager API allows external tools and systems to integrate with UiPath's test management platform for managing test projects, test cases, test sets, requirements, and execution results programmatically., The UiPath Test Manager API allows external tools and systems to integrate with UiPath's test management platform for managing test projects, test cases, test sets, requirements, and execution results programmatically., The UiPath Test Manager API allows external tools and systems to integrate with UiPath's test management platform for managing test projects, test cases, test sets, requirements, and execution results programmatically., Operations tagged Users across 3 of this provider's published API definitions: uipath-automation-hub-openapi.yml, uipath-orchestrator-openapi.yml, uipath-platform-management-openapi.yml. Each path carries the servers of the definition it was published in., The UiPath Document Understanding API enables programmatic access to intelligent document processing capabilities including digitization, classification, extraction, and validation of document content., The UiPath Orchestrator API provides programmatic access to the core automation management platform, enabling developers to manage robots, jobs, processes, queues, assets, schedules, and more.
/// </summary>
public sealed class UiPathClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public UiPathClient(HttpClient httpClient, UiPathClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "UiPathClient/2024.10 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "2024.10"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("UI_PATH_LOG"),
            "UiPathClient",
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

    /// <summary>
    /// Retrieve and manage system and automation alerts
    /// </summary>
    public Alerts Alerts => field ??= new Alerts(_rawClient, _server, _auth);

    /// <summary>
    /// Manage the application inventory used in automation assessments
    /// </summary>
    public AppInventory AppInventory => field ??= new AppInventory(_rawClient, _server, _auth);

    /// <summary>
    /// Manage shared assets such as credentials, text values, integers, and boolean values
    /// </summary>
    public Assets Assets => field ??= new Assets(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve and download organization and tenant audit event logs
    /// </summary>
    public AuditLogs AuditLogs => field ??= new AuditLogs(_rawClient, _server, _auth);

    /// <summary>
    /// Manage automation ideas and projects in the pipeline
    /// </summary>
    public Automations Automations => field ??= new Automations(_rawClient, _server, _auth);

    /// <summary>
    /// Classify documents into predefined document types
    /// </summary>
    public Classification Classification => field ??= new Classification(_rawClient, _server, _auth);

    /// <summary>
    /// Convert documents into a digitized format for downstream processing
    /// </summary>
    public Digitization Digitization => field ??= new Digitization(_rawClient, _server, _auth);

    /// <summary>
    /// Discover available projects, classifiers, and extractors
    /// </summary>
    public Discovery Discovery => field ??= new Discovery(_rawClient, _server, _auth);

    /// <summary>
    /// Perform CRUD operations on custom data entity records
    /// </summary>
    public Entities Entities => field ??= new Entities(_rawClient, _server, _auth);

    /// <summary>
    /// Extract structured data fields from documents
    /// </summary>
    public Extraction Extraction => field ??= new Extraction(_rawClient, _server, _auth);

    /// <summary>
    /// Manage organizational folders for grouping automation resources
    /// </summary>
    public Folders Folders => field ??= new Folders(_rawClient, _server, _auth);

    /// <summary>
    /// Manage user groups and group memberships
    /// </summary>
    public Groups Groups => field ??= new Groups(_rawClient, _server, _auth);

    /// <summary>
    /// Manage automation job execution, including starting, stopping, and querying job state
    /// </summary>
    public Jobs Jobs => field ??= new Jobs(_rawClient, _server, _auth);

    /// <summary>
    /// Manage license allocations across user groups and services
    /// </summary>
    public Licenses Licenses => field ??= new Licenses(_rawClient, _server, _auth);

    /// <summary>
    /// Manage machine templates and registered physical or virtual machines
    /// </summary>
    public Machines Machines => field ??= new Machines(_rawClient, _server, _auth);

    /// <summary>
    /// Manage automation package uploads and versions
    /// </summary>
    public Packages Packages => field ??= new Packages(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve automation pipeline data and status views
    /// </summary>
    public Pipeline Pipeline => field ??= new Pipeline(_rawClient, _server, _auth);

    /// <summary>
    /// Manage automation processes (published packages deployed to folders)
    /// </summary>
    public Processes Processes => field ??= new Processes(_rawClient, _server, _auth);

    /// <summary>
    /// Manage test projects within Test Manager
    /// </summary>
    public Projects Projects => field ??= new Projects(_rawClient, _server, _auth);

    /// <summary>
    /// Manage individual queue transaction items and their processing state
    /// </summary>
    public QueueItems QueueItems => field ??= new QueueItems(_rawClient, _server, _auth);

    /// <summary>
    /// Manage transaction queues for distributing work items to robots
    /// </summary>
    public Queues Queues => field ??= new Queues(_rawClient, _server, _auth);

    /// <summary>
    /// Manage requirements and their traceability links to test cases
    /// </summary>
    public Requirements Requirements => field ??= new Requirements(_rawClient, _server, _auth);

    /// <summary>
    /// Manage software robots registered with Orchestrator
    /// </summary>
    public Robots Robots => field ??= new Robots(_rawClient, _server, _auth);

    /// <summary>
    /// Manage roles and their associated permissions
    /// </summary>
    public Roles Roles => field ??= new Roles(_rawClient, _server, _auth);

    /// <summary>
    /// Manage time-based and recurring triggers for automation processes
    /// </summary>
    public Schedules Schedules => field ??= new Schedules(_rawClient, _server, _auth);

    /// <summary>
    /// Manage cloud storage buckets for storing automation artifacts
    /// </summary>
    public StorageBuckets StorageBuckets => field ??= new StorageBuckets(_rawClient, _server, _auth);

    /// <summary>
    /// Manage test cases and their definitions
    /// </summary>
    public TestCases TestCases => field ??= new TestCases(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve test execution results and logs
    /// </summary>
    public TestExecutions TestExecutions => field ??= new TestExecutions(_rawClient, _server, _auth);

    /// <summary>
    /// Manage test sets that group test cases for execution
    /// </summary>
    public TestSets TestSets => field ??= new TestSets(_rawClient, _server, _auth);

    /// <summary>
    /// Manage users and their roles within Automation Hub
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Validate and correct digitization, classification, and extraction results
    /// </summary>
    public ValidationApi ValidationApi => field ??= new ValidationApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage webhook subscriptions for Orchestrator event notifications
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
