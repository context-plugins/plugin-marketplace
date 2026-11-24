using System.Net.Http;
using DynamicFeed.Api;
using DynamicFeed.Core;
using DynamicFeed.Core.Configuration;
using DynamicFeed.Core.Logging;
using DynamicFeed.Core.Models;

namespace DynamicFeed;

/// <summary>
/// Fresh, current data that AI models lack — 20 live domains, 94 read-only tools, over one REST API or a keyless MCP endpoint.
/// </summary>
public sealed class DynamicFeedClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    public DynamicFeedClient(HttpClient httpClient, DynamicFeedClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "DynamicFeedClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("DYNAMIC_FEED_LOG"),
            "DynamicFeedClient",
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
    }

    public Advisories Advisories => field ??= new Advisories(_rawClient, _server);

    public Agent Agent => field ??= new Agent(_rawClient, _server);

    public AgentStats AgentStats => field ??= new AgentStats(_rawClient, _server);

    public AiModels AiModels => field ??= new AiModels(_rawClient, _server);

    public AirQuality AirQuality => field ??= new AirQuality(_rawClient, _server);

    public AirportDelays AirportDelays => field ??= new AirportDelays(_rawClient, _server);

    public Benchmarks Benchmarks => field ??= new Benchmarks(_rawClient, _server);

    public Billing Billing => field ??= new Billing(_rawClient, _server);

    public CarbonIntensity CarbonIntensity => field ??= new CarbonIntensity(_rawClient, _server);

    public China China => field ??= new China(_rawClient, _server);

    public Cite Cite => field ??= new Cite(_rawClient, _server);

    public Consensus Consensus => field ??= new Consensus(_rawClient, _server);

    public ConvertApi ConvertApi => field ??= new ConvertApi(_rawClient, _server);

    public Countdown Countdown => field ??= new Countdown(_rawClient, _server);

    public Dataset Dataset => field ??= new Dataset(_rawClient, _server);

    public Dev Dev => field ??= new Dev(_rawClient, _server);

    public Drought Drought => field ??= new Drought(_rawClient, _server);

    public DrugShortages DrugShortages => field ??= new DrugShortages(_rawClient, _server);

    public DynamicFeedLiveDataForAi DynamicFeedLiveDataForAi =>
        field ??= new DynamicFeedLiveDataForAi(_rawClient, _server);

    public Earthquakes Earthquakes => field ??= new Earthquakes(_rawClient, _server);

    public Energy Energy => field ??= new Energy(_rawClient, _server);

    public ExploitedVulnerabilities ExploitedVulnerabilities =>
        field ??= new ExploitedVulnerabilities(_rawClient, _server);

    public FederalRegister FederalRegister => field ??= new FederalRegister(_rawClient, _server);

    public Flights Flights => field ??= new Flights(_rawClient, _server);

    public Forecast Forecast => field ??= new Forecast(_rawClient, _server);

    public GlobalDisasters GlobalDisasters => field ??= new GlobalDisasters(_rawClient, _server);

    public GpsInterference GpsInterference => field ??= new GpsInterference(_rawClient, _server);

    public Health Health => field ??= new Health(_rawClient, _server);

    public History History => field ??= new History(_rawClient, _server);

    public Info Info => field ??= new Info(_rawClient, _server);

    public InternetOutages InternetOutages => field ??= new InternetOutages(_rawClient, _server);

    public Iss Iss => field ??= new Iss(_rawClient, _server);

    public Launches Launches => field ??= new Launches(_rawClient, _server);

    public Macro Macro => field ??= new Macro(_rawClient, _server);

    public MarketHours MarketHours => field ??= new MarketHours(_rawClient, _server);

    public ModelsApi ModelsApi => field ??= new ModelsApi(_rawClient, _server);

    public Movers Movers => field ??= new Movers(_rawClient, _server);

    public NaturalEvents NaturalEvents => field ??= new NaturalEvents(_rawClient, _server);

    public News News => field ??= new News(_rawClient, _server);

    public OrbitalDatacenters OrbitalDatacenters => field ??= new OrbitalDatacenters(_rawClient, _server);

    public Rates Rates => field ??= new Rates(_rawClient, _server);

    public RealityCheck RealityCheck => field ??= new RealityCheck(_rawClient, _server);

    public Recalls Recalls => field ??= new Recalls(_rawClient, _server);

    public Robot Robot => field ??= new Robot(_rawClient, _server);

    public Sanctions Sanctions => field ??= new Sanctions(_rawClient, _server);

    public Satellite Satellite => field ??= new Satellite(_rawClient, _server);

    public Satellites Satellites => field ??= new Satellites(_rawClient, _server);

    public SecFilings SecFilings => field ??= new SecFilings(_rawClient, _server);

    public Security Security => field ??= new Security(_rawClient, _server);

    public ServersApi ServersApi => field ??= new ServersApi(_rawClient, _server);

    public Shipping Shipping => field ??= new Shipping(_rawClient, _server);

    public Signals Signals => field ??= new Signals(_rawClient, _server);

    public Signup Signup => field ??= new Signup(_rawClient, _server);

    public SpaceWeather SpaceWeather => field ??= new SpaceWeather(_rawClient, _server);

    public Sports Sports => field ??= new Sports(_rawClient, _server);

    public Status Status => field ??= new Status(_rawClient, _server);

    public Tides Tides => field ??= new Tides(_rawClient, _server);

    public Time Time => field ??= new Time(_rawClient, _server);

    public TreasuryYields TreasuryYields => field ??= new TreasuryYields(_rawClient, _server);

    public Versions Versions => field ??= new Versions(_rawClient, _server);

    public Volcanoes Volcanoes => field ??= new Volcanoes(_rawClient, _server);

    public WaterLevels WaterLevels => field ??= new WaterLevels(_rawClient, _server);

    public Weather Weather => field ??= new Weather(_rawClient, _server);

    public WeatherAlerts WeatherAlerts => field ??= new WeatherAlerts(_rawClient, _server);

    public WhatsNew WhatsNew => field ??= new WhatsNew(_rawClient, _server);

    public Wildfires Wildfires => field ??= new Wildfires(_rawClient, _server);

    public WorldPulse WorldPulse => field ??= new WorldPulse(_rawClient, _server);

    public VerifiedFacts VerifiedFacts => field ??= new VerifiedFacts(_rawClient, _server);
}
