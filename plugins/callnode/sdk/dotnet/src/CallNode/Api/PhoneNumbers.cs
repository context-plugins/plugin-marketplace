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
using CallNode.Requests.PhoneNumbers;

namespace CallNode.Api;

/// <summary>
/// Search inventory, purchase numbers, provision webhooks, and release numbers.
/// </summary>
public sealed class PhoneNumbers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PhoneNumbers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a number
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NumbersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetNumberError"/> when the server returns an error response.</exception>
    public Task<ApiV1NumbersResponse1> GetNumber(GetNumberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1NumbersResponse1>(),
            GetNumberError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NumbersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListNumbersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Your numbers, newest first. Every filter is applied server-side and they combine (AND).
    /// </remarks>
    public Task<ApiV1NumbersResponse> ListNumbers(ListNumbersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers"),
            [],
            [
                new Param("status", request.Status),
                new Param("type", request.Type),
                new Param("purchaseSource", request.PurchaseSource),
                new Param("tag", request.Tag),
                new Param("q", request.Q),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1NumbersResponse>(),
            ListNumbersError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purchase a number
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PurchaseNumberResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchaseNumberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Purchases a number found via search and bills your wallet for the first
    /// month at your plan's rate (no setup fee; an included Pro Bundle number
    /// costs nothing). Voice and messaging webhooks can be
    /// provisioned in the same call, so the number is fully wired the moment it
    /// activates — no dashboard visit needed.
    /// <para>
    /// <c>type</c> is optional and derived from the number itself (8NN prefixes are
    /// toll-free). Purchasing is idempotent on the number: re-purchasing a number
    /// you already own returns <c>200</c> with the existing record instead of billing
    /// twice. A number you previously released is automatically restored from the
    /// recycle bin rather than re-ordered.
    /// </para>
    /// <para>
    /// A2P messaging registration provisions asynchronously after purchase — the
    /// number's <c>messaging.ready</c> flag flips to <c>true</c> when it can send SMS/MMS.
    /// </para>
    /// </remarks>
    public Task<PurchaseNumberResponse> PurchaseNumber(PurchaseNumberOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PurchaseNumberResponse>(),
            PurchaseNumberError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Release a number
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NumbersResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReleaseNumberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Releases the number and stops its billing. Released numbers are parked in
    /// a recycle bin tied to your account — re-purchasing the same number later
    /// restores it (with fresh billing) instead of losing it forever.
    /// </remarks>
    public Task<ApiV1NumbersResponse3> ReleaseNumber(ReleaseNumberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1NumbersResponse3>(),
            ReleaseNumberError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search purchasable numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NumbersAvailableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchAvailableNumbersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches live carrier inventory for numbers you can purchase right now.
    /// Local searches require <c>areaCode</c>; toll-free searches accept an optional
    /// <c>prefix</c> (800–888) or a <c>vanity</c> word. The <c>pricing</c> block reflects what
    /// <b>your</b> account would pay today — Pro Bundle discounts and included-number
    /// slots are applied automatically.
    /// </remarks>
    public Task<ApiV1NumbersAvailableResponse> SearchAvailableNumbers(SearchAvailableNumbersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers/available"),
            [],
            [
                new Param("type", request.Type),
                new Param("areaCode", request.AreaCode),
                new Param("prefix", request.Prefix),
                new Param("vanity", request.Vanity),
                new Param("quantity", request.Quantity),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1NumbersAvailableResponse>(),
            SearchAvailableNumbersError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a number's configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1NumbersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateNumberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions or updates the voice webhook (your AI agent endpoint), the
    /// messaging webhook, their authentication, and the friendly name. Only the
    /// fields you send change; webhook secrets are write-only and never echoed
    /// back (responses report <c>valueSet: true</c> instead).
    /// </remarks>
    public Task<ApiV1NumbersResponse1> UpdateNumber(UpdateNumberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/numbers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1NumbersResponse1>(),
            UpdateNumberError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
