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
using BundleSocial.Requests.Misc;

namespace BundleSocial.Api;

public sealed class Misc
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Misc(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a Bluesky comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscBlueskyCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscBlueskyDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Bluesky reply/comment.
    /// </remarks>
    public Task<ApiV1MiscBlueskyCommentResponse> MiscBlueskyDeleteComment(MiscBlueskyDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/bluesky/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscBlueskyCommentResponse>(),
            MiscBlueskyDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Bluesky post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscBlueskyPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscBlueskyDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Bluesky post.
    /// </remarks>
    public Task<ApiV1MiscBlueskyPostResponse> MiscBlueskyDeletePost(MiscBlueskyDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/bluesky/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscBlueskyPostResponse>(),
            MiscBlueskyDeletePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Discord message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscDiscordMessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscDiscordDeleteMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Discord message.
    /// </remarks>
    public Task<ApiV1MiscDiscordMessageResponse> MiscDiscordDeleteMessage(MiscDiscordDeleteMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/discord/message"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscDiscordMessageResponse>(),
            MiscDiscordDeleteMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Facebook comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookCommentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Facebook comment.
    /// </remarks>
    public Task<ApiV1MiscFacebookCommentResponse1> MiscFacebookDeleteComment(MiscFacebookDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookCommentResponse1>(),
            MiscFacebookDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Facebook post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookPostResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Facebook post or reel.
    /// </remarks>
    public Task<ApiV1MiscFacebookPostResponse1> MiscFacebookDeletePost(MiscFacebookDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookPostResponse1>(),
            MiscFacebookDeletePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit a Facebook comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookEditCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published Facebook comment.
    /// </remarks>
    public Task<ApiV1MiscFacebookCommentResponse> MiscFacebookEditComment(MiscFacebookEditCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookCommentResponse>(),
            MiscFacebookEditCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing Facebook post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookEditPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media cannot be changed.
    /// </remarks>
    public Task<ApiV1MiscFacebookPostResponse> MiscFacebookEditPost(MiscFacebookEditPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookPostResponse>(),
            MiscFacebookEditPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single imported Facebook recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetRecommendationByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsResponse1> MiscFacebookGetRecommendationById(MiscFacebookGetRecommendationByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/{recommendationId}"),
            [new TemplateParam("recommendationId", request.RecommendationId)],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsResponse1>(),
            MiscFacebookGetRecommendationByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get recommendation thread comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsCommentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetRecommendationCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the comments in a Facebook recommendation thread so you can see the full conversation before replying.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsCommentsResponse> MiscFacebookGetRecommendationComments(MiscFacebookGetRecommendationCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/{recommendationId}/comments"),
            [new TemplateParam("recommendationId", request.RecommendationId)],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsCommentsResponse>(),
            MiscFacebookGetRecommendationCommentsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Facebook recommendations import by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetRecommendationImportByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the status, progress, and result of a single Facebook recommendations import job.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsImportResponse> MiscFacebookGetRecommendationImportById(MiscFacebookGetRecommendationImportByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/import/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsImportResponse>(),
            MiscFacebookGetRecommendationImportByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Facebook recommendations import status list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsImportResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetRecommendationImportStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running, finished, or failed.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsImportResponse1> MiscFacebookGetRecommendationImportStatus(MiscFacebookGetRecommendationImportStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/import"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsImportResponse1>(),
            MiscFacebookGetRecommendationImportStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List imported Facebook recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the Facebook Page recommendations pulled in by an import, with paging and your remaining import capacity. Use it to build a reputation-management inbox.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsResponse> MiscFacebookGetRecommendations(MiscFacebookGetRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsResponse>(),
            MiscFacebookGetRecommendationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Facebook text background presets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookTextFormatPresetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetTextFormatPresetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId, grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also accepted and passed straight through to Facebook.
    /// </remarks>
    public Task<ApiV1MiscFacebookTextFormatPresetsResponse> MiscFacebookGetTextFormatPresets(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/text-format-presets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookTextFormatPresetsResponse>(),
            MiscFacebookGetTextFormatPresetsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Facebook token debug details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookTokenDebugResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookGetTokenDebugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose permission errors when publishing fails.
    /// </remarks>
    public Task<ApiV1MiscFacebookTokenDebugResponse> MiscFacebookGetTokenDebug(MiscFacebookGetTokenDebugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/token-debug"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookTokenDebugResponse>(),
            MiscFacebookGetTokenDebugError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a new Facebook recommendations import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookImportRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so you can read and reply to them through the API.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsImportResponse> MiscFacebookImportRecommendations(MiscFacebookImportRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsImportResponse>(),
            MiscFacebookImportRecommendationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reply to a Facebook recommendation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsReplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookReplyToRecommendationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of through Meta Business Suite.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsReplyResponse> MiscFacebookReplyToRecommendation(MiscFacebookReplyToRecommendationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/{recommendationId}/reply"),
            [new TemplateParam("recommendationId", request.RecommendationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsReplyResponse>(),
            MiscFacebookReplyToRecommendationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reply to a Facebook recommendation thread comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookRecommendationsCommentsReplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookReplyToRecommendationCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish a reply to a specific comment inside a Facebook recommendation thread.
    /// </remarks>
    public Task<ApiV1MiscFacebookRecommendationsCommentsReplyResponse> MiscFacebookReplyToRecommendationComment(MiscFacebookReplyToRecommendationCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/recommendations/{recommendationId}/comments/{commentId}/reply"),
            [
                new TemplateParam("recommendationId", request.RecommendationId),
                new TemplateParam("commentId", request.CommentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscFacebookRecommendationsCommentsReplyResponse>(),
            MiscFacebookReplyToRecommendationCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Facebook Pages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscFacebookPagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscFacebookSearchPagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.
    /// </remarks>
    public Task<ApiV1MiscFacebookPagesResponse> MiscFacebookSearchPages(MiscFacebookSearchPagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/facebook/pages"),
            [],
            [new Param("teamId", request.TeamId), new Param("q", request.Q), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscFacebookPagesResponse>(),
            MiscFacebookSearchPagesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a media item (photo/video) using uploadId and category
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessMediaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessAddMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessMediaResponse> MiscGoogleBusinessAddMedia(MiscGoogleBusinessAddMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/media"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessMediaResponse>(),
            MiscGoogleBusinessAddMediaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Google Business place action link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessCreatePlaceActionLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can convert straight from the listing.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1> MiscGoogleBusinessCreatePlaceActionLink(MiscGoogleBusinessCreatePlaceActionLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/place-action-links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1>(),
            MiscGoogleBusinessCreatePlaceActionLinkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Google Business media item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessMediaResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessDeleteMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a photo or video from your Google Business Profile.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessMediaResponse2> MiscGoogleBusinessDeleteMedia(MiscGoogleBusinessDeleteMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/media"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessMediaResponse2>(),
            MiscGoogleBusinessDeleteMediaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Google Business place action link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessDeletePlaceActionLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove an action link from your Google Business Profile, for example when a booking URL is retired.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3> MiscGoogleBusinessDeletePlaceActionLink(MiscGoogleBusinessDeletePlaceActionLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/place-action-links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3>(),
            MiscGoogleBusinessDeletePlaceActionLinkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Google Business post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Google Business post.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessPostResponse> MiscGoogleBusinessDeletePost(MiscGoogleBusinessDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessPostResponse>(),
            MiscGoogleBusinessDeletePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete the owner reply from a Google Review
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsReplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessDeleteReviewReplyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove your owner reply from a Google Review, leaving the customer's review in place.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsReplyResponse> MiscGoogleBusinessDeleteReviewReply(MiscGoogleBusinessDeleteReviewReplyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            [new TemplateParam("reviewId", request.ReviewId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsReplyResponse>(),
            MiscGoogleBusinessDeleteReviewReplyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Business location attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationAttributesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the attributes currently set on your Google Business Profile location, such as accessibility, payment options, or amenities.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationAttributesResponse> MiscGoogleBusinessGetAttributes(MiscGoogleBusinessGetAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/attributes"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationAttributesResponse>(),
            MiscGoogleBusinessGetAttributesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Business food menus
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationFoodMenusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetFoodMenusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use typed query param <c>fields</c>. Supports both comma-separated values (<c>fields=name,menus</c>) and repeated params (<c>fields=name&amp;fields=menus</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationFoodMenusResponse> MiscGoogleBusinessGetFoodMenus(MiscGoogleBusinessGetFoodMenusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/food-menus"),
            [],
            [new Param("teamId", request.TeamId), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationFoodMenusResponse>(),
            MiscGoogleBusinessGetFoodMenusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Business location profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use typed query param <c>fields</c>. Supports both comma-separated values (<c>fields=name,title</c>) and repeated params (<c>fields=name&amp;fields=title</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationResponse> MiscGoogleBusinessGetLocation(MiscGoogleBusinessGetLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location"),
            [],
            [new Param("teamId", request.TeamId), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationResponse>(),
            MiscGoogleBusinessGetLocationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single imported Google Review
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetReviewByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsResponse1> MiscGoogleBusinessGetReviewById(MiscGoogleBusinessGetReviewByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/{reviewId}"),
            [new TemplateParam("reviewId", request.ReviewId)],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsResponse1>(),
            MiscGoogleBusinessGetReviewByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get review import by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetReviewImportByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the status, progress, and result of a single Google Reviews import job.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsImportResponse> MiscGoogleBusinessGetReviewImportById(MiscGoogleBusinessGetReviewImportByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/import/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsImportResponse>(),
            MiscGoogleBusinessGetReviewImportByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get review import status list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsImportResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetReviewImportStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or failed.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsImportResponse1> MiscGoogleBusinessGetReviewImportStatus(MiscGoogleBusinessGetReviewImportStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/import"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsImportResponse1>(),
            MiscGoogleBusinessGetReviewImportStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List imported Google Reviews
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to build a review inbox or monitor rating trends.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsResponse> MiscGoogleBusinessGetReviews(MiscGoogleBusinessGetReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsResponse>(),
            MiscGoogleBusinessGetReviewsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Google Business service list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationServiceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessGetServiceListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the services listed on your Google Business Profile, including custom services and prices.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationServiceListResponse> MiscGoogleBusinessGetServiceList(MiscGoogleBusinessGetServiceListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/service-list"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationServiceListResponse>(),
            MiscGoogleBusinessGetServiceListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a new Google Reviews import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessImportReviewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can read and reply to them through the API.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsImportResponse> MiscGoogleBusinessImportReviews(MiscGoogleBusinessImportReviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsImportResponse>(),
            MiscGoogleBusinessImportReviewsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List available Google Business attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessListAvailableAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the attributes Google allows for your location's category and country. Check this before updating attributes, since the valid set differs per business category. <c>regionCode</c>/<c>languageCode</c> are honoured by looking the attributes up through the location's primary category; when that category or a region code cannot be resolved (common for service-area businesses with no storefront address) the location's own defaults are returned instead and <c>lookup.by</c> comes back as <c>location</c>, meaning those two parameters were not applied.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse> MiscGoogleBusinessListAvailableAttributes(MiscGoogleBusinessListAvailableAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/attributes/available"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("languageCode", request.LanguageCode),
                new Param("regionCode", request.RegionCode),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse>(),
            MiscGoogleBusinessListAvailableAttributesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List available Google Business categories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessListCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Requires <c>regionCode</c> and <c>languageCode</c>. Default <c>view=BASIC</c>. Optional <c>names</c> fetches exact category IDs through <c>categories:batchGet</c>; otherwise <c>filter</c> supports <c>displayName</c> prefix search.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse> MiscGoogleBusinessListCategories(MiscGoogleBusinessListCategoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/categories/available"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("regionCode", request.RegionCode),
                new Param("languageCode", request.LanguageCode),
                new Param("names", request.Names),
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("view", request.View),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse>(),
            MiscGoogleBusinessListCategoriesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Google Business media items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessMediaResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessListMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are live before adding or removing media.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessMediaResponse1> MiscGoogleBusinessListMedia(MiscGoogleBusinessListMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/media"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessMediaResponse1>(),
            MiscGoogleBusinessListMediaError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Google Business place action links
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessListPlaceActionLinksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse> MiscGoogleBusinessListPlaceActionLinks(MiscGoogleBusinessListPlaceActionLinksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/place-action-links"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse>(),
            MiscGoogleBusinessListPlaceActionLinksError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the search terms customers used to find the location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessListSearchKeywordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Monthly search keyword impressions for your selected location. <c>startMonth</c>/<c>endMonth</c> are inclusive <c>YYYY-MM</c> values; counts are aggregated across the whole range, so request a single month for a per-month figure. Each keyword returns either an exact <c>value</c> or a <c>threshold</c>, meaning the real count is below that number: low-volume keywords are only ever reported as a threshold, so treat a null <c>value</c> as suppressed rather than zero. Counts are unique users, not raw impressions. Paginated with <c>pageToken</c>/<c>nextPageToken</c>, max <c>pageSize</c> 100.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse> MiscGoogleBusinessListSearchKeywords(MiscGoogleBusinessListSearchKeywordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/search-keywords"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("startMonth", request.StartMonth),
                new Param("endMonth", request.EndMonth),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse>(),
            MiscGoogleBusinessListSearchKeywordsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reply to a Google Review (creates or updates the owner reply)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessReviewsReplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessReplyToReviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending again overwrites the previous text.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessReviewsReplyResponse> MiscGoogleBusinessReplyToReview(MiscGoogleBusinessReplyToReviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/reviews/{reviewId}/reply"),
            [new TemplateParam("reviewId", request.ReviewId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessReviewsReplyResponse>(),
            MiscGoogleBusinessReplyToReviewError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business location attributes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationAttributesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdateAttributesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Set or change attributes on your Google Business Profile location. Complete attributes help your listing surface for more specific local searches.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationAttributesResponse> MiscGoogleBusinessUpdateAttributes(MiscGoogleBusinessUpdateAttributesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/attributes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationAttributesResponse>(),
            MiscGoogleBusinessUpdateAttributesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business food menus
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationFoodMenusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdateFoodMenusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Body requires <c>fields</c> (<c>menus</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationFoodMenusResponse> MiscGoogleBusinessUpdateFoodMenus(MiscGoogleBusinessUpdateFoodMenusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/food-menus"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationFoodMenusResponse>(),
            MiscGoogleBusinessUpdateFoodMenusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business regular/special/more hours
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationHoursResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdateHoursError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Body requires <c>fields</c> (<c>regularHours</c>, <c>specialHours</c>, <c>moreHours</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationHoursResponse> MiscGoogleBusinessUpdateHours(MiscGoogleBusinessUpdateHoursRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/hours"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationHoursResponse>(),
            MiscGoogleBusinessUpdateHoursError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business location profile fields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdateLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Field mask is derived automatically from provided fields.
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationResponse> MiscGoogleBusinessUpdateLocation(MiscGoogleBusinessUpdateLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationResponse>(),
            MiscGoogleBusinessUpdateLocationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business place action link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdatePlaceActionLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Body requires <c>fields</c> (<c>uri</c>, <c>placeActionType</c>, <c>isPreferred</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1> MiscGoogleBusinessUpdatePlaceActionLink(MiscGoogleBusinessUpdatePlaceActionLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/place-action-links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1>(),
            MiscGoogleBusinessUpdatePlaceActionLinkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Google Business service list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscGoogleBusinessLocationServiceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscGoogleBusinessUpdateServiceListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Body requires <c>fields</c> (<c>serviceItems</c>).
    /// </remarks>
    public Task<ApiV1MiscGoogleBusinessLocationServiceListResponse> MiscGoogleBusinessUpdateServiceList(MiscGoogleBusinessUpdateServiceListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/google-business/location/service-list"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscGoogleBusinessLocationServiceListResponse>(),
            MiscGoogleBusinessUpdateServiceListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for Instagram Business/Creator user by username
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscInstagramTagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscInstagramBusinessDiscoveryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and profile picture if available.
    /// </remarks>
    public Task<ApiV1MiscInstagramTagsResponse> MiscInstagramBusinessDiscovery(MiscInstagramBusinessDiscoveryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/instagram/tags"),
            [],
            [new Param("teamId", request.TeamId), new Param("username", request.Username)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscInstagramTagsResponse>(),
            MiscInstagramBusinessDiscoveryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Instagram comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscInstagramCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscInstagramDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Instagram comment.
    /// </remarks>
    public Task<ApiV1MiscInstagramCommentResponse> MiscInstagramDeleteComment(MiscInstagramDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/instagram/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscInstagramCommentResponse>(),
            MiscInstagramDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Instagram audio assets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscInstagramAudioResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscInstagramSearchAudioError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts connected via Facebook Login.
    /// </remarks>
    public Task<ApiV1MiscInstagramAudioResponse> MiscInstagramSearchAudio(MiscInstagramSearchAudioRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/instagram/audio"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("audioType", request.AudioType),
                new Param("searchQuery", request.SearchQuery),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscInstagramAudioResponse>(),
            MiscInstagramSearchAudioError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Instagram location IDs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscInstagramLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscInstagramSearchLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches Facebook Pages with physical location data and returns IDs that can be used as data.INSTAGRAM.locationId.
    /// </remarks>
    public Task<ApiV1MiscInstagramLocationsResponse> MiscInstagramSearchLocations(MiscInstagramSearchLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/instagram/locations"),
            [],
            [new Param("teamId", request.TeamId), new Param("q", request.Q), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscInstagramLocationsResponse>(),
            MiscInstagramSearchLocationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Build Linkedin text, insert mentions at tag placeholders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinMentionsBuilderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinBuildCommentaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.
    /// </remarks>
    public Task<ApiV1MiscLinkedinMentionsBuilderResponse> MiscLinkedinBuildCommentary(MiscLinkedinBuildCommentaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/mentions/builder"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinMentionsBuilderResponse>(),
            MiscLinkedinBuildCommentaryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a LinkedIn comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinCommentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published LinkedIn comment.
    /// </remarks>
    public Task<ApiV1MiscLinkedinCommentResponse1> MiscLinkedinDeleteComment(MiscLinkedinDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinCommentResponse1>(),
            MiscLinkedinDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a LinkedIn post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinPostResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published LinkedIn post.
    /// </remarks>
    public Task<ApiV1MiscLinkedinPostResponse1> MiscLinkedinDeletePost(MiscLinkedinDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinPostResponse1>(),
            MiscLinkedinDeletePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing LinkedIn comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinEditCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published LinkedIn comment.
    /// </remarks>
    public Task<ApiV1MiscLinkedinCommentResponse> MiscLinkedinEditComment(MiscLinkedinEditCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinCommentResponse>(),
            MiscLinkedinEditCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing LinkedIn post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinEditPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published LinkedIn post.
    /// </remarks>
    public Task<ApiV1MiscLinkedinPostResponse> MiscLinkedinEditPost(MiscLinkedinEditPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinPostResponse>(),
            MiscLinkedinEditPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Linkedin mentionable tags (people &amp; organizations)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinMentionsTagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinGetTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly (case sensitive), so a vanity slug never works. When a person is resolved from <c>url</c> but LinkedIn does not expose their name, the tag comes back with an empty <c>display</c> and <c>needsDisplayName: true</c> — pass <c>displayName</c> to set it. Note that a page can only mention its own followers.
    /// </remarks>
    public Task<ApiV1MiscLinkedinMentionsTagsResponse> MiscLinkedinGetTags(MiscLinkedinGetTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/mentions/tags"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("q", request.Q),
                new Param("url", request.Url),
                new Param("displayName", request.DisplayName),
                new Param("scope", request.Scope),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscLinkedinMentionsTagsResponse>(),
            MiscLinkedinGetTagsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reshare an existing LinkedIn post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscLinkedinPostReshareResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscLinkedinResharePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a LinkedIn reshare as the currently selected LinkedIn channel.
    /// </remarks>
    public Task<ApiV1MiscLinkedinPostReshareResponse> MiscLinkedinResharePost(MiscLinkedinResharePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/linkedin/post/reshare"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscLinkedinPostReshareResponse>(),
            MiscLinkedinResharePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Mastodon comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscMastodonCommentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscMastodonDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Mastodon reply/comment.
    /// </remarks>
    public Task<ApiV1MiscMastodonCommentResponse1> MiscMastodonDeleteComment(MiscMastodonDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/mastodon/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscMastodonCommentResponse1>(),
            MiscMastodonDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Mastodon status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscMastodonStatusResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscMastodonDeleteStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Mastodon status.
    /// </remarks>
    public Task<ApiV1MiscMastodonStatusResponse1> MiscMastodonDeleteStatus(MiscMastodonDeleteStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/mastodon/status"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscMastodonStatusResponse1>(),
            MiscMastodonDeleteStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit a Mastodon comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscMastodonCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscMastodonEditCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published Mastodon reply/comment.
    /// </remarks>
    public Task<ApiV1MiscMastodonCommentResponse> MiscMastodonEditComment(MiscMastodonEditCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/mastodon/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscMastodonCommentResponse>(),
            MiscMastodonEditCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing Mastodon status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscMastodonStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscMastodonEditStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content and spoiler text of a published Mastodon status.
    /// </remarks>
    public Task<ApiV1MiscMastodonStatusResponse> MiscMastodonEditStatus(MiscMastodonEditStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/mastodon/status"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscMastodonStatusResponse>(),
            MiscMastodonEditStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Pinterest pin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscPinterestPinResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscPinterestDeletePinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Pinterest pin.
    /// </remarks>
    public Task<ApiV1MiscPinterestPinResponse1> MiscPinterestDeletePin(MiscPinterestDeletePinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/pinterest/pin"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscPinterestPinResponse1>(),
            MiscPinterestDeletePinError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// [DISABLED] Edit an existing Pinterest pin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscPinterestPinResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscPinterestEditPinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Temporarily disabled
    /// </remarks>
    public Task<ApiV1MiscPinterestPinResponse> MiscPinterestEditPin(MiscPinterestEditPinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/pinterest/pin"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscPinterestPinResponse>(),
            MiscPinterestEditPinError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Reddit comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscRedditCommentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Reddit comment.
    /// </remarks>
    public Task<ApiV1MiscRedditCommentResponse1> MiscRedditDeleteComment(MiscRedditDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscRedditCommentResponse1>(),
            MiscRedditDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Reddit post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscRedditPostResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditDeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Reddit post.
    /// </remarks>
    public Task<ApiV1MiscRedditPostResponse1> MiscRedditDeletePost(MiscRedditDeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscRedditPostResponse1>(),
            MiscRedditDeletePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing Reddit comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscRedditCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditEditCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published Reddit comment.
    /// </remarks>
    public Task<ApiV1MiscRedditCommentResponse> MiscRedditEditComment(MiscRedditEditCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscRedditCommentResponse>(),
            MiscRedditEditCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing Reddit post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscRedditPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditEditPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.
    /// </remarks>
    public Task<ApiV1MiscRedditPostResponse> MiscRedditEditPost(MiscRedditEditPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/post"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscRedditPostResponse>(),
            MiscRedditEditPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subreddit post requirements (flair required/enabled)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscRedditPostRequirementsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditGetPostRequirementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call this first to avoid rejected submissions.
    /// </remarks>
    public Task<ApiV1MiscRedditPostRequirementsResponse> MiscRedditGetPostRequirements(MiscRedditGetPostRequirementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/post-requirements"),
            [],
            [new Param("teamId", request.TeamId), new Param("subreddit", request.Subreddit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscRedditPostRequirementsResponse>(),
            MiscRedditGetPostRequirementsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subreddit flairs list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1MiscRedditSubredditFlairsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscRedditGetSubredditFlairsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1MiscRedditSubredditFlairsResponse>> MiscRedditGetSubredditFlairs(MiscRedditGetSubredditFlairsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/reddit/subreddit-flairs"),
            [],
            [new Param("teamId", request.TeamId), new Param("subreddit", request.Subreddit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApiV1MiscRedditSubredditFlairsResponse>>(),
            MiscRedditGetSubredditFlairsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Slack message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscSlackMessageResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscSlackDeleteMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Slack message.
    /// </remarks>
    public Task<ApiV1MiscSlackMessageResponse1> MiscSlackDeleteMessage(MiscSlackDeleteMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/slack/message"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscSlackMessageResponse1>(),
            MiscSlackDeleteMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit an existing Slack message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscSlackMessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscSlackEditMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published Slack message.
    /// </remarks>
    public Task<ApiV1MiscSlackMessageResponse> MiscSlackEditMessage(MiscSlackEditMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/slack/message"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscSlackMessageResponse>(),
            MiscSlackEditMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a TikTok comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTiktokCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTiktokDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a published TikTok comment.
    /// </remarks>
    public Task<ApiV1MiscTiktokCommentResponse> MiscTiktokDeleteComment(MiscTiktokDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/tiktok/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscTiktokCommentResponse>(),
            MiscTiktokDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get popular tracks from TikTok Commercial Music Library
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ApiV1MiscTiktokCmlTrendingListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTiktokGetCommercialMusicTrendingListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.
    /// </remarks>
    public Task<IReadOnlyList<ApiV1MiscTiktokCmlTrendingListResponse>> MiscTiktokGetCommercialMusicTrendingList(MiscTiktokGetCommercialMusicTrendingListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/tiktok/cml/trending-list"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("genre", request.Genre),
                new Param("dateRange", request.DateRange),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ApiV1MiscTiktokCmlTrendingListResponse>>(),
            MiscTiktokGetCommercialMusicTrendingListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the posting options of a TikTok account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTiktokPostSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTiktokGetPostSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer, not as a check before every publish: each call counts against the account's TikTok rate limit.
    /// </remarks>
    public Task<ApiV1MiscTiktokPostSettingsResponse> MiscTiktokGetPostSettings(MiscTiktokGetPostSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/tiktok/post-settings"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscTiktokPostSettingsResponse>(),
            MiscTiktokGetPostSettingsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search TikTok location tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTiktokLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTiktokSearchLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches location tags available to the connected TikTok account (up to 20 results). Pass <c>locationId</c> and <c>name</c> as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.
    /// </remarks>
    public Task<ApiV1MiscTiktokLocationsResponse> MiscTiktokSearchLocations(MiscTiktokSearchLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/tiktok/locations"),
            [],
            [new Param("teamId", request.TeamId), new Param("q", request.Q)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscTiktokLocationsResponse>(),
            MiscTiktokSearchLocationsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Twitter/X comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTwitterCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTwitterDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).
    /// </remarks>
    public Task<ApiV1MiscTwitterCommentResponse> MiscTwitterDeleteComment(MiscTwitterDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/twitter/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscTwitterCommentResponse>(),
            MiscTwitterDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Twitter/X tweet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTwitterTweetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTwitterDeleteTweetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).
    /// </remarks>
    public Task<ApiV1MiscTwitterTweetResponse> MiscTwitterDeleteTweet(MiscTwitterDeleteTweetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/twitter/tweet"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscTwitterTweetResponse>(),
            MiscTwitterDeleteTweetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Repost a Twitter/X post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTwitterRetweetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTwitterRetweetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.
    /// </remarks>
    public Task<ApiV1MiscTwitterRetweetResponse> MiscTwitterRetweet(MiscTwitterRetweetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/twitter/retweet"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscTwitterRetweetResponse>(),
            MiscTwitterRetweetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Undo a Twitter/X repost
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscTwitterRetweetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscTwitterUnretweetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your credits are charged once per post, per connected account, per UTC day, the same way reposting is.
    /// </remarks>
    public Task<ApiV1MiscTwitterRetweetResponse> MiscTwitterUnretweet(MiscTwitterUnretweetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/twitter/retweet"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscTwitterRetweetResponse>(),
            MiscTwitterUnretweetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a video to a playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubePlaylistItemsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeAddVideoToPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Append a video to a YouTube playlist on a connected channel.
    /// </remarks>
    public Task<ApiV1MiscYoutubePlaylistItemsResponse> MiscYoutubeAddVideoToPlaylist(MiscYoutubeAddVideoToPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist-items"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubePlaylistItemsResponse>(),
            MiscYoutubeAddVideoToPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubePlaylistResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeCreateNewChannelPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists group related videos and increase session watch time.
    /// </remarks>
    public Task<ApiV1MiscYoutubePlaylistResponse1> MiscYoutubeCreateNewChannelPlaylist(MiscYoutubeCreateNewChannelPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubePlaylistResponse1>(),
            MiscYoutubeCreateNewChannelPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a channel playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeDeleteChannelPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.
    /// </remarks>
    public Task<bool> MiscYoutubeDeleteChannelPlaylist(MiscYoutubeDeleteChannelPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist/{playlistId}"),
            [new TemplateParam("playlistId", request.PlaylistId)],
            [new Param("teamId", request.TeamId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<bool>(),
            MiscYoutubeDeleteChannelPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a YouTube comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeCommentResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeDeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published YouTube comment.
    /// </remarks>
    public Task<ApiV1MiscYoutubeCommentResponse1> MiscYoutubeDeleteComment(MiscYoutubeDeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubeCommentResponse1>(),
            MiscYoutubeDeleteCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a YouTube video
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeVideoResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeDeleteVideoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a published YouTube video.
    /// </remarks>
    public Task<ApiV1MiscYoutubeVideoResponse1> MiscYoutubeDeleteVideo(MiscYoutubeDeleteVideoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/video"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubeVideoResponse1>(),
            MiscYoutubeDeleteVideoError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a video from a playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeDeleteVideoFromPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself stays on the channel.
    /// </remarks>
    public Task<bool> MiscYoutubeDeleteVideoFromPlaylist(MiscYoutubeDeleteVideoFromPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist-items/{playlistItemId}"),
            [new TemplateParam("playlistItemId", request.PlaylistItemId)],
            [new Param("teamId", request.TeamId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<bool>(),
            MiscYoutubeDeleteVideoFromPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit YouTube comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeCommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeEditCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the text content of a published YouTube comment.
    /// </remarks>
    public Task<ApiV1MiscYoutubeCommentResponse> MiscYoutubeEditComment(MiscYoutubeEditCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/comment"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubeCommentResponse>(),
            MiscYoutubeEditCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Edit YouTube video metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeVideoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeEditVideoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the title, description, tags, category, or privacy status of a published YouTube video.
    /// </remarks>
    public Task<ApiV1MiscYoutubeVideoResponse> MiscYoutubeEditVideo(MiscYoutubeEditVideoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/video"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubeVideoResponse>(),
            MiscYoutubeEditVideoError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get channel playlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubePlaylistResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeGetChannelPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.
    /// </remarks>
    public Task<ApiV1MiscYoutubePlaylistResponse> MiscYoutubeGetChannelPlaylist(MiscYoutubeGetChannelPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist"),
            [],
            [new Param("teamId", request.TeamId), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscYoutubePlaylistResponse>(),
            MiscYoutubeGetChannelPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get YouTube regions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeRegionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeGetRegionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the list of content regions that the YouTube website supports.
    /// </remarks>
    public Task<ApiV1MiscYoutubeRegionsResponse> MiscYoutubeGetRegions(MiscYoutubeGetRegionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/regions"),
            [],
            [new Param("teamId", request.TeamId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscYoutubeRegionsResponse>(),
            MiscYoutubeGetRegionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get YouTube video categories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeVideoCategoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeGetVideoCategoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the list of video categories that can be associated with YouTube videos for a specific region.
    /// </remarks>
    public Task<ApiV1MiscYoutubeVideoCategoriesResponse> MiscYoutubeGetVideoCategories(MiscYoutubeGetVideoCategoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/video-categories"),
            [],
            [new Param("teamId", request.TeamId), new Param("regionCode", request.RegionCode)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscYoutubeVideoCategoriesResponse>(),
            MiscYoutubeGetVideoCategoriesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get videos from a playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubePlaylistItemsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeGetVideosFromPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.
    /// </remarks>
    public Task<ApiV1MiscYoutubePlaylistItemsResponse1> MiscYoutubeGetVideosFromPlaylist(MiscYoutubeGetVideosFromPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist-items"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("playlistId", request.PlaylistId),
                new Param("maxResults", request.MaxResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1MiscYoutubePlaylistItemsResponse1>(),
            MiscYoutubeGetVideosFromPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set or change thumbnail for a YouTube video
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubeThumbnailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeSetThumbnailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and strongly influence click-through rate.
    /// </remarks>
    public Task<ApiV1MiscYoutubeThumbnailResponse> MiscYoutubeSetThumbnail(MiscYoutubeSetThumbnailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/thumbnail"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubeThumbnailResponse>(),
            MiscYoutubeSetThumbnailError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an existing playlist
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1MiscYoutubePlaylistResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MiscYoutubeUpdateChannelPlaylistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the playlist ID together with the fields you want to update.
    /// </remarks>
    public Task<ApiV1MiscYoutubePlaylistResponse1> MiscYoutubeUpdateChannelPlaylist(MiscYoutubeUpdateChannelPlaylistRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/misc/youtube/playlist"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1MiscYoutubePlaylistResponse1>(),
            MiscYoutubeUpdateChannelPlaylistError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
