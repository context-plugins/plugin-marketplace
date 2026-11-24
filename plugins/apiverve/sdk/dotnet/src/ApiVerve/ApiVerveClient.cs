using System.Net.Http;
using ApiVerve.Api;
using ApiVerve.Core;
using ApiVerve.Core.Configuration;
using ApiVerve.Core.Logging;
using ApiVerve.Core.Models;

namespace ApiVerve;

/// <summary>
/// One API key, 370+ real-world REST endpoints — weather, geocoding, finance, DNS, validation, text processing and more. Every endpoint returns JSON. Full documentation at https://docs.apiverve.com.
/// </summary>
public sealed class ApiVerveClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ApiVerveClient(HttpClient httpClient, ApiVerveClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ApiVerveClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("API_VERVE_LOG"),
            "ApiVerveClient",
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

    public AiComputerVision AiComputerVision => field ??= new AiComputerVision(_rawClient, _server, _auth);

    public Astrology Astrology => field ??= new Astrology(_rawClient, _server, _auth);

    public Calendar Calendar => field ??= new Calendar(_rawClient, _server, _auth);

    public DataConversion DataConversion => field ??= new DataConversion(_rawClient, _server, _auth);

    public DataGeneration DataGeneration => field ??= new DataGeneration(_rawClient, _server, _auth);

    public DataLookup DataLookup => field ??= new DataLookup(_rawClient, _server, _auth);

    public DataProcessing DataProcessing => field ??= new DataProcessing(_rawClient, _server, _auth);

    public DataScraping DataScraping => field ??= new DataScraping(_rawClient, _server, _auth);

    public DataValidation DataValidation => field ??= new DataValidation(_rawClient, _server, _auth);

    public Documents Documents => field ??= new Documents(_rawClient, _server, _auth);

    public DomainData DomainData => field ??= new DomainData(_rawClient, _server, _auth);

    public Entertainment Entertainment => field ??= new Entertainment(_rawClient, _server, _auth);

    public Finance Finance => field ??= new Finance(_rawClient, _server, _auth);

    public Food Food => field ??= new Food(_rawClient, _server, _auth);

    public Games Games => field ??= new Games(_rawClient, _server, _auth);

    public Geography Geography => field ??= new Geography(_rawClient, _server, _auth);

    public HealthWellness HealthWellness => field ??= new HealthWellness(_rawClient, _server, _auth);

    public Images Images => field ??= new Images(_rawClient, _server, _auth);

    public Lifestyle Lifestyle => field ??= new Lifestyle(_rawClient, _server, _auth);

    public MathCalculations MathCalculations => field ??= new MathCalculations(_rawClient, _server, _auth);

    public Networking Networking => field ??= new Networking(_rawClient, _server, _auth);

    public News News => field ??= new News(_rawClient, _server, _auth);

    public Parsers Parsers => field ??= new Parsers(_rawClient, _server, _auth);

    public ReferenceData ReferenceData => field ??= new ReferenceData(_rawClient, _server, _auth);

    public Science Science => field ??= new Science(_rawClient, _server, _auth);

    public Security Security => field ??= new Security(_rawClient, _server, _auth);

    public TextProcessing TextProcessing => field ??= new TextProcessing(_rawClient, _server, _auth);

    public Transportation Transportation => field ??= new Transportation(_rawClient, _server, _auth);

    public Weather Weather => field ??= new Weather(_rawClient, _server, _auth);
}
