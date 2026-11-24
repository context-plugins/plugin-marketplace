using System;
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
using BundleSocial.Requests.ConversationApi;

namespace BundleSocial.Api;

/// <summary>
/// Read and reply to Instagram and Facebook direct message conversations, react to messages, and send private replies to comments.
/// </summary>
public sealed class ConversationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ConversationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Archive conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsArchiveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationArchiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move a conversation out of the active inbox. Incoming messages reopen it automatically.
    /// </remarks>
    public Task<ApiV1ConversationsArchiveResponse> ConversationArchive(ConversationArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ConversationsArchiveResponse>(),
            ConversationArchiveError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single conversation by id, including the participant, the linked social account and its unread and status flags.
    /// </remarks>
    public Task<ApiV1ConversationsResponse1> ConversationGet(ConversationGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ConversationsResponse1>(),
            ConversationGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get conversations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List conversations for a team, newest activity first. Filter by <c>socialAccountId</c>, <c>platform</c> and <c>status</c>. Paginate with <c>offset</c> (<c>limit</c> max 500, default 10) or by passing the previous response's <c>nextCursor</c> back as <c>cursor</c>; the two cannot be combined. <c>total</c> is returned on the first page only.
    /// </remarks>
    public Task<ApiV1ConversationsResponse> ConversationGetList(ConversationGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("platform", request.Platform),
                new Param("socialAccountId", request.SocialAccountId),
                new Param("status", request.Status),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ConversationsResponse>(),
            ConversationGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get conversation messages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationGetMessagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with <c>offset</c> (<c>limit</c> max 500, default 10) or by passing the previous response's <c>nextCursor</c> back as <c>cursor</c>; the two cannot be combined. <c>total</c> is returned on the first page only.
    /// </remarks>
    public Task<ApiV1ConversationsMessagesResponse> ConversationGetMessages(ConversationGetMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/messages"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ConversationsMessagesResponse>(),
            ConversationGetMessagesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mark conversation as read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsReadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationMarkReadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clear the unread state of a conversation, optionally up to a specific message.
    /// </remarks>
    public Task<ApiV1ConversationsReadResponse> ConversationMarkRead(ConversationMarkReadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/read"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ConversationsReadResponse>(),
            ConversationMarkReadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Open conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsOpenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationOpenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move an archived or closed conversation back into the active inbox.
    /// </remarks>
    public Task<ApiV1ConversationsOpenResponse> ConversationOpen(ConversationOpenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/open"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ConversationsOpenResponse>(),
            ConversationOpenError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a private reply to a fetched Meta comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsPrivateReplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationPrivateReplyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.
    /// </remarks>
    public Task<ApiV1ConversationsPrivateReplyResponse> ConversationPrivateReply(ConversationPrivateReplyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/private-reply"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ConversationsPrivateReplyResponse>(),
            ConversationPrivateReplyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// React or unreact to a conversation message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsMessagesReactionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationReactMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily disabled.
    /// </remarks>
    public Task<ApiV1ConversationsMessagesReactionResponse> ConversationReactMessage(ConversationReactMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/messages/{messageId}/reaction"),
            [new TemplateParam("id", request.Id), new TemplateParam("messageId", request.MessageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ConversationsMessagesReactionResponse>(),
            ConversationReactMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a conversation message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsMessagesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationSendMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to the participant of a conversation. The platform reply window must still be open. Returns 503 while messaging sending is temporarily disabled.
    /// </remarks>
    public Task<ApiV1ConversationsMessagesResponse1> ConversationSendMessage(ConversationSendMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}/messages"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ConversationsMessagesResponse1>(),
            ConversationSendMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ConversationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConversationUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set the status of a conversation. This is the general form of the archive and open endpoints, which move a conversation to one specific status.
    /// </remarks>
    public Task<ApiV1ConversationsResponse1> ConversationUpdate(ConversationUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/conversations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ConversationsResponse1>(),
            ConversationUpdateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
