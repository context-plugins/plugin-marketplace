using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Authentication;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.Scrape;

namespace CompSniper.Api;

public sealed class Scrape
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Scrape(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Browse eBay sold listings by category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScrapeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BrowseSoldListingsByCategoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns completed eBay sales from one category without requiring a keyword. Uses the same authentication, quota, filtering, response shape, and error contract as /v1/scrape.
    /// </remarks>
    public Task<ScrapeResponse> BrowseSoldListingsByCategory(BrowseSoldListingsByCategoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape/category"),
            [],
            [
                new Param("categoryId", request.CategoryId),
                new Param("count", request.Count),
                new Param("page", request.Page),
                new Param("ebaySite", request.EbaySite),
                new Param("sortOrder", request.SortOrder),
                new Param("itemCondition", request.ItemCondition),
                new Param("conditionId", request.ConditionId),
                new Param("buyingFormat", request.BuyingFormat),
                new Param("sellerType", request.SellerType),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("aspectFilter", request.AspectFilter),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScrapeResponse>(),
            BrowseSoldListingsByCategoryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel a queued or running Max Mode job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MaxCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelMaxSearchError"/> when the server returns an error response.</exception>
    public Task<MaxCancelResponse> CancelMaxSearch(CancelMaxSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape/max/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MaxCancelResponse>(),
            CancelMaxSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download a signed Max Mode CSV
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadMaxSearchCsvError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Downloads the stored job result using the signed token returned for download or email delivery. The token itself authorizes this URL.
    /// </remarks>
    public Task<string> DownloadMaxSearchCsv(DownloadMaxSearchCsvRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape/max/{jobId}/download.csv"),
            [new TemplateParam("jobId", request.JobId)],
            [new Param("token", request.Token)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            DownloadMaxSearchCsvError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll Max Mode progress or results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MaxJob"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMaxSearchResultsError"/> when the server returns an error response.</exception>
    public Task<MaxJob> GetMaxSearchResults(GetMaxSearchResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape/max/results/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MaxJob>(),
            GetMaxSearchResultsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search eBay sold or active listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScrapeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchSoldListingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns completed eBay sales by default. Set sold=false for current active listings.
    /// </remarks>
    public Task<ScrapeResponse> SearchSoldListings(SearchSoldListingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("count", request.Count),
                new Param("page", request.Page),
                new Param("ebaySite", request.EbaySite),
                new Param("categoryId", request.CategoryId),
                new Param("sortOrder", request.SortOrder),
                new Param("itemLocation", request.ItemLocation),
                new Param("itemCondition", request.ItemCondition),
                new Param("conditionId", request.ConditionId),
                new Param("buyingFormat", request.BuyingFormat),
                new Param("sellerType", request.SellerType),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("includeCompleteListing", request.IncludeCompleteListing),
                new Param("sold", request.Sold),
                new Param("soldAfter", request.SoldAfter?.ToDate()),
                new Param("soldBefore", request.SoldBefore?.ToDate()),
                new Param("aspectFilter", request.AspectFilter),
                new Param("exactMatch", request.ExactMatch),
                new Param("relevance", request.Relevance),
                new Param("bestOfferPrice", request.BestOfferPrice),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScrapeResponse>(),
            SearchSoldListingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start an asynchronous Max Mode search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MaxJobAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMaxSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches up to 100 eBay result pages in the background. Each successful page uses one monthly request, then one purchased credit after monthly quota is exhausted.
    /// </remarks>
    public Task<MaxJobAccepted> StartMaxSearch(StartMaxSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrape/max"),
            [],
            [],
            [
                new HeaderParam("X-Credit-Source", request.XCreditSource),
                new HeaderParam("Idempotency-Key", request.IdempotencyKey),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MaxJobAccepted>(),
            StartMaxSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
