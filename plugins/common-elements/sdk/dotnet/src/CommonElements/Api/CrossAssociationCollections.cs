using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Extensions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.CrossAssociationCollections;

namespace CommonElements.Api;

/// <summary>
/// The same corpora queried across associations, where the buyer genuinely asks the question that way and an indexed filter exists to answer it.
/// </summary>
public sealed class CrossAssociationCollections
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CrossAssociationCollections(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// CFPB consumer complaints against mortgage servicers, banks and debt collectors…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ComplaintsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceCollectionComplaintsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market context for an association's counterparties. Not a record about the association. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.</description></item>
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1ComplaintsResponse> ResourceCollectionComplaints(ResourceCollectionComplaintsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/complaints"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
                new Param("state", request.State),
                new Param("county_fips", request.CountyFips),
                new Param("jurisdiction", request.Jurisdiction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ComplaintsResponse>(),
            ResourceCollectionComplaintsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Carriers writing in the association market, by state, with their filings and…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1InsuranceCarriersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceCollectionInsuranceCarriersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Carriers writing in the association market, by state, with their filings and market presence. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.</description></item>
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1InsuranceCarriersResponse> ResourceCollectionInsuranceCarriers(ResourceCollectionInsuranceCarriersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/insurance/carriers"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
                new Param("state", request.State),
                new Param("county_fips", request.CountyFips),
                new Param("jurisdiction", request.Jurisdiction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1InsuranceCarriersResponse>(),
            ResourceCollectionInsuranceCarriersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Litigation involving community associations across the corpus, filterable by…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1LegalCasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceCollectionLegalCasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Litigation involving community associations across the corpus, filterable by state and date. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.</description></item>
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1LegalCasesResponse> ResourceCollectionLegalCases(ResourceCollectionLegalCasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/legal/cases"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
                new Param("state", request.State),
                new Param("county_fips", request.CountyFips),
                new Param("jurisdiction", request.Jurisdiction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1LegalCasesResponse>(),
            ResourceCollectionLegalCasesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insurance rate filings by carrier and state: what carriers asked for, and when
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1InsuranceRateFilingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceCollectionRateFilingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Insurance rate filings by carrier and state: what carriers asked for, and when. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.</description></item>
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1InsuranceRateFilingsResponse> ResourceCollectionRateFilings(ResourceCollectionRateFilingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/insurance/rate-filings"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
                new Param("state", request.State),
                new Param("county_fips", request.CountyFips),
                new Param("jurisdiction", request.Jurisdiction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1InsuranceRateFilingsResponse>(),
            ResourceCollectionRateFilingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// NOAA storm events by county and date
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StormEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResourceCollectionStormEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NOAA storm events by county and date. The hazard history behind an association's exposure, queryable across the whole corpus. Live description, provenance and coverage caveat come from /api/v1/datasets.
    /// <para>
    /// <b>Plan:</b> Row access is plan-gated per source; counts and coverage are returned at every plan.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>A cross-association collection requires at least one indexed filter. Without one the request is refused with a 400 naming the filters it accepts, rather than starting a sequential scan over millions of rows.</description></item>
    ///   <item><description>Read <c>meta.coverage</c> before treating an empty result as an absence. A resource can return zero rows because nothing happened, or because that jurisdiction is not matched yet, and those are different facts. The coverage caveat says which.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1StormEventsResponse> ResourceCollectionStormEvents(ResourceCollectionStormEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/storm-events"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("source", request.Source),
                new Param("since", request.Since?.ToDate()),
                new Param("until", request.Until?.ToDate()),
                new Param("state", request.State),
                new Param("county_fips", request.CountyFips),
                new Param("jurisdiction", request.Jurisdiction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StormEventsResponse>(),
            ResourceCollectionStormEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
