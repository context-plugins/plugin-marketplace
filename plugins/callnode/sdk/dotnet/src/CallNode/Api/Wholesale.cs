using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.Wholesale;

namespace CallNode.Api;

/// <summary>
/// Wholesale (SBC-as-a-Service) DID ordering — US and international numbers
/// delivered straight to your SIP endpoint. Requires wholesale to be active
/// on your account and completed business verification; every endpoint
/// otherwise returns 403.
/// <para>
/// <b>Outbound PSTN termination is SIP, not HTTP.</b> Where it is enabled on
/// your account you send us an INVITE on your trunk and we complete the call;
/// there is no HTTP endpoint to call, so it is not described below. The rules
/// that matter — the caller ID you may present, what each refusal code means,
/// and how minutes are charged — are in the SIP trunking guide under
/// "Wholesale outbound termination". Whether it is enabled on your account,
/// and at what rate, is shown on your SBC Tenant page in the dashboard.
/// </para>
/// </summary>
public sealed class Wholesale
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Wholesale(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List areas (rate centres) with stock and your price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WholesaleAreasResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWholesaleAreasError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Areas with available stock and <c>estMonthlyUsd</c> — YOUR contract price
    /// per number in that area, resolved server-side. There is no per-number
    /// search on wholesale inventory: you order from an area and a number is
    /// allocated.
    /// <para>
    /// The first fetch for a large country (the UK has 600+ rate centres) can
    /// take up to a minute; results are cached server-side for ~10 minutes.
    /// Stock above zero does not guarantee an order succeeds — on an order
    /// failure, pick a different area rather than retrying the same one.
    /// </para>
    /// </remarks>
    public Task<ApiV1WholesaleAreasResponse> ListWholesaleAreas(ListWholesaleAreasRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/wholesale/areas"),
            [],
            [new Param("countryId", request.CountryId), new Param("stateId", request.StateId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WholesaleAreasResponse>(),
            ListWholesaleAreasError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List wholesale countries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WholesaleCountriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWholesaleCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Countries where wholesale inventory exists — US and international.
    /// <para>
    /// All <c>/api/v1/wholesale</c> endpoints are gated per request: wholesale must
    /// be ACTIVE on your account (arranged with our team — raise a Wholesale
    /// Activation request from the dashboard) and your business verification
    /// must be complete. Otherwise requests return
    /// <c>403 wholesale_not_activated</c> or <c>403 account_not_verified</c>.
    /// </para>
    /// <para>
    /// <c>countryId</c> values are opaque signed tokens with a short lifetime —
    /// fetch them per ordering session and never persist them.
    /// </para>
    /// </remarks>
    public Task<ApiV1WholesaleCountriesResponse> ListWholesaleCountries(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/wholesale/countries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WholesaleCountriesResponse>(),
            ListWholesaleCountriesError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List states/regions for a country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WholesaleStatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWholesaleStatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Regions for a country. Many countries have none — an empty list means
    /// go straight to areas with just the <c>countryId</c>.
    /// </remarks>
    public Task<ApiV1WholesaleStatesResponse> ListWholesaleStates(ListWholesaleStatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/wholesale/states"),
            [],
            [new Param("countryId", request.CountryId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WholesaleStatesResponse>(),
            ListWholesaleStatesError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Order a wholesale number
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WholesaleNumbersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrderWholesaleNumberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Allocates a number from an area and starts delivering its inbound
    /// calls to your SIP endpoint. Prepaid: the first month at your contract
    /// rate is charged from your wallet at allocation, then monthly; inbound
    /// minutes are charged per call as they complete.
    /// <para>
    /// <c>deliverTo</c> accepts three forms:
    /// - a bare host (<c>pbx.example.com</c> or a public IP) — we deliver as
    /// <c>sip:@host</c>
    /// - a sip: URI containing <c>{number}</c> — replaced with the allocated number
    /// - a full <c>sip:</c> URI, used verbatim
    /// </para>
    /// <para>
    /// Allocation can take up to ~40 seconds. On <c>order_failed</c> for a specific
    /// area, order from a DIFFERENT area — retrying the same one will not help.
    /// </para>
    /// </remarks>
    public Task<ApiV1WholesaleNumbersResponse> OrderWholesaleNumber(OrderWholesaleNumberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/wholesale/numbers"),
            [],
            [],
            [
                new HeaderParam("X-Idempotency-Key", request.XIdempotencyKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1WholesaleNumbersResponse>(),
            OrderWholesaleNumberError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Repoint where a number delivers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WholesaleNumbersDeliveryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWholesaleDeliveryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Changes the delivery destination of an existing wholesale number —
    /// same <c>deliverTo</c> forms as ordering, resolved against the known number.
    /// Clearing delivery is not allowed: a wholesale number with no
    /// destination silently drops every call.
    /// </remarks>
    public Task<ApiV1WholesaleNumbersDeliveryResponse> UpdateWholesaleDelivery(UpdateWholesaleDeliveryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/wholesale/numbers/{id}/delivery"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1WholesaleNumbersDeliveryResponse>(),
            UpdateWholesaleDeliveryError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
