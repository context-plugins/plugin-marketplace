using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.SocialAccountApi;

namespace BundleSocial.Api;

public sealed class SocialAccountApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SocialAccountApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Connect social account for team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountConnectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountConnectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For Mastodon and Bluesky an unusable <c>serverUrl</c> returns 400 with the reason, while a reachable-but-failing instance returns 502.
    /// </remarks>
    public Task<ApiV1SocialAccountConnectResponse> SocialAccountConnect(SocialAccountConnectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/connect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountConnectResponse>(),
            SocialAccountConnectError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Manually run connection/disconnect check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountConnectionCheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountConnectionCheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Force an immediate check of whether a social account's authorization is still valid, instead of waiting for the scheduled check. Use it to surface expired tokens before a scheduled post fails.
    /// </remarks>
    public Task<ApiV1SocialAccountConnectionCheckResponse> SocialAccountConnectionCheck(SocialAccountConnectionCheckRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/connection-check"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountConnectionCheckResponse>(),
            SocialAccountConnectionCheckError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Copy social accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1SocialAccountCopyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountCopyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Copy connected social accounts from one team to another so you can reuse an existing authorization without sending the user through OAuth again.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1SocialAccountCopyResponse>> SocialAccountCopy(SocialAccountCopyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/copy"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<ApiV1SocialAccountCopyResponse>>(),
            SocialAccountCopyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create portal link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountCreatePortalLinkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountCreatePortalLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on bundle.social platform without implementing the logic on your side.
    /// </remarks>
    public Task<ApiV1SocialAccountCreatePortalLinkResponse> SocialAccountCreatePortalLink(SocialAccountCreatePortalLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/create-portal-link"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountCreatePortalLinkResponse>(),
            SocialAccountCreatePortalLinkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable DM messaging for a social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountMessagingDisableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountDisableMessagingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is DISABLE_PENDING and the call returns 502, so it can be retried.
    /// </remarks>
    public Task<ApiV1SocialAccountMessagingDisableResponse> SocialAccountDisableMessaging(SocialAccountDisableMessagingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/messaging/disable"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountMessagingDisableResponse>(),
            SocialAccountDisableMessagingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disconnect social account from team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountDisconnectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountDisconnectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This will remove the social account from all the scheduled posts too.
    /// </remarks>
    public Task<ApiV1SocialAccountDisconnectResponse> SocialAccountDisconnect(SocialAccountDisconnectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/disconnect"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountDisconnectResponse>(),
            SocialAccountDisconnectError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable DM messaging for a social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountMessagingEnableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountEnableMessagingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the organization has not been granted Instagram and Facebook direct messages and automations (email contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and 502 when Meta rejects the subscription; the account then stays DISABLED.
    /// </remarks>
    public Task<ApiV1SocialAccountMessagingEnableResponse> SocialAccountEnableMessaging(SocialAccountEnableMessagingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/messaging/enable"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountMessagingEnableResponse>(),
            SocialAccountEnableMessagingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get paginated social accounts scheduled to delete
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountToDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountGetAccountsToDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List social accounts queued for deletion, with pagination. Use it to warn users before an account and its data are permanently removed.
    /// </remarks>
    public Task<ApiV1SocialAccountToDeleteResponse> SocialAccountGetAccountsToDelete(SocialAccountGetAccountsToDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/to-delete"),
            [],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SocialAccountToDeleteResponse>(),
            SocialAccountGetAccountsToDeleteError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get social account by team and type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountByTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountGetByTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up a team's connected account for a specific platform without listing every account first. Useful when you already know which platform you want to publish to.
    /// </remarks>
    public Task<ApiV1SocialAccountByTypeResponse> SocialAccountGetByType(SocialAccountGetByTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/by-type"),
            [],
            [new Param("type", request.Type), new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SocialAccountByTypeResponse>(),
            SocialAccountGetByTypeError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Manually refresh social account profile info
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountProfileRefreshResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountProfileRefreshError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep your own UI in sync after a user renames their profile.
    /// </remarks>
    public Task<ApiV1SocialAccountProfileRefreshResponse> SocialAccountProfileRefresh(SocialAccountProfileRefreshRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/profile-refresh"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountProfileRefreshResponse>(),
            SocialAccountProfileRefreshError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh channels for social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountRefreshChannelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountRefreshChannelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit, Discord, Slack, Pinterest.
    /// </remarks>
    public Task<ApiV1SocialAccountRefreshChannelsResponse> SocialAccountRefreshChannels(SocialAccountRefreshChannelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/refresh-channels"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountRefreshChannelsResponse>(),
            SocialAccountRefreshChannelsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set channel for social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountSetChannelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountSetChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.
    /// </remarks>
    public Task<ApiV1SocialAccountSetChannelResponse> SocialAccountSetChannel(SocialAccountSetChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/set-channel"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountSetChannelResponse>(),
            SocialAccountSetChannelError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unset channel for social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SocialAccountUnsetChannelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SocialAccountUnsetChannelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clear selected channel while keeping social account authorization.
    /// </remarks>
    public Task<ApiV1SocialAccountUnsetChannelResponse> SocialAccountUnsetChannel(SocialAccountUnsetChannelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/social-account/unset-channel"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SocialAccountUnsetChannelResponse>(),
            SocialAccountUnsetChannelError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
