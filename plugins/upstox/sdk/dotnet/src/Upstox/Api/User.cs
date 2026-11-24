using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.User;

namespace Upstox.Api;

public sealed class User
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal User(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get kill switch status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="KillSwitchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKillSwitchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the disable/enable status of all trading segments for the user.
    /// </remarks>
    public Task<KillSwitchResponse> GetKillSwitch(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/kill-switch"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<KillSwitchResponse>(),
            GetKillSwitchError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get profile
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetProfileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows to fetch the complete information of the user who is logged in including the products, order types and exchanges enabled for the user
    /// </remarks>
    public Task<GetProfileResponse> GetProfile(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/profile"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetProfileResponse>(),
            GetProfileError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User Fund And Margin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetUserFundMarginResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserFundMarginError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Shows the balance of the user in equity and commodity market.
    /// </remarks>
    public Task<GetUserFundMarginResponse> GetUserFundMargin(GetUserFundMarginRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/get-funds-and-margin"),
            [],
            [new Param("segment", request.Segment)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetUserFundMarginResponse>(),
            GetUserFundMarginError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get User Fund And Margin
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetUserFundMarginV3Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserFundMarginV3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and unavailable-to-trade components.
    /// </remarks>
    public Task<GetUserFundMarginV3Response> GetUserFundMarginV3(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/user/get-funds-and-margin"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetUserFundMarginV3Response>(),
            GetUserFundMarginV3Error.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user ips
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserIpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserIpsError"/> when the server returns an error response.</exception>
    public Task<UserIpResponse> GetUserIps(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/ip"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserIpResponse>(),
            GetUserIpsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update kill switch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="KillSwitchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateKillSwitchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enable or disable specific trading segments.
    /// </remarks>
    public Task<KillSwitchResponse> UpdateKillSwitch(UpdateKillSwitchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/kill-switch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<KillSwitchResponse>(),
            UpdateKillSwitchError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update user ip
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserIpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserIpError"/> when the server returns an error response.</exception>
    public Task<UserIpResponse> UpdateUserIp(UpdateUserIpOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/user/ip"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UserIpResponse>(),
            UpdateUserIpError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
