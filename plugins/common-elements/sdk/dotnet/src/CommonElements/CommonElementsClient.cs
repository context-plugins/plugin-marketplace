using System.Net.Http;
using CommonElements.Api;
using CommonElements.Core;
using CommonElements.Core.Configuration;
using CommonElements.Core.Logging;
using CommonElements.Core.Models;

namespace CommonElements;

/// <summary>
/// Operations tagged Aggregates and compliance across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Association resources across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Associations across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Bulk delivery across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Bulk export across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Change feed across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Cross-association collections across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Dataset catalog across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Meta across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Professionals and licenses across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Statutes across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in., Operations tagged Vendors across 2 of this provider's published API definitions: commonelements-com-openapi.json, commonelements-com-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class CommonElementsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CommonElementsClient(HttpClient httpClient, CommonElementsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CommonElementsClient/1.4.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.4.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("COMMON_ELEMENTS_LOG"),
            "CommonElementsClient",
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

    public AggregatesAndCompliance AggregatesAndCompliance =>
        field ??= new AggregatesAndCompliance(_rawClient, _server, _auth);

    /// <summary>
    /// Public record joined to one association: parcels, structures, permits, code enforcement, hazards, insurance, legal, financials, governance and documents. Same request shape for every one, so a client written against one works against all ten.
    /// </summary>
    public AssociationResources AssociationResources => field ??= new AssociationResources(_rawClient, _server, _auth);

    public Associations Associations => field ??= new Associations(_rawClient, _server, _auth);

    /// <summary>
    /// Asynchronous exports for datasets larger than one HTTP response. Request, poll, download a durable artifact with a manifest and a column dictionary beside it — or put it on a schedule and stop asking. Growth plan and above.
    /// </summary>
    public BulkDelivery BulkDelivery => field ??= new BulkDelivery(_rawClient, _server, _auth);

    /// <summary>
    /// Stream a full dataset as CSV or JSON. Growth plan or higher.
    /// </summary>
    public BulkExport BulkExport => field ??= new BulkExport(_rawClient, _server, _auth);

    /// <summary>
    /// What changed, and when. The rest of the API describes the association graph as it stands today; this describes it moving.
    /// </summary>
    public ChangeFeed ChangeFeed => field ??= new ChangeFeed(_rawClient, _server, _auth);

    /// <summary>
    /// The same corpora queried across associations, where the buyer genuinely asks the question that way and an indexed filter exists to answer it.
    /// </summary>
    public CrossAssociationCollections CrossAssociationCollections =>
        field ??= new CrossAssociationCollections(_rawClient, _server, _auth);

    /// <summary>
    /// What the platform holds, and what it holds for one association. Start here: the catalog names every resource, the plan it needs, and the caveat that stops an unmatched jurisdiction reading as a clean record.
    /// </summary>
    public DatasetCatalog DatasetCatalog => field ??= new DatasetCatalog(_rawClient, _server, _auth);

    /// <summary>
    /// Spec, status, usage, and the data dictionary.
    /// </summary>
    public Meta Meta => field ??= new Meta(_rawClient, _server, _auth);

    public ProfessionalsAndLicenses ProfessionalsAndLicenses =>
        field ??= new ProfessionalsAndLicenses(_rawClient, _server, _auth);

    public Statutes Statutes => field ??= new Statutes(_rawClient, _server, _auth);

    public Vendors Vendors => field ??= new Vendors(_rawClient, _server, _auth);
}
