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
using NordicFinancialNews.Requests.ArticlesApi;

namespace NordicFinancialNews.Api;

public sealed class ArticlesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ArticlesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Articles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ArticlesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ArticlesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of live articles ordered by publication date (newest first). Each article includes an English headline, a short summary, and key points, with <c>article_url</c> linking to the full original-language article at the source.
    /// <para>
    /// ## Filtering
    /// Supports filtering by country, category, source, company ticker, and content type. Use <c>GET /api/v1/sources</c> to discover source IDs for the <c>sources</c> filter. Use <c>ids</c> for batch lookup of specific articles.
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
    /// ## Pagination
    /// Responses include cursor-based pagination and support field projection to minimize payload size.
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>. The <c>ETag</c> reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed <c>ETag</c> does not necessarily mean a record was updated.
    /// </para>
    /// </remarks>
    public Task<ApiV1ArticlesResponse1> GetApiV1Articles(GetApiV1ArticlesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/articles"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("q", request.Q),
                new Param("sort", request.Sort),
                new Param("mode", request.Mode),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("source_type", request.SourceType),
                new Param("ticker", request.Ticker),
                new Param("company", request.Company),
                new Param("exchange", request.Exchange),
                new Param("market", request.Market),
                new Param("domicile", request.Domicile),
                new Param("index", request.Index),
                new Param("sector", request.Sector),
                new Param("content_type", request.ContentType),
                new Param("published_after", request.PublishedAfter),
                new Param("published_before", request.PublishedBefore),
                new Param("listed", request.Listed),
                new Param("watchlist", request.Watchlist),
                new Param("primary_only", request.PrimaryOnly),
                new Param("include_peripheral", request.IncludePeripheral),
                new Param("ids", request.Ids),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ArticlesResponse1>(),
            GetApiV1ArticlesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Article Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ArticlesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ArticlesByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the details of a single article: an English headline, a short summary, key points, and associated companies, along with <c>article_url</c> pointing to the full original-language article at the source. Supports conditional requests via <c>If-None-Match</c> for efficient caching.
    /// </remarks>
    public Task<ApiV1ArticlesResponse> GetApiV1ArticlesById(GetApiV1ArticlesByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/articles/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("include_peripheral", request.IncludePeripheral)],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ArticlesResponse>(),
            GetApiV1ArticlesByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
