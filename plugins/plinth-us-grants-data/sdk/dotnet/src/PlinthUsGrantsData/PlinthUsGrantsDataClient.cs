using System.Net.Http;
using PlinthUsGrantsData.Api;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Configuration;
using PlinthUsGrantsData.Core.Logging;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData;

/// <summary>
/// A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
/// <para>
/// The funder-grantee graph traverses in BOTH directions: filter by <c>funder_id</c> for everything a foundation funded, or by <c>recip_id</c> for every funder behind a nonprofit.
/// </para>
/// <para>
/// Start with <c>/api/search</c> to turn an organization name into an EIN and a canonical page URL — it needs no key. Every other endpoint requires one (free tier: 50 calls a month).
/// </para>
/// <para>
/// Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are reported as association, never as causation. Organizations that do not e-file may be absent., A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
/// </para>
/// <para>
/// The funder-grantee graph traverses in BOTH directions: filter by <c>funder_id</c> for everything a foundation funded, or by <c>recip_id</c> for every funder behind a nonprofit.
/// </para>
/// <para>
/// Start with <c>/api/v1/search</c> to turn an organization name into an EIN and a canonical page URL — it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints (/compliance, /essentials, /premier) need a paid one.
/// </para>
/// <para>
/// <b>No CORS headers, deliberately.</b> This is a server-side API: a key in browser JavaScript is a key you have published, and every allowance here is per-key. Call it from your backend, or from an agent. There is no browser-callable subset planned.
/// </para>
/// <para>
/// Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are reported as association, never as causation. Organizations that do not e-file may be absent., A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
/// </para>
/// <para>
/// The funder-grantee graph traverses in BOTH directions: filter by <c>funder_id</c> for everything a foundation funded, or by <c>recip_id</c> for every funder behind a nonprofit.
/// </para>
/// <para>
/// Start with <c>/api/v1/search</c> to turn an organization name into an EIN and a canonical page URL — it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints (/compliance, /essentials, /premier) need a paid one.
/// </para>
/// <para>
/// <b>No CORS headers, deliberately.</b> This is a server-side API: a key in browser JavaScript is a key you have published, and every allowance here is per-key. Call it from your backend, or from an agent. There is no browser-callable subset planned.
/// </para>
/// <para>
/// Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are reported as association, never as causation. Organizations that do not e-file may be absent., Operations tagged Grants across 2 of this provider's published API definitions: plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path carries the servers of the definition it was published in., A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
/// </para>
/// <para>
/// The funder-grantee graph traverses in BOTH directions: filter by <c>funder_id</c> for everything a foundation funded, or by <c>recip_id</c> for every funder behind a nonprofit.
/// </para>
/// <para>
/// Start with <c>/api/v1/search</c> to turn an organization name into an EIN and a canonical page URL — it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints (/compliance, /essentials, /premier) need a paid one.
/// </para>
/// <para>
/// <b>No CORS headers, deliberately.</b> This is a server-side API: a key in browser JavaScript is a key you have published, and every allowance here is per-key. Call it from your backend, or from an agent. There is no browser-callable subset planned.
/// </para>
/// <para>
/// Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are reported as association, never as causation. Organizations that do not e-file may be absent., Operations tagged Organizations across 2 of this provider's published API definitions: plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path carries the servers of the definition it was published in., A read API over the US grantmaking universe, read from public IRS Form 990, 990-EZ and 990-PF e-file filings.
/// </para>
/// <para>
/// The funder-grantee graph traverses in BOTH directions: filter by <c>funder_id</c> for everything a foundation funded, or by <c>recip_id</c> for every funder behind a nonprofit.
/// </para>
/// <para>
/// Start with <c>/api/v1/search</c> to turn an organization name into an EIN and a canonical page URL — it needs no key. The grant endpoints need a free key (50 calls a day); the organization endpoints (/compliance, /essentials, /premier) need a paid one.
/// </para>
/// <para>
/// <b>No CORS headers, deliberately.</b> This is a server-side API: a key in browser JavaScript is a key you have published, and every allowance here is per-key. Call it from your backend, or from an agent. There is no browser-callable subset planned.
/// </para>
/// <para>
/// Figures are read directly from named IRS filings. The IRS releases e-file data on a 12-24 month lag, so every figure is dated to its fiscal year rather than to today. Funding relationships are reported as association, never as causation. Organizations that do not e-file may be absent., Operations tagged Resolve across 2 of this provider's published API definitions: plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path carries the servers of the definition it was published in., Operations tagged SQL across 2 of this provider's published API definitions: plinth-us-grants-data-openapi-2026-08-14.json, plinth-us-grants-data-openapi.json. Each path carries the servers of the definition it was published in.
/// </para>
/// </summary>
public sealed class PlinthUsGrantsDataClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public PlinthUsGrantsDataClient(HttpClient httpClient, PlinthUsGrantsDataClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "PlinthUsGrantsDataClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("PLINTH_US_GRANTS_DATA_LOG"),
            "PlinthUsGrantsDataClient",
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
    /// Plain-English questions answered with SQL the service writes itself.
    /// </summary>
    public Analyze Analyze => field ??= new Analyze(_rawClient, _server, _auth);

    public Batch Batch => field ??= new Batch(_rawClient, _server, _auth);

    /// <summary>
    /// Getting a key, including the one an agent can mint for itself.
    /// </summary>
    public Credentials Credentials => field ??= new Credentials(_rawClient, _server);

    /// <summary>
    /// The funder-grantee graph: grants, funders, recipients and aggregates.
    /// </summary>
    public GrantsApi GrantsApi => field ??= new GrantsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Dataset scope, source freshness, and which Candid parameters this API honors. No key required.
    /// </summary>
    public Meta Meta => field ??= new Meta(_rawClient, _server);

    /// <summary>
    /// Per-organization profiles, financials and IRS compliance facets.
    /// </summary>
    public Organizations Organizations => field ??= new Organizations(_rawClient, _server, _auth);

    /// <summary>
    /// Recurring monitoring over a set of EINs: compliance, filings, grants, government funding, governance, and web signals, delivered as a page, email, or PDF. Pro keys only.
    /// </summary>
    public Pulse Pulse => field ??= new Pulse(_rawClient, _server, _auth);

    /// <summary>
    /// Turn an organization name into an EIN and a canonical URL. No key required.
    /// </summary>
    public Resolve Resolve => field ??= new Resolve(_rawClient, _server);

    /// <summary>
    /// Ad-hoc read-only SQL over the warehouse. Paid keys only.
    /// </summary>
    public Sql Sql => field ??= new Sql(_rawClient, _server, _auth);
}
