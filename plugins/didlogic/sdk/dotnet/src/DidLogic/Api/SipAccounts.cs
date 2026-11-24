using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.SipAccounts;

namespace DidLogic.Api;

public sealed class SipAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SipAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add allowed IP address
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsAllowedIpsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsAllowedIpsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add IP address to SIP account whitelist.
    /// </remarks>
    public Task<ApiV1SipaccountsAllowedIpsResponse1> SipaccountsAllowedIpsCreate(SipaccountsAllowedIpsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            [new TemplateParam("sipaccount_id", request.SipaccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SipaccountsAllowedIpsResponse1>(),
            SipaccountsAllowedIpsCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove allowed IP address
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsAllowedIpsDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove IP address from SIP account whitelist.
    /// </remarks>
    public Task SipaccountsAllowedIpsDestroy(SipaccountsAllowedIpsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            [new TemplateParam("sipaccount_id", request.SipaccountId)],
            [new Param("ip", request.Ip)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SipaccountsAllowedIpsDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List allowed IP addresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsAllowedIpsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsAllowedIpsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve list of IP addresses allowed to authenticate this SIP account.
    /// <para>
    /// <c>allowed_ips</c> feeds sipaccounts_allowed_ips_destroy as <c>ip</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1SipaccountsAllowedIpsResponse> SipaccountsAllowedIpsIndex(SipaccountsAllowedIpsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            [new TemplateParam("sipaccount_id", request.SipaccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SipaccountsAllowedIpsResponse>(),
            SipaccountsAllowedIpsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create SIP account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new SIP account (trunk) for making/receiving calls.
    /// <para>
    /// <c>sipaccount.id</c> feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
    /// sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy;
    /// each also takes <c>sipaccount.name</c> in its place. <c>sipaccount.name</c> feeds call_price_show,
    /// calls_show and click2call_create as the SIP account to price, filter by or ring.
    /// </para>
    /// </remarks>
    public Task<ApiV1SipaccountsResponse2> SipaccountsCreate(SipaccountsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SipaccountsResponse2>(),
            SipaccountsCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete SIP account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a SIP account.
    /// </remarks>
    public Task SipaccountsDestroy(SipaccountsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            SipaccountsDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List SIP accounts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve list of SIP accounts (trunks) configured for the authenticated user.
    /// <para>
    /// <b>SIP Accounts</b> allow making/receiving calls through the platform using SIP protocol.
    /// </para>
    /// <para>
    /// <b>Returned Information:</b>
    /// - Account credentials and settings
    /// - Call routing configuration
    /// - Usage limits and restrictions
    /// - Allowed IP addresses (if configured)
    /// </para>
    /// <para>
    /// Technical accounts the platform manages for you — the Webphone account and
    /// each SDK token's account (labelled <c>SDK Instance: </c>) — are
    /// listed too, but cannot be fetched by id, updated or deleted through this API.
    /// </para>
    /// <para>
    /// <c>sipaccounts[].id</c> feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
    /// sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy;
    /// each also takes <c>sipaccounts[].name</c> in its place. <c>sipaccounts[].name</c> feeds call_price_show,
    /// calls_show and click2call_create as the SIP account to price, filter by or ring. Full record:
    /// sipaccounts_show.
    /// </para>
    /// </remarks>
    public Task<ApiV1SipaccountsResponse> SipaccountsIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SipaccountsResponse>(),
            SipaccountsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get SIP account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific SIP account.
    /// <para>
    /// Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.
    /// </para>
    /// </remarks>
    public Task<ApiV1SipaccountsResponse4> SipaccountsShow(SipaccountsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SipaccountsResponse4>(),
            SipaccountsShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SIP account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SipaccountsResponse5"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SipaccountsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update SIP account settings.
    /// </remarks>
    public Task<ApiV1SipaccountsResponse5> SipaccountsUpdate(SipaccountsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/sipaccounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SipaccountsResponse5>(),
            SipaccountsUpdateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
