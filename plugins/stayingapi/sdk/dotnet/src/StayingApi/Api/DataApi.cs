using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using StayingApi.Core;
using StayingApi.Core.Exceptions;
using StayingApi.Core.Models;
using StayingApi.Core.Request;
using StayingApi.Core.Response;
using StayingApi.Errors;
using StayingApi.Models;
using StayingApi.Requests.DataApi;

namespace StayingApi.Api;

/// <summary>
/// Accommodation data endpoints
/// </summary>
public sealed class DataApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Nightly availability for a listing (max(5, ⌈days/2⌉) credits by requested date…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AvailabilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AvailabilityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform → invalid_listing_url.
    /// </remarks>
    public Task<AvailabilityResponse> Availability(AvailabilityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/availability"),
            [],
            [
                new Param("platform", request.Platform),
                new Param("startDate", request.StartDate),
                new Param("endDate", request.EndDate),
                new Param("listingId", request.ListingId),
                new Param("listingIds", request.ListingIds),
                new Param("url", request.Url),
                new Param("onlyAvailable", request.OnlyAvailable),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AvailabilityResponse>(),
            AvailabilityError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full normalized listing (3 credits/leg, flat)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListingError"/> when the server returns an error response.</exception>
    public Task<ListingResponse> Listing(ListingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/listing/{platform}/{id}"),
            [new TemplateParam("platform", request.Platform), new TemplateParam("id", request.Id)],
            [
                new Param("country", request.Country),
                new Param("checkIn", request.CheckIn),
                new Param("checkOut", request.CheckOut),
                new Param("currency", request.Currency),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListingResponse>(),
            ListingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Live price for a listing + dates (3 credits/leg, flat)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PriceError"/> when the server returns an error response.</exception>
    public Task<PriceResponse> Price(PriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/price"),
            [],
            [
                new Param("platform", request.Platform),
                new Param("listingId", request.ListingId),
                new Param("checkIn", request.CheckIn),
                new Param("checkOut", request.CheckOut),
                new Param("currency", request.Currency),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PriceResponse>(),
            PriceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cross-OTA price comparison — via Google (30 credits, flat) or across listing…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PriceCompareResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PriceCompareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// TWO modes, one response type.
    /// <para>
    /// <b>Google-aggregator mode</b> (<c>name</c> / <c>location</c> / <c>googleHotelId</c>): we resolve the property on Google Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.
    /// </para>
    /// <para>
    /// <b>Direct fan-out mode</b> (<c>listings=</c>): you supply 2–6 <c>platform:listingId</c> pairs for the SAME property and we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries <c>platform</c>, <c>listingId</c>, <c>nightlyPrice</c>, <c>nights</c> and a best-effort <c>fees</c> breakdown, and the response is marked <c>source: 'direct_fanout'</c>. Billed as the SUM of the per-platform price legs; a leg that fails or returns nothing is charged 0 and is reported in <c>meta.platformResults</c> with <c>meta.partial: true</c>.
    /// </para>
    /// <para>
    /// FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on <c>totalPrice</c>, which is present and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.
    /// </para>
    /// <para>
    /// <c>min</c> and <c>median</c> cover only the offers quoted in the response <c>currency</c>; offers in another currency are still returned but excluded from the summary.
    /// </para>
    /// </remarks>
    public Task<PriceCompareResponse> PriceCompare(PriceCompareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/price-compare"),
            [],
            [
                new Param("checkIn", request.CheckIn),
                new Param("checkOut", request.CheckOut),
                new Param("listings", request.Listings),
                new Param("name", request.Name),
                new Param("location", request.Location),
                new Param("googleHotelId", request.GoogleHotelId),
                new Param("adults", request.Adults),
                new Param("children", request.Children),
                new Param("currency", request.Currency),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PriceCompareResponse>(),
            PriceCompareError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Listing reviews (per-review: RATE×reviews, min 5 credits; airbnb 5×…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReviewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the platform-native id from /v1/search <c>platformListingId</c>; a <c>stays__</c> object id is accepted, normalized, and may supply platform when platform is omitted.
    /// </remarks>
    public Task<ReviewsResponse> Reviews(ReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reviews"),
            [],
            [
                new Param("platform", request.Platform),
                new Param("listingId", request.ListingId),
                new Param("url", request.Url),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("language", request.Language),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReviewsResponse>(),
            ReviewsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search properties across platforms (per-result: RATE×results per platform, min…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchGetError"/> when the server returns an error response.</exception>
    public Task<SearchResponse> SearchGet(SearchGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search"),
            [],
            [
                new Param("location", request.Location),
                new Param("checkIn", request.CheckIn),
                new Param("checkOut", request.CheckOut),
                new Param("platforms", request.Platforms),
                new Param("platform", request.Platform),
                new Param("adults", request.Adults),
                new Param("children", request.Children),
                new Param("rooms", request.Rooms),
                new Param("currency", request.Currency),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResponse>(),
            SearchGetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search properties (JSON body form of GET /search)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPostError"/> when the server returns an error response.</exception>
    public Task<SearchResponse> SearchPost(SearchPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchResponse>(),
            SearchPostError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
