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
using Zillapi.Requests.Listings;

namespace Zillapi.Api;

public sealed class Listings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Listings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search listings by bounding box
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListingsBboxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A <c>bbox</c> (west,south,east,north) is REQUIRED — free-text location is not supported. Returns up to <c>max_items</c> rows synchronously (default 50, hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit <b>per listing returned</b> — this cost is per-result, not per-call, so a full-page search costs up to 50 credits; set <c>max_items</c> lower to cap it. Failed calls are free.
    /// </remarks>
    public Task<SearchResultsOk> ListingsBbox(ListingsBboxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/listings"),
            [],
            [
                new Param("bbox", request.Bbox),
                new Param("status", request.Status),
                new Param("price_min", request.PriceMin),
                new Param("price_max", request.PriceMax),
                new Param("beds_min", request.BedsMin),
                new Param("beds_max", request.BedsMax),
                new Param("baths_min", request.BathsMin),
                new Param("baths_max", request.BathsMax),
                new Param("sqft_min", request.SqftMin),
                new Param("sqft_max", request.SqftMax),
                new Param("year_built_min", request.YearBuiltMin),
                new Param("year_built_max", request.YearBuiltMax),
                new Param("home_types", request.HomeTypes),
                new Param("days_on_zillow", request.DaysOnZillow),
                new Param("max_items", request.MaxItems),
                new Param("format", request.Format),
                new Param("location", request.Location),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResultsOk>(),
            ListingsBboxError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for-rent listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a <c>bbox</c> or <c>searchUrls</c> is required. Billed at 1 credit per listing returned; failed calls are free.
    /// </remarks>
    public Task<SearchResultsOk> ListingsForRent(ListingsForRentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/listings/for-rent"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResultsOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for-sale listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a <c>bbox</c> or <c>searchUrls</c> is required. Billed at 1 credit per listing returned; failed calls are free.
    /// </remarks>
    public Task<SearchResultsOk> ListingsForSale(ListingsForSaleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/listings/for-sale"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResultsOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search sold listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResultsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a <c>bbox</c> or <c>searchUrls</c> is required. Billed at 1 credit per listing returned; failed calls are free.
    /// </remarks>
    public Task<SearchResultsOk> ListingsSold(ListingsSoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/listings/sold"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResultsOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
