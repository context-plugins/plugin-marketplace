using System.Net.Http;
using Soda.Api;
using Soda.Core;
using Soda.Core.Configuration;
using Soda.Core.Logging;
using Soda.Core.Models;

namespace Soda;

/// <summary>
/// The Soda Cloud REST API (v4 public API). Assembled verbatim from the OpenAPI 3.1.0 documents Soda publishes inside each REST API reference page at https://docs.soda.io/reference/soda-apis/rest-api/.
/// </summary>
public sealed class SodaClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SodaClient(HttpClient httpClient, SodaClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SodaClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SODA_LOG"),
            "SodaClient",
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
    /// Soda Cloud API Attribute Endpoints
    /// </summary>
    public AttributesApi AttributesApi => field ??= new AttributesApi(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Check Endpoints
    /// </summary>
    public Checks Checks => field ??= new Checks(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Contract Endpoints
    /// </summary>
    public Contracts Contracts => field ??= new Contracts(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Datasource Endpoints
    /// </summary>
    public DataSources DataSources => field ??= new DataSources(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Data Standard Endpoints
    /// </summary>
    public DataStandards DataStandards => field ??= new DataStandards(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Dataset Endpoints
    /// </summary>
    public Datasets Datasets => field ??= new Datasets(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Discovered Dataset Endpoints
    /// </summary>
    public DiscoveredDatasets DiscoveredDatasets => field ??= new DiscoveredDatasets(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Incidents Endpoints
    /// </summary>
    public Incidents Incidents => field ??= new Incidents(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Licensing Endpoints
    /// </summary>
    public Licensing Licensing => field ??= new Licensing(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Notification Rule Endpoints
    /// </summary>
    public NotificationRules NotificationRules => field ??= new NotificationRules(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Runner Endpoints
    /// </summary>
    public Runners Runners => field ??= new Runners(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Scan Endpoints
    /// </summary>
    public Scans Scans => field ??= new Scans(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Secret Endpoints
    /// </summary>
    public Secrets Secrets => field ??= new Secrets(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Users Endpoints
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// Soda Cloud API Utility Endpoints
    /// </summary>
    public Utility Utility => field ??= new Utility(_rawClient, _server, _auth);
}
