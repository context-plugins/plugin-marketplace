using System.Net.Http;
using Boomi.Api;
using Boomi.Core;
using Boomi.Core.Configuration;
using Boomi.Core.Logging;
using Boomi.Core.Models;

namespace Boomi;

/// <summary>
/// The Boomi Platform REST API provides programmatic access to the Boomi Enterprise Platform. It allows control of objects associated with your account including account administration, cloud management, component management, deployment, environment management, execution statistics, integration packs, process execution, and runtime management. The API follows an object/verb hierarchy and uses Basic Authentication with the account ID embedded in the URL path., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi Event Streams REST API enables HTTP-based applications to produce messages to event topics. It supports two operational modes: multiple messages in a predefined JSON format, and single messages in their original format without transformation. The API accommodates messages up to 5 MB and enforces a rate limit of 60,000 requests per IP per 5-minute window. Each topic has a unique REST API URL available in the Event Streams UI. Authentication uses an Environment Token as a Bearer token., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi Platform REST API provides programmatic access to the Boomi Enterprise Platform. It allows control of objects associated with your account including account administration, cloud management, component management, deployment, environment management, execution statistics, integration packs, process execution, and runtime management. The API follows an object/verb hierarchy and uses Basic Authentication with the account ID embedded in the URL path., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours)., The Boomi DataHub REST API provides programmatic access to master data management operations. It consists of two layers: the Platform API for managing repositories, models, sources, and domains; and the Repository API for querying and manipulating golden records and staged entities. The Platform API uses Basic Authentication while the Repository API supports JWT authentication. Requests are subject to usage limits based on licensed connectors (1,000 times the number of connectors per 24 hours).
/// </summary>
public sealed class BoomiClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public BoomiClient(HttpClient httpClient, BoomiClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "BoomiClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("BOOMI_LOG"),
            "BoomiClient",
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
    /// Manage Boomi Atoms — the lightweight runtime engines that execute integration processes.
    /// </summary>
    public Atoms Atoms => field ??= new Atoms(_rawClient, _server, _auth);

    /// <summary>
    /// Manage packaged components and integration pack attachments.
    /// </summary>
    public Components Components => field ??= new Components(_rawClient, _server, _auth);

    /// <summary>
    /// Manage deployed packages and the deployment of integration components to environments.
    /// </summary>
    public Deployments Deployments => field ??= new Deployments(_rawClient, _server, _auth);

    /// <summary>
    /// Manage runtime environments where Boomi Atoms and Molecules are deployed to run integration processes.
    /// </summary>
    public Environments Environments => field ??= new Environments(_rawClient, _server, _auth);

    /// <summary>
    /// Execute integration processes and retrieve execution statistics and job results.
    /// </summary>
    public Execution Execution => field ??= new Execution(_rawClient, _server, _auth);

    /// <summary>
    /// Query and manage the authoritative master records that result from matching and merging source records.
    /// </summary>
    public GoldenRecords GoldenRecords => field ??= new GoldenRecords(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for producing messages to Boomi Event Streams topics via HTTP REST calls.
    /// </summary>
    public Messages Messages => field ??= new Messages(_rawClient, _server, _auth);

    /// <summary>
    /// Manage data models that define the schema and rules for master data domains.
    /// </summary>
    public ModelsApi ModelsApi => field ??= new ModelsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Manage integration processes (recipes) within the Boomi platform.
    /// </summary>
    public Processes Processes => field ??= new Processes(_rawClient, _server, _auth);

    /// <summary>
    /// Manage quarantined records that could not be automatically processed due to data quality issues.
    /// </summary>
    public Quarantine Quarantine => field ??= new Quarantine(_rawClient, _server, _auth);

    /// <summary>
    /// Manage DataHub repositories that contain master data domains.
    /// </summary>
    public Repositories Repositories => field ??= new Repositories(_rawClient, _server, _auth);

    /// <summary>
    /// Manage data sources that contribute records to the master data hub for matching and merging.
    /// </summary>
    public Sources Sources => field ??= new Sources(_rawClient, _server, _auth);
}
