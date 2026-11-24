using System.Net.Http;
using Lusha.Api;
using Lusha.Core;
using Lusha.Core.Configuration;
using Lusha.Core.Logging;
using Lusha.Core.Models;

namespace Lusha;

/// <summary>
/// <b>This is the Lusha API V3 documentation.</b>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., ⚠️ <b>This version is soon to be deprecated.</b> Please migrate to V3., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., ⚠️ <b>This version is soon to be deprecated.</b> Please migrate to V3., ⚠️ <b>This version is soon to be deprecated.</b> Please migrate to V3., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., ⚠️ <b>This version is soon to be deprecated.</b> Please migrate to V3., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., Operations tagged Lookalikes across 2 of this provider's published API definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the definition it was published in., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., ⚠️ <b>This version is soon to be deprecated.</b> Please migrate to V3., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities., Operations tagged Signals across 2 of this provider's published API definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the definition it was published in., Operations tagged Webhooks across 2 of this provider's published API definitions: lusha-openapi.yml, lusha-v2-openapi.yaml. Each path carries the servers of the definition it was published in., <b>This is the Lusha API V3 documentation.</b>
/// </para>
/// <para>
/// V3 introduces a new search-then-enrich pattern, bulk operations, AI-powered lookalikes, and richer filter capabilities.
/// </para>
/// </summary>
public sealed class LushaClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public LushaClient(HttpClient httpClient, LushaClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "LushaClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("LUSHA_LOG"),
            "LushaClient",
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
    /// <b>Account API:</b> Retrieve account usage, credit balance, rate limits, plan details, and pricing.
    /// <para>
    /// Use this endpoint to monitor consumption and understand the credit cost of each action type in the public API flow.
    /// </para>
    /// <para>
    /// &gt; <b>Rate limit:</b> 5 requests per minute.
    /// </para>
    /// </summary>
    public Account Account => field ??= new Account(_rawClient, _server, _auth);

    /// <summary>
    /// Manage your account and monitor usage.
    /// <para>
    /// Use this endpoint to:
    /// - Monitor credit usage
    /// - Understand consumption patterns
    /// - Align API usage with plan limits
    /// - Support governance and production operations
    /// </para>
    /// <para>
    /// Account-level insights are especially important for teams running Lusha at scale or across multiple systems.
    /// </para>
    /// </summary>
    public AccountManagement AccountManagement => field ??= new AccountManagement(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Buying Group API:</b> Identify and prioritize the buying committee within a set of target companies.
    /// </summary>
    public BuyingGroup BuyingGroup => field ??= new BuyingGroup(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Companies Tables API:</b> Create and manage persistent tables of companies inside Lusha.
    /// </summary>
    public CompaniesTables CompaniesTables => field ??= new CompaniesTables(_rawClient, _server, _auth);

    /// <summary>
    /// Available filters for company searches
    /// </summary>
    public CompanyFiltersApi CompanyFiltersApi => field ??= new CompanyFiltersApi(_rawClient, _server, _auth);

    /// <summary>
    /// Available filters for contact searches
    /// </summary>
    public ContactFiltersApi ContactFiltersApi => field ??= new ContactFiltersApi(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Contacts Tables API:</b> Create and manage persistent tables of contacts inside Lusha.
    /// </summary>
    public ContactsTables ContactsTables => field ??= new ContactsTables(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Enrich APIs:</b> Retrieve full profile data for contacts or companies by ID.
    /// <para>
    /// Pass IDs from Search results to reveal emails, phones, and full firmographic data.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per revealed field via per-datapoint pricing (<c>revealEmail</c>, <c>revealPhone</c>, <c>reveal_company</c>).
    /// </para>
    /// </summary>
    public Enrich Enrich => field ??= new Enrich(_rawClient, _server, _auth);

    /// <summary>
    /// <b>What is enrichment?</b>
    /// <para>
    /// Enrichment is the process of adding missing or updated data to existing contact or company records.
    /// </para>
    /// </summary>
    public Enrichment Enrichment => field ??= new Enrichment(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Filter APIs:</b> Retrieve available filter values for prospecting.
    /// <para>
    /// Use the discovery endpoints to list all available filter types, then fetch valid values for a specific filter type before building a prospecting request.
    /// </para>
    /// <para>
    /// <b>Contact filter types:</b> <c>departments</c>, <c>seniority</c>, <c>existingDataPoints</c>, <c>countries</c>, <c>locations</c>
    /// </para>
    /// <para>
    /// <b>Company filter types:</b> <c>names</c>, <c>sizes</c>, <c>revenues</c>, <c>locations</c>, <c>sics</c>, <c>naics</c>, <c>industriesLabels</c>, <c>intentTopics</c>, <c>technologies</c>
    /// </para>
    /// </summary>
    public FiltersApi FiltersApi => field ??= new FiltersApi(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Lookalike APIs:</b> Use AI-powered recommendations to discover contacts and companies similar to your best existing customers. The Contact Lookalikes and Company Lookalikes endpoints return paginated results you can pipe directly into Enrich for full data.
    /// <para>
    /// Pass <c>tableId</c> to also persist matching results into an existing table. See Contacts Tables or Companies Tables.
    /// </para>
    /// </summary>
    public Lookalikes Lookalikes => field ??= new Lookalikes(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Prospecting APIs:</b> Filter-based search for contacts and companies.
    /// </summary>
    public Prospecting Prospecting => field ??= new Prospecting(_rawClient, _server, _auth);

    /// <summary>
    /// With Lusha's Prospecting API, you can query Lusha's extensive database based on specific criteria (such as job title, seniority, location, and more) to retrieve detailed contact and company information.
    /// </summary>
    public ProspectingSearchEnrich ProspectingSearchEnrich =>
        field ??= new ProspectingSearchEnrich(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Search APIs:</b> Find contacts or companies using known identifiers.
    /// <para>
    /// Look up contacts by <c>id</c>, <c>linkedinUrl</c>, <c>email</c>, or <c>firstName</c> + <c>lastName</c> + <c>companyName</c>/<c>companyDomain</c>. Look up companies by <c>id</c>, <c>name</c>, or <c>domain</c>.
    /// </para>
    /// <para>
    /// Returns a non-PII preview of each profile with a <c>has</c> field listing available data points and a <c>canReveal</c> field showing what can be unlocked via Enrich.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per successful result via the <c>api_search</c> action.
    /// </para>
    /// </summary>
    public Search Search => field ??= new Search(_rawClient, _server, _auth);

    /// <summary>
    /// <b>Search &amp; Enrich APIs:</b> Find and retrieve full contact or company data in a single call.
    /// <para>
    /// Combines Search and Enrich into one request. Provide identifiers and control what gets revealed via the <c>reveal</c> field.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Two charges apply — one for the search (<c>api_search</c>) and one per revealed field.
    /// </para>
    /// </summary>
    public SearchEnrich SearchEnrich => field ??= new SearchEnrich(_rawClient, _server, _auth);

    /// <summary>
    /// Real-world activity data for contacts and companies.
    /// </summary>
    public SignalsApi SignalsApi => field ??= new SignalsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Subscribe to real-time notifications when contacts change jobs or companies experience key business events.
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);

    /// <summary>
    /// Retrieve companies ranked by website-visit signals for your tracked domains.
    /// <para>
    /// Domains must be configured for tracking in the dashboard. Each result combines a V3 company firmographic preview with behavioral visit metrics (score, sessions, unique visitors, avg session length, and more).
    /// </para>
    /// </summary>
    public WebsiteVisits WebsiteVisits => field ??= new WebsiteVisits(_rawClient, _server, _auth);
}
