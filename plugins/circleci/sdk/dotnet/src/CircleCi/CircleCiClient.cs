using System.Net.Http;
using CircleCi.Api;
using CircleCi.Core;
using CircleCi.Core.Configuration;
using CircleCi.Core.Logging;
using CircleCi.Core.Models;

namespace CircleCi;

/// <summary>
/// The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., Operations tagged Project across 2 of this provider's published API definitions: circleci-rest-api-v1-openapi.yml, circleci-rest-api-v2-openapi.yml. Each path carries the servers of the definition it was published in., The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers., The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers., Operations tagged User across 2 of this provider's published API definitions: circleci-rest-api-v1-openapi.yml, circleci-rest-api-v2-openapi.yml. Each path carries the servers of the definition it was published in., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v2 provides programmatic access to CircleCI services for managing pipelines, projects, workflows, jobs, and users. Developers can trigger pipelines, retrieve build status, manage contexts and environment variables, and access usage reports. The API uses token-based authentication via a Circle-Token header and returns JSON responses. It supports operations for project configuration, workflow management, artifact retrieval, and insights into build performance., The CircleCI REST API v1 is the legacy API that provides access to build information, project details, and user data. While still available, CircleCI recommends migrating to the v2 API for newer features and improved functionality. The v1 API supports operations for retrieving build details, triggering builds, managing SSH keys, and accessing test metadata. Authentication is handled through API tokens passed as query parameters or HTTP headers.
/// </summary>
public sealed class CircleCiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CircleCiClient(HttpClient httpClient, CircleCiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CircleCiClient/1.1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CIRCLE_CI_LOG"),
            "CircleCiClient",
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
    /// Endpoints for listing and downloading build artifacts.
    /// </summary>
    public ArtifactApi ArtifactApi => field ??= new ArtifactApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving build details, triggering builds, retrying builds, and canceling builds.
    /// </summary>
    public BuildApi BuildApi => field ??= new BuildApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing contexts, which are used to secure and share environment variables across projects.
    /// </summary>
    public ContextApi ContextApi => field ??= new ContextApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving workflow and job metrics, summary data, and test performance insights.
    /// </summary>
    public Insights Insights => field ??= new Insights(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving job details, artifacts, and test metadata associated with pipeline jobs.
    /// </summary>
    public JobApi JobApi => field ??= new JobApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for triggering, retrieving, and managing pipelines and their configurations.
    /// </summary>
    public PipelineApi PipelineApi => field ??= new PipelineApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for listing followed projects and managing project settings.
    /// </summary>
    public ProjectApi ProjectApi => field ??= new ProjectApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing runner resource classes, which define the compute resources available for self-hosted runner jobs.
    /// </summary>
    public ResourceClassApi ResourceClassApi => field ??= new ResourceClassApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for listing and querying self-hosted runners and their status within a namespace or resource class.
    /// </summary>
    public RunnerApi RunnerApi => field ??= new RunnerApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for querying task counts and managing tasks assigned to self-hosted runners.
    /// </summary>
    public RunnerTask RunnerTask => field ??= new RunnerTask(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing SSH keys and checkout keys for projects.
    /// </summary>
    public SshKey SshKey => field ??= new SshKey(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for creating, updating, and managing scheduled pipeline triggers.
    /// </summary>
    public ScheduleApi ScheduleApi => field ??= new ScheduleApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving test metadata collected during builds.
    /// </summary>
    public TestMetadataApi TestMetadataApi => field ??= new TestMetadataApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving information about the authenticated user.
    /// </summary>
    public UserApi UserApi => field ??= new UserApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for creating, updating, listing, and deleting outbound webhook subscriptions.
    /// </summary>
    public Webhook Webhook => field ??= new Webhook(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving workflow details, managing workflow status, and rerunning workflows.
    /// </summary>
    public WorkflowApi WorkflowApi => field ??= new WorkflowApi(_rawClient, _server, _auth);
}
