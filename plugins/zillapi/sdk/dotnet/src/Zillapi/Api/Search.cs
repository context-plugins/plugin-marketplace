using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Zillapi.Core;
using Zillapi.Core.ErrorResponse;
using Zillapi.Core.Exceptions;
using Zillapi.Core.Models;
using Zillapi.Core.Request;
using Zillapi.Core.Response;
using Zillapi.Errors;
using Zillapi.Models;
using Zillapi.Requests.Search;

namespace Zillapi.Api;

public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search listings with filters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Structured listing search using normalized filters (option A) or a pre-built Zillow searchQueryState URL (option B). A <c>bbox</c> or <c>searchUrls</c> is REQUIRED — a free-text location alone is rejected with 400 invalid_filters and never hits upstream. Sync when maxItems ≤ 50, async (202/job) otherwise. Billed at 1 credit per result returned; failed calls are free.
    /// </remarks>
    public Task<SearchResultsOk> SearchInvoke(SearchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResultsOk>(),
            SearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search then enrich with details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobAcceptedZillapiZillowPropertyDataListingsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Run a search and enrich every matched zpid with the full property-detail record in one chained async job. Always async; the results returned by GET /v1/jobs/{id}/results are detail rows (Property shape), not search rows. Billed per stage: 1 credit per search result plus 1 credit per detail record. Failed calls are free.
    /// </remarks>
    public Task<JobAcceptedZillapiZillowPropertyDataListingsApi> SearchWithDetails(SearchWithDetailsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/search/with-details"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobAcceptedZillapiZillowPropertyDataListingsApi>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
