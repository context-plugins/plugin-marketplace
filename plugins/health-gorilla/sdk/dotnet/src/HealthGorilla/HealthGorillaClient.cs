using System.Net.Http;
using HealthGorilla.Api;
using HealthGorilla.Core;
using HealthGorilla.Core.Configuration;
using HealthGorilla.Core.Logging;
using HealthGorilla.Core.Models;

namespace HealthGorilla;

/// <summary>
/// HL7 FHIR R4 REST API for the Health Gorilla health-data interoperability network. Provides access to patient records, person-authorized federated record retrieval across national exchange networks (QHIN / TEFCA), diagnostic (lab and radiology) ordering and results, clinical documents, and coverage/eligibility data. All requests require OAuth 2.0 bearer authentication.
/// </summary>
public sealed class HealthGorillaClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public HealthGorillaClient(HttpClient httpClient, HealthGorillaClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "HealthGorillaClient/R4 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "R4"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("HEALTH_GORILLA_LOG"),
            "HealthGorillaClient",
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
    /// Raw clinical document content.
    /// </summary>
    public BinaryApi BinaryApi => field ??= new BinaryApi(_rawClient, _server, _auth);

    /// <summary>
    /// FHIR server capability discovery.
    /// </summary>
    public CapabilityStatementApi CapabilityStatementApi =>
        field ??= new CapabilityStatementApi(_rawClient, _server, _auth);

    /// <summary>
    /// Patient insurance coverage / eligibility.
    /// </summary>
    public CoverageApi CoverageApi => field ??= new CoverageApi(_rawClient, _server, _auth);

    /// <summary>
    /// Structured lab and radiology results.
    /// </summary>
    public DiagnosticReportApi DiagnosticReportApi => field ??= new DiagnosticReportApi(_rawClient, _server, _auth);

    /// <summary>
    /// Clinical document metadata.
    /// </summary>
    public DocumentReferenceApi DocumentReferenceApi => field ??= new DocumentReferenceApi(_rawClient, _server, _auth);

    /// <summary>
    /// Individual result observations.
    /// </summary>
    public Observation Observation => field ??= new Observation(_rawClient, _server, _auth);

    /// <summary>
    /// Patient demographics and patient-scoped record retrieval.
    /// </summary>
    public PatientApi PatientApi => field ??= new PatientApi(_rawClient, _server, _auth);

    /// <summary>
    /// Ordering and rendering providers.
    /// </summary>
    public PractitionerApi PractitionerApi => field ??= new PractitionerApi(_rawClient, _server, _auth);

    /// <summary>
    /// Parent diagnostic orders nesting individual ServiceRequest tests.
    /// </summary>
    public RequestGroupApi RequestGroupApi => field ??= new RequestGroupApi(_rawClient, _server, _auth);

    /// <summary>
    /// Diagnostic (lab and radiology) order requests.
    /// </summary>
    public ServiceRequestApi ServiceRequestApi => field ??= new ServiceRequestApi(_rawClient, _server, _auth);
}
