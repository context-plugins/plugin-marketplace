using System.Net.Http;
using PrismaReviews.Api;
using PrismaReviews.Core;
using PrismaReviews.Core.Configuration;
using PrismaReviews.Core.Logging;
using PrismaReviews.Core.Models;

namespace PrismaReviews;

/// <summary>
/// Read the reviews of the businesses and apps you own or manage on the App Store, Google Play, Judge.me, eBay, Trusted Shops, eKomi, Yelp, Tripadvisor, Booking.com, G2 and 50+ more platforms, all in one normalized JSON shape, and reply through each platform's official API where it has one (read-only platforms return the link where a review is answered). Google Business Profile, Trustpilot, Allegro, Etsy, Angi and Mercado Libre are coming soon: <c>GET /v1/platforms</c> says which platforms are ready (<c>live_ready</c>).
/// <list type="bullet">
///   <item><description><b>Auth:</b> <c>Authorization: Bearer </c>. Live keys (<c>pk_live_…</c>) work with real accounts; test keys (<c>pk_test_…</c>) connect any platform with sample locations and reviews and never publish replies. Test and live data never mix.</description></item>
///   <item><description><b>Format:</b> JSON in and out; timestamps are ISO 8601 in UTC; IDs are prefixed (<c>rev_</c>, <c>loc_</c>, <c>con_</c>, <c>we_</c>, <c>evt_</c>, <c>req_</c>).</description></item>
///   <item><description><b>Pagination:</b> <c>GET /v1/reviews</c> is cursor paginated (<c>data</c> + <c>next_cursor</c>).</description></item>
///   <item><description><b>Rate limits:</b> per key and per minute, set by the plan (Spark 60, Beam 120, Spectrum 600, Aurora 1,200), reported in <c>X-RateLimit-Limit</c> and <c>X-RateLimit-Remaining</c>.</description></item>
///   <item><description><b>Errors:</b> one shape, <c>{ "error": { "type", "code", "message", "retryable", "request_id", "docs_url" } }</c>; codes on https://prismareviews.com/docs/errors.</description></item>
///   <item><description><b>Webhooks:</b> signed <c>POST</c>s for new and updated reviews, published or failed replies and connection changes.</description></item>
/// </list>
/// <para>
/// Get a free API key at https://app.prismareviews.com/signup.
/// </para>
/// </summary>
public sealed class PrismaReviewsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public PrismaReviewsClient(HttpClient httpClient, PrismaReviewsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "PrismaReviewsClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("PRISMA_REVIEWS_LOG"),
            "PrismaReviewsClient",
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
    /// Connect platform accounts by OAuth, credentials or listing URL, or with a connect link.
    /// </summary>
    public Connections Connections => field ??= new Connections(_rawClient, _server, _auth);

    /// <summary>
    /// The places, apps, shops and listings that receive reviews.
    /// </summary>
    public LocationsApi LocationsApi => field ??= new LocationsApi(_rawClient, _server, _auth);

    /// <summary>
    /// How each platform connects, the fields it needs and whether your workspace can connect it.
    /// </summary>
    public Platforms Platforms => field ??= new Platforms(_rawClient, _server, _auth);

    /// <summary>
    /// Publish and delete replies through each platform's official API.
    /// </summary>
    public Replies Replies => field ??= new Replies(_rawClient, _server, _auth);

    /// <summary>
    /// Reviews from every connected location, in one JSON shape.
    /// </summary>
    public Reviews Reviews => field ??= new Reviews(_rawClient, _server, _auth);

    /// <summary>
    /// Review statistics per workspace, location or platform.
    /// </summary>
    public StatsApi StatsApi => field ??= new StatsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Your plan and this month's usage.
    /// </summary>
    public UsageApi UsageApi => field ??= new UsageApi(_rawClient, _server, _auth);

    /// <summary>
    /// Signed event deliveries to your HTTPS endpoints.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);
}
