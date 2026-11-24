using System.Net.Http;
using Skribble.Api;
using Skribble.Core;
using Skribble.Core.Configuration;
using Skribble.Core.Logging;
using Skribble.Core.Models;

namespace Skribble;

/// <summary>
/// Operations tagged Access across 5 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-validation-v1-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Additional Information across 2 of this provider's published API definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Billing and Credits across 2 of this provider's published API definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Document across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Identification across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Monitoring across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Report across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Reports across 2 of this provider's published API definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Seal across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged SendTo across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Signature across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Signature Attachment across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Signature Handling across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Signature Observer across 2 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Signature Signer across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged User across 3 of this provider's published API definitions: skribble-sign-v3-openapi.yml, skribble-sign-v2-openapi.yml, skribble-sign-v3-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Validation across 2 of this provider's published API definitions: skribble-validation-v1-openapi.yml, skribble-validation-v1-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class SkribbleClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public SkribbleClient(HttpClient httpClient, SkribbleClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "SkribbleClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("SKRIBBLE_LOG"),
            "SkribbleClient",
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
    /// Endpoints for authentication, authorization, and user access management.
    /// </summary>
    public Access Access => field ??= new Access(_rawClient, _server);

    /// <summary>
    /// Endpoints providing extra metadata or supplementary details for documents.
    /// </summary>
    public AdditionalInformation AdditionalInformation =>
        field ??= new AdditionalInformation(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing account credits, billing information, and payment operations.
    /// </summary>
    public BillingAndCredits BillingAndCredits => field ??= new BillingAndCredits(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for uploading and managing documents.
    /// </summary>
    public DocumentApi DocumentApi => field ??= new DocumentApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for retrieving, checking status, and downloading identification evidence
    /// collected during identification.
    /// </summary>
    public Identification Identification => field ??= new Identification(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for monitoring system health.
    /// </summary>
    public Monitoring Monitoring => field ??= new Monitoring(_rawClient, _server);

    /// <summary>
    /// Endpoints for signature activity reporting.
    /// </summary>
    public Report Report => field ??= new Report(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for generating, retrieving, and managing reports related to document processing.
    /// </summary>
    public Reports Reports => field ??= new Reports(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for applying electronic seals to documents.
    /// </summary>
    public Seal Seal => field ??= new Seal(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for the Send-To signing flow.
    /// </summary>
    public SendTo SendTo => field ??= new SendTo(_rawClient, _server);

    /// <summary>
    /// Endpoints for creating and managing signature requests.
    /// </summary>
    public Signature Signature => field ??= new Signature(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing attachments on a signature request.
    /// </summary>
    public SignatureAttachmentApi SignatureAttachmentApi =>
        field ??= new SignatureAttachmentApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for handling signature requests and callbacks.
    /// </summary>
    public SignatureHandling SignatureHandling => field ??= new SignatureHandling(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing observers on a signature request.
    /// </summary>
    public SignatureObserverApi SignatureObserverApi => field ??= new SignatureObserverApi(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for managing signers on a signature request.
    /// </summary>
    public SignatureSigner SignatureSigner => field ??= new SignatureSigner(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints for user information and signature quality queries.
    /// </summary>
    public User User => field ??= new User(_rawClient, _server, _auth);

    /// <summary>
    /// Endpoints to validate documents, data formats, and signatures.
    /// </summary>
    public ValidationApi ValidationApi => field ??= new ValidationApi(_rawClient, _server, _auth);
}
