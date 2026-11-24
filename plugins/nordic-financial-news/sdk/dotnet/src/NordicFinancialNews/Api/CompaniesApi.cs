using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.CompaniesApi;

namespace NordicFinancialNews.Api;

public sealed class CompaniesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CompaniesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use <c>q</c> for full-text search across company names, ranked by relevance, or add <c>mode=semantic</c> to match <c>q</c> by meaning instead.
    /// </remarks>
    public Task<ApiV1CompaniesResponse> GetApiV1Companies(GetApiV1CompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("q", request.Q),
                new Param("mode", request.Mode),
                new Param("company", request.Company),
                new Param("ticker", request.Ticker),
                new Param("country", request.Country),
                new Param("market", request.Market),
                new Param("domicile", request.Domicile),
                new Param("exchange", request.Exchange),
                new Param("sector", request.Sector),
                new Param("listed", request.Listed),
                new Param("watchlist", request.Watchlist),
                new Param("is_active", request.IsActive),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesResponse>(),
            GetApiV1CompaniesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesByIdentifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about a single company, including description, sector, relationships, and stock listings. Look up by company ID (e.g. <c>comp_apple123</c>) or ticker symbol (e.g. <c>AAPL</c>, <c>VOLV-B</c>). Lookup also accepts the full ticker including exchange suffix (e.g. <c>VOLV-B.ST</c>).
    /// </remarks>
    public Task<ApiV1CompaniesResponse1> GetApiV1CompaniesByIdentifier(GetApiV1CompaniesByIdentifierRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies/{identifier}"),
            [new TemplateParam("identifier", request.Identifier)],
            [],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesResponse1>(),
            GetApiV1CompaniesByIdentifierError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Company Articles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesArticlesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesByIdentifierArticlesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns articles where the company is a principal association (subject, partner, investor,
    /// or competitor), ordered by publication date (newest first). An article where this company
    /// is only the source, an advisor, or a passing mention is excluded.
    /// <para>
    /// ## Parameters
    /// Accepts the same <c>q</c>, <c>sort</c>, <c>fields</c>, <c>updated_after</c>, <c>country</c>, <c>category</c>, <c>sources</c>, <c>source_type</c>, <c>content_type</c>, <c>published_after</c> and <c>published_before</c> parameters as <c>GET /api/v1/articles</c>, with identical semantics, scoped to this company. <c>primary_only=true</c> narrows further within that principal set, to only articles where this company is the primary subject.
    /// </para>
    /// <para>
    /// ## Rejected parameters
    /// <c>ticker</c>, <c>company</c>, <c>watchlist</c>, <c>listed</c>, <c>exchange</c>, <c>market</c>, <c>domicile</c>, <c>index</c> and <c>sector</c> are rejected (400). The path already fixes the company; use <c>GET /api/v1/articles</c> to filter the full collection by them (<c>watchlist=false</c> and <c>listed</c> with any value other than <c>true</c> are ignored, as on the flat resource).
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>. The <c>ETag</c> reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed <c>ETag</c> does not necessarily mean a record was updated.
    /// </para>
    /// </remarks>
    public Task<ApiV1CompaniesArticlesResponse> GetApiV1CompaniesByIdentifierArticles(GetApiV1CompaniesByIdentifierArticlesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies/{identifier}/articles"),
            [new TemplateParam("identifier", request.Identifier)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("source_type", request.SourceType),
                new Param("content_type", request.ContentType),
                new Param("published_after", request.PublishedAfter),
                new Param("published_before", request.PublishedBefore),
                new Param("primary_only", request.PrimaryOnly),
                new Param("include_peripheral", request.IncludePeripheral),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesArticlesResponse>(),
            GetApiV1CompaniesByIdentifierArticlesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Company Calendar Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesCalendarEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesByIdentifierCalendarEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and more), ordered by <c>scheduled_at</c> ascending. This is the same contract as <c>GET /api/v1/calendar_events</c>, scoped to a single company by the path.
    /// <para>
    /// ## Default window
    /// By default only upcoming events are returned; <c>scheduled_after</c>/<c>scheduled_before</c> or <c>updated_after</c> lift that floor, the same way they do on the flat resource.
    /// </para>
    /// <para>
    /// ## Plan availability
    /// Not available on plans with a capped calendar. Use <c>GET /api/v1/calendar_events</c> for the upcoming-events preview instead.
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1CompaniesCalendarEventsResponse> GetApiV1CompaniesByIdentifierCalendarEvents(GetApiV1CompaniesByIdentifierCalendarEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies/{identifier}/calendar_events"),
            [new TemplateParam("identifier", request.Identifier)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("status", request.Status),
                new Param("event_type", request.EventType),
                new Param("scheduled_after", request.ScheduledAfter),
                new Param("scheduled_before", request.ScheduledBefore),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesCalendarEventsResponse>(),
            GetApiV1CompaniesByIdentifierCalendarEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Company Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesByIdentifierEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns Events this company participates in, newest first. This is the same contract as <c>GET /api/v1/events</c>, scoped to a single company by the path. Plan gating, ordering, <c>updated_after</c> sync (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its documentation for the full detail.
    /// <para>
    /// A tombstone respects the same event-grain filters as the flat resource, including <c>last_article_after</c>/<c>before</c>. A merged event's <c>last_article_at</c> freezes at merge time, so those filter a tombstone against that frozen value rather than against when the merge happened. <c>window</c> cannot be used for sync polling (mutually exclusive with <c>updated_after</c>).
    /// </para>
    /// <para>
    /// Parameters that name or describe a different company or listing are rejected here with <c>400 invalid-parameter</c>: <c>company</c>, <c>ticker</c>, <c>watchlist</c>, <c>listed</c>, <c>exchange</c>, <c>market</c>, <c>domicile</c>, <c>index</c> and <c>sector</c>. The path already fixes the company; use <c>GET /api/v1/events</c> to filter the full collection by any of them. <c>watchlist=false</c> and <c>listed</c> with any value other than <c>true</c> remain inert. <c>mode</c> is rejected with <c>400 invalid-parameter</c>; use <c>GET /api/v1/events?company={company_id}&amp;q={query}&amp;mode=semantic</c> to search one company's events by meaning.
    /// </para>
    /// <para>
    /// Responses carry an <c>ETag</c> and <c>Cache-Control: private, max-age=0, must-revalidate</c>; send the ETag back as <c>If-None-Match</c> to receive a <c>304 Not Modified</c>. There is no <c>Last-Modified</c>, so <c>If-Modified-Since</c> alone never revalidates. This is the same contract, and the same reason, as <c>GET /api/v1/events</c>. Requests carrying <c>q</c> or <c>updated_after</c> are not cached and return <c>Cache-Control: no-cache, no-store</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1CompaniesEventsResponse> GetApiV1CompaniesByIdentifierEvents(GetApiV1CompaniesByIdentifierEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies/{identifier}/events"),
            [new TemplateParam("identifier", request.Identifier)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("q", request.Q),
                new Param("event_type", request.EventType),
                new Param("significance", request.Significance),
                new Param("sort", request.Sort),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("first_reported_after", request.FirstReportedAfter),
                new Param("first_reported_before", request.FirstReportedBefore),
                new Param("last_article_after", request.LastArticleAfter),
                new Param("last_article_before", request.LastArticleBefore),
                new Param("window", request.Window),
                new Param("source_type", request.SourceType),
                new Param("content_type", request.ContentType),
                new Param("related_to", request.RelatedTo),
                new Param("include_peripheral", request.IncludePeripheral),
            ],
            [new HeaderParam("If-None-Match", request.IfNoneMatch)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesEventsResponse>(),
            GetApiV1CompaniesByIdentifierEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Company Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CompaniesStoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CompaniesByIdentifierStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns stories that mention a specific company, ordered by publication date (newest first).
    /// <para>
    /// ## Parameters
    /// Accepts the same <c>q</c>, <c>sort</c>, <c>fields</c>, <c>updated_after</c>, <c>country</c>, <c>category</c>, <c>sources</c>, <c>published_after</c> and <c>published_before</c> parameters as <c>GET /api/v1/stories</c>, with identical semantics, scoped to this company.
    /// </para>
    /// <para>
    /// ## Rejected parameters
    /// <c>ticker</c>, <c>company</c>, <c>watchlist</c>, <c>listed</c>, <c>exchange</c>, <c>market</c>, <c>domicile</c>, <c>index</c> and <c>sector</c> are rejected (400). The path already fixes the company; use <c>GET /api/v1/stories</c> to filter the full collection by them (<c>watchlist=false</c> and <c>listed</c> with any value other than <c>true</c> are ignored, as on the flat resource).
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>. The <c>ETag</c> reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed <c>ETag</c> does not necessarily mean a record was updated.
    /// </para>
    /// </remarks>
    public Task<ApiV1CompaniesStoriesResponse> GetApiV1CompaniesByIdentifierStories(GetApiV1CompaniesByIdentifierStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/companies/{identifier}/stories"),
            [new TemplateParam("identifier", request.Identifier)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("updated_after", request.UpdatedAfter),
                new Param("fields", request.Fields),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("published_after", request.PublishedAfter),
                new Param("published_before", request.PublishedBefore),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CompaniesStoriesResponse>(),
            GetApiV1CompaniesByIdentifierStoriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
