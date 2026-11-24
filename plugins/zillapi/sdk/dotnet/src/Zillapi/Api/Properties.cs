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
using Zillapi.Requests.Properties;

namespace Zillapi.Api;

public sealed class Properties
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Properties(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch property-detail job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Queue an async job that resolves up to 500 URLs and/or addresses to full property records. Always async: returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit per record returned, settled when the job completes; failed calls are free.
    /// </remarks>
    public Task<JobAccepted> CreateBatchPropertyJob(CreateBatchPropertyJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JobAccepted>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get listing agent and broker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AgentOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the listing agent and broker contact details plus attribution info. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<AgentOk> GetPropertyAgent(GetPropertyAgentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/agent"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AgentOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Look up a property by address
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PropertyOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a full street address (street, city, state, ZIP) to a property record via upstream geocoding. Costs 3 credits per successful call because the address is resolved upstream; failed calls are free.
    /// </remarks>
    public Task<PropertyOk> GetPropertyByAddress(GetPropertyByAddressRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/by-address"),
            [],
            [
                new Param("address", request.Address),
                new Param("status", request.Status),
                new Param("fields", request.Fields),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PropertyOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Look up a property by Zillow URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PropertyOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPropertyByUrlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or /apartments/). When <c>extract_units</c> is not <c>disabled</c> and the URL is a multi-unit building, <c>data</c> is returned as an array of unit records. Costs 1 credit per record returned; failed calls are free.
    /// </remarks>
    public Task<PropertyOk> GetPropertyByUrl(GetPropertyByUrlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/by-url"),
            [],
            [
                new Param("url", request.Url),
                new Param("status", request.Status),
                new Param("extract_units", request.ExtractUnits),
                new Param("fields", request.Fields),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PropertyOk>(),
            GetPropertyByUrlError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a property by zpid
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PropertyCachedOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per successful lookup; caching is a transparent optimization (faster responses, same price). Failed calls are free.
    /// </remarks>
    public Task<PropertyCachedOk> GetPropertyByZpid(GetPropertyByZpidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}"),
            [new TemplateParam("zpid", request.Zpid)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PropertyCachedOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get full resoFacts attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FactsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the full <c>resoFacts</c> MLS attribute set (appliances, flooring, parking, view, and hundreds of other fields). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<FactsOk> GetPropertyFacts(GetPropertyFactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/facts"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FactsOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get comparable nearby listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NearbyOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<NearbyOk> GetPropertyNearby(GetPropertyNearbyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/nearby"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NearbyOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get open-house schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OpenHousesOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<OpenHousesOk> GetPropertyOpenHouses(GetPropertyOpenHousesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/open-houses"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OpenHousesOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get property photos
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PhotosOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video flags. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<PhotosOk> GetPropertyPhotos(GetPropertyPhotosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/photos"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PhotosOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get property price history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PriceHistoryOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the property's price-history events (listed, sold, and price changes). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<PriceHistoryOk> GetPropertyPriceHistory(GetPropertyPriceHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/price-history"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PriceHistoryOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get assigned and nearby schools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SchoolsOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return schools associated with the property, including GreatSchools rating, distance, type, and level. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<SchoolsOk> GetPropertySchools(GetPropertySchoolsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/schools"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SchoolsOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get property tax history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaxHistoryOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<TaxHistoryOk> GetPropertyTaxHistory(GetPropertyTaxHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/tax-history"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaxHistoryOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Zestimate and rent estimate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ZestimateOk"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
    /// </remarks>
    public Task<ZestimateOk> GetPropertyZestimate(GetPropertyZestimateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/properties/{zpid}/zestimate"),
            [new TemplateParam("zpid", request.Zpid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ZestimateOk>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
