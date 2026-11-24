using System.Net.Http;
using WhoisFreaks.Api;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Configuration;
using WhoisFreaks.Core.Logging;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks;

/// <summary>
/// Complete WhoisFreaks API — WHOIS, DNS, SSL, Geolocation, Typosquatting,
/// IP Intelligence, Domain Reputation, and bulk database downloads.
/// <para>
/// ## Authentication
/// All requests require an <c>apiKey</c> query parameter.
/// </para>
/// <para>
/// ## Resources
/// - Docs: https://whoisfreaks.com/documentation
/// - Billing: https://billing.whoisfreaks.com
/// - Support: support@whoisfreaks.com
/// </para>
/// </summary>
public sealed class WhoisFreaksClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public WhoisFreaksClient(HttpClient httpClient, WhoisFreaksClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "WhoisFreaksClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("WHOIS_FREAKS_LOG"),
            "WhoisFreaksClient",
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
    /// Autonomous System Number WHOIS
    /// </summary>
    public AsnWhois AsnWhois => field ??= new AsnWhois(_rawClient, _server, _auth);

    /// <summary>
    /// Account, API key, and usage utilities
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// DNS lookup APIs (live, historical, reverse, bulk)
    /// </summary>
    public Dns Dns => field ??= new Dns(_rawClient, _server, _auth);

    /// <summary>
    /// ASN WHOIS database snapshots
    /// </summary>
    public DatabasesAsnWhois DatabasesAsnWhois => field ??= new DatabasesAsnWhois(_rawClient, _server, _auth);

    /// <summary>
    /// DNS database snapshots
    /// </summary>
    public DatabasesDns DatabasesDns => field ??= new DatabasesDns(_rawClient, _server, _auth);

    /// <summary>
    /// Expiring and dropped domain downloads
    /// </summary>
    public DatabasesExpiringDropped DatabasesExpiringDropped =>
        field ??= new DatabasesExpiringDropped(_rawClient, _server, _auth);

    /// <summary>
    /// IP geolocation database snapshots
    /// </summary>
    public DatabasesIpGeolocation DatabasesIpGeolocation =>
        field ??= new DatabasesIpGeolocation(_rawClient, _server, _auth);

    /// <summary>
    /// IP security database snapshots
    /// </summary>
    public DatabasesIpSecurity DatabasesIpSecurity => field ??= new DatabasesIpSecurity(_rawClient, _server, _auth);

    /// <summary>
    /// IP WHOIS database snapshots
    /// </summary>
    public DatabasesIpWhois DatabasesIpWhois => field ??= new DatabasesIpWhois(_rawClient, _server, _auth);

    /// <summary>
    /// Newly registered domain downloads
    /// </summary>
    public DatabasesNewlyRegistered DatabasesNewlyRegistered =>
        field ??= new DatabasesNewlyRegistered(_rawClient, _server, _auth);

    /// <summary>
    /// Subdomain database snapshots
    /// </summary>
    public DatabasesSubdomains DatabasesSubdomains => field ??= new DatabasesSubdomains(_rawClient, _server, _auth);

    public DatabasesThreatFeed DatabasesThreatFeed => field ??= new DatabasesThreatFeed(_rawClient, _server, _auth);

    /// <summary>
    /// WHOIS database snapshots
    /// </summary>
    public DatabasesWhois DatabasesWhois => field ??= new DatabasesWhois(_rawClient, _server, _auth);

    /// <summary>
    /// Check domain availability
    /// </summary>
    public DomainAvailability DomainAvailability => field ??= new DomainAvailability(_rawClient, _server, _auth);

    /// <summary>
    /// Real-time domain threat assessment and trust scoring
    /// </summary>
    public DomainReputation DomainReputation => field ??= new DomainReputation(_rawClient, _server, _auth);

    /// <summary>
    /// IP geolocation lookup
    /// </summary>
    public Geolocation Geolocation => field ??= new Geolocation(_rawClient, _server, _auth);

    /// <summary>
    /// IP threat intelligence
    /// </summary>
    public IpReputation IpReputation => field ??= new IpReputation(_rawClient, _server, _auth);

    /// <summary>
    /// IP address WHOIS
    /// </summary>
    public IpWhois IpWhois => field ??= new IpWhois(_rawClient, _server, _auth);

    /// <summary>
    /// SSL certificate lookup
    /// </summary>
    public Ssl Ssl => field ??= new Ssl(_rawClient, _server, _auth);

    /// <summary>
    /// Subdomain enumeration
    /// </summary>
    public Subdomains Subdomains => field ??= new Subdomains(_rawClient, _server, _auth);

    /// <summary>
    /// Detect typo variants of brand domains
    /// </summary>
    public Typosquatting Typosquatting => field ??= new Typosquatting(_rawClient, _server, _auth);

    /// <summary>
    /// WHOIS lookup APIs (live, historical, reverse, bulk)
    /// </summary>
    public Whois Whois => field ??= new Whois(_rawClient, _server, _auth);
}
