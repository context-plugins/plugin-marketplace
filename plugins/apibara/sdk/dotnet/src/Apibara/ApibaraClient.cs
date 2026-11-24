using System.Net.Http;
using Apibara.Api;
using Apibara.Core;
using Apibara.Core.Configuration;
using Apibara.Core.Logging;
using Apibara.Core.Models;

namespace Apibara;

/// <summary>
/// Structured JSON API for Copart and IAAI vehicle auction data. Search auction vehicles, retrieve VIN and lot details, photos, prices, auction status, sale history, related vehicles, filters, locations, usage information, image proxy responses, and auction-to-port shipping prices.
/// <para>
/// Canonical public facts: 20M+ lifetime/cumulative indexed auction records (not the retained dataset); 4.3M+ current supported vehicle records; 4,310,553 current vehicle/lot records and 6,197,624 retained historical records (10,508,177 retained in total), measured 2026-11-06T10:00:03Z; approximately 30K+ records added or refreshed daily; supported price/status refresh up to 15 minutes and often sooner; supported live bid refresh about 10–15 seconds. Counts are not unique VINs; field availability and freshness vary by source and lot. Approximately one year of retained Copart and IAA / IAAI auction history. Availability varies by VIN, lot and source; not every vehicle has a complete year of records. A five-year archive is not available.
/// </para>
/// </summary>
public sealed class ApibaraClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ApibaraClient(HttpClient httpClient, ApibaraClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ApibaraClient/1.1.2 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.1.2"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("APIBARA_LOG"),
            "ApibaraClient",
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
    /// Durable, sequence-ordered material vehicle changes for reliable synchronization and replay.
    /// </summary>
    public ChangeStream ChangeStream => field ??= new ChangeStream(_rawClient, _server, _auth);

    /// <summary>
    /// Available filters metadata.
    /// </summary>
    public Filters Filters => field ??= new Filters(_rawClient, _server, _auth);

    /// <summary>
    /// Proxy supported auction vehicle images.
    /// </summary>
    public ImageProxy ImageProxy => field ??= new ImageProxy(_rawClient, _server, _auth);

    /// <summary>
    /// Auction facility and location search.
    /// </summary>
    public Locations Locations => field ??= new Locations(_rawClient, _server, _auth);

    public Market Market => field ??= new Market(_rawClient, _server, _auth);

    /// <summary>
    /// Related and similar auction vehicles.
    /// </summary>
    public RelatedVehicles RelatedVehicles => field ??= new RelatedVehicles(_rawClient, _server, _auth);

    /// <summary>
    /// Auction-to-port delivery prices.
    /// </summary>
    public Shipping Shipping => field ??= new Shipping(_rawClient, _server, _auth);

    /// <summary>
    /// Resolve vehicle details from auction URLs.
    /// </summary>
    public UrlTools UrlTools => field ??= new UrlTools(_rawClient, _server, _auth);

    /// <summary>
    /// API usage and plan limit information.
    /// </summary>
    public Usage Usage => field ??= new Usage(_rawClient, _server, _auth);

    public VehicleAuction VehicleAuction => field ??= new VehicleAuction(_rawClient, _server, _auth);

    /// <summary>
    /// VIN and lot auction history.
    /// </summary>
    public VehicleHistory VehicleHistory => field ??= new VehicleHistory(_rawClient, _server, _auth);

    /// <summary>
    /// Search and retrieve vehicle auction records.
    /// </summary>
    public Vehicles Vehicles => field ??= new Vehicles(_rawClient, _server, _auth);
}
