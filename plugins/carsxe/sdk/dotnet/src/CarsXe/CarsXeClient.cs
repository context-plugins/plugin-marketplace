using System.Net.Http;
using CarsXe.Api;
using CarsXe.Core;
using CarsXe.Core.Configuration;
using CarsXe.Core.Logging;
using CarsXe.Core.Models;

namespace CarsXe;

/// <summary>
/// CarsXE is a vehicle data API platform offering VIN decoding, vehicle specifications, market value, license plate decoding, vehicle recalls and related lookups. All endpoints accept an API key as a query string parameter <c>key</c>., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC., CarsXE is a B2B vehicle data API by PiWaves, LLC.
/// </summary>
public sealed class CarsXeClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CarsXeClient(HttpClient httpClient, CarsXeClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CarsXeClient/1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CARS_XE_LOG"),
            "CarsXeClient",
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

    public Auth Auth => field ??= new Auth(_rawClient, _server, _auth);

    /// <summary>
    /// Vehicle history reports
    /// </summary>
    public History History => field ??= new History(_rawClient, _server, _auth);

    /// <summary>
    /// Vehicle images by make/model
    /// </summary>
    public Images Images => field ??= new Images(_rawClient, _server, _auth);

    /// <summary>
    /// Lien and theft records by VIN
    /// </summary>
    public LienTheft LienTheft => field ??= new LienTheft(_rawClient, _server, _auth);

    /// <summary>
    /// Vehicle market value by VIN
    /// </summary>
    public MarketValue MarketValue => field ??= new MarketValue(_rawClient, _server, _auth);

    /// <summary>
    /// Decode license plates into vehicle data
    /// </summary>
    public PlateDecoder PlateDecoder => field ??= new PlateDecoder(_rawClient, _server, _auth);

    /// <summary>
    /// Safety recalls by VIN, including bulk batches
    /// </summary>
    public Recalls Recalls => field ??= new Recalls(_rawClient, _server, _auth);

    /// <summary>
    /// Plate and VIN recognition from images
    /// </summary>
    public Recognition Recognition => field ??= new Recognition(_rawClient, _server, _auth);

    /// <summary>
    /// VIN decoding and vehicle specifications
    /// </summary>
    public Specifications Specifications => field ??= new Specifications(_rawClient, _server, _auth);

    /// <summary>
    /// Year/make/model and OBD code endpoints
    /// </summary>
    public YearMakeModel YearMakeModel => field ??= new YearMakeModel(_rawClient, _server, _auth);
}
