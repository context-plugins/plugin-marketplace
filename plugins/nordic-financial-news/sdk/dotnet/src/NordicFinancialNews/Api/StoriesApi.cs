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
using NordicFinancialNews.Requests.StoriesApi;

namespace NordicFinancialNews.Api;

public sealed class StoriesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StoriesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1StoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of published stories ordered by publication date (newest first). Each story synthesizes coverage of a single developing event from multiple source articles into one narrative.
    /// <para>
    /// ## Filtering
    /// Supports filtering by country, category, source, and company ticker. Use <c>GET /api/v1/sources</c> to discover source IDs for the <c>sources</c> filter.
    /// </para>
    /// <para>
    /// ## Search
    /// Use <c>q</c> for full-text search: relevance-ranked by default, newest-first with <c>sort=latest</c>, or matched by meaning with <c>mode=semantic</c>.
    /// </para>
    /// <para>
    /// ## Polling for updates
    /// Use <c>updated_after</c> for incremental syncing.
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>. The <c>ETag</c> reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed <c>ETag</c> does not necessarily mean a record was updated.
    /// </para>
    /// </remarks>
    public Task<ApiV1StoriesResponse> GetApiV1Stories(GetApiV1StoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/stories"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("updated_after", request.UpdatedAfter),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("mode", request.Mode),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("ticker", request.Ticker),
                new Param("company", request.Company),
                new Param("exchange", request.Exchange),
                new Param("market", request.Market),
                new Param("domicile", request.Domicile),
                new Param("index", request.Index),
                new Param("sector", request.Sector),
                new Param("listed", request.Listed),
                new Param("watchlist", request.Watchlist),
                new Param("published_after", request.PublishedAfter),
                new Param("published_before", request.PublishedBefore),
                new Param("fields", request.Fields),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StoriesResponse>(),
            GetApiV1StoriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Story Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StoriesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1StoriesByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full details of a single story, including content in Markdown format, associated articles, and companies. Supports conditional requests via <c>If-None-Match</c> for efficient caching.
    /// </remarks>
    public Task<ApiV1StoriesResponse1> GetApiV1StoriesById(GetApiV1StoriesByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/stories/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("If-None-Match", request.IfNoneMatch)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StoriesResponse1>(),
            GetApiV1StoriesByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
