using System.Net.Http;
using NordicFinancialNews.Api;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Configuration;
using NordicFinancialNews.Core.Logging;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews;

/// <summary>
/// REST API for Nordic financial news. Each article is summarized in English (headline, short summary, and key points) with the original-language article linked via <c>article_url</c>. The full article body stays at the source. ## Authentication
/// All endpoints require Bearer token authentication using an API key. Include the API key in the Authorization header:
/// <code>
/// Authorization: Bearer YOUR_API_KEY
/// </code>
/// <para>
/// ## Rate Limiting
/// Rate limits apply per account, shared across every API key on that account — not per
/// individual key:
/// - <b>Free</b>: 100 requests/hour
/// - <b>Plus</b>: 100 requests/hour
/// - <b>Pro</b>: 5,000 requests/hour
/// </para>
/// <para>
/// On Free and Plus, MCP tool calls have their own hourly and monthly allowance and do not
/// count toward these REST limits. On Pro, REST requests and MCP tool calls share one allowance. Rate limit information is included in response headers:
/// - <c>X-RateLimit-Limit</c>: Maximum requests per hour
/// - <c>X-RateLimit-Remaining</c>: Requests remaining
/// - <c>X-RateLimit-Reset</c>: Seconds until limit resets
/// - <c>X-RateLimit-Policy</c>: Human-readable rate limit policy (e.g. <c>5000 per hour; fixed window</c>)
/// </para>
/// <para>
/// A single client IP is additionally capped at 300 requests per 5-minute window, so
/// reaching your account's full hourly allowance requires spreading requests across more
/// than one source IP. The <c>/health</c> endpoint is exempt from rate limiting and does not return rate limit headers. ## Monthly Usage Limits
/// Free and Plus accounts have a fixed monthly allowance that resets at the start of each
/// calendar month, shared across every API key on the account:
/// - <b>Free</b>: 100 requests/month
/// - <b>Plus</b>: 100 requests/month
/// </para>
/// <para>
/// Responses on these plans include:
/// - <c>X-Monthly-Limit</c>: Maximum requests for the current month
/// - <c>X-Monthly-Remaining</c>: Requests remaining this month
/// - <c>X-Monthly-Reset</c>: ISO 8601 timestamp when the allowance resets
/// </para>
/// <para>
/// When the allowance is exceeded, the API returns <c>429 Too Many Requests</c> with a <c>Retry-After</c> header. Pro has no hard limit. It includes 25,000 requests per billing cycle, with usage-based
/// pricing beyond that, so requests are never blocked. Responses on Pro include:
/// - <c>X-Monthly-Usage</c>: Requests used in the current billing cycle
/// - <c>X-Monthly-Reset</c>: ISO 8601 timestamp when the current billing cycle ends
/// </para>
/// <para>
/// A Pro billing cycle follows your subscription's billing period, which begins on the
/// date you subscribed and is not necessarily a calendar month. Usage is counted by day,
/// so the first day of a billing cycle is counted in full. ## Caching
/// Every list and single-resource endpoint returns an <c>ETag</c>. Most also return
/// <c>Last-Modified</c> (on lists, when the page is not empty); <c>GET /stories/{id}</c> and the
/// Events endpoints do not. Send the ETag back as <c>If-None-Match</c>, or the date as
/// <c>If-Modified-Since</c>, to receive <c>304 Not Modified</c> when nothing has changed. A 304
/// has no body and does not count against the monthly request allowance. <c>GET /events</c>, <c>GET /events/{id}</c> and <c>GET /companies/{identifier}/events</c> return an
/// <c>ETag</c> but no <c>Last-Modified</c>, so revalidate those routes with <c>If-None-Match</c>. An
/// event's visible company and story membership, and its live article count, all change
/// without moving its <c>updated_at</c>, so a date-based validator would report "not
/// modified" across a change the <c>ETag</c> catches. Some requests are never cached and return <c>Cache-Control: no-cache, no-store</c> with
/// no <c>ETag</c>: full-text search (<c>q</c>), <c>updated_after</c> sync requests, and <c>GET /search</c>. The <c>ETag</c> reflects the response as served, not only record timestamps. On articles
/// and stories, including the company-scoped routes, and on <c>GET /calendar_events</c>, it
/// changes when a plan limit alters the visible set, and on stories when a story's
/// visible article set changes. A changed <c>ETag</c> does not necessarily mean a record was
/// updated. On the Events endpoints the <c>ETag</c> additionally covers each event's visible
/// company and story ids and its live article count, none of which move the event's
/// <c>updated_at</c>. ## Pagination
/// List endpoints support cursor-based pagination.
/// </para>
/// </summary>
public sealed class NordicFinancialNewsClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public NordicFinancialNewsClient(HttpClient httpClient, NordicFinancialNewsClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "NordicFinancialNewsClient/v1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("NORDIC_FINANCIAL_NEWS_LOG"),
            "NordicFinancialNewsClient",
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

    public ArticlesApi ArticlesApi => field ??= new ArticlesApi(_rawClient, _server, _auth);

    public CalendarEvents CalendarEvents => field ??= new CalendarEvents(_rawClient, _server, _auth);

    public Categories Categories => field ??= new Categories(_rawClient, _server, _auth);

    public CompaniesApi CompaniesApi => field ??= new CompaniesApi(_rawClient, _server, _auth);

    public CountriesApi CountriesApi => field ??= new CountriesApi(_rawClient, _server, _auth);

    public EventTypes EventTypes => field ??= new EventTypes(_rawClient, _server, _auth);

    public Events Events => field ??= new Events(_rawClient, _server, _auth);

    public ExchangesApi ExchangesApi => field ??= new ExchangesApi(_rawClient, _server, _auth);

    public Health Health => field ??= new Health(_rawClient, _server);

    public IndicesApi IndicesApi => field ??= new IndicesApi(_rawClient, _server, _auth);

    public Meta Meta => field ??= new Meta(_rawClient, _server, _auth);

    public SearchApi SearchApi => field ??= new SearchApi(_rawClient, _server, _auth);

    public Sources Sources => field ??= new Sources(_rawClient, _server, _auth);

    public StoriesApi StoriesApi => field ??= new StoriesApi(_rawClient, _server, _auth);

    public Watchlists Watchlists => field ??= new Watchlists(_rawClient, _server, _auth);
}
