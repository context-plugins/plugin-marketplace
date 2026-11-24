using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Epics;

namespace Shortcut.Api;

public sealed class Epics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Epics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Epic"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Epic allows you to create a new Epic in Shortcut.
    /// </remarks>
    public Task<Epic> CreateEpic(CreateEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Epic>(),
            CreateEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Epic Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ThreadedComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEpicCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a threaded Comment on an Epic.
    /// </remarks>
    public Task<ThreadedComment> CreateEpicComment(CreateEpicCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ThreadedComment>(),
            CreateEpicCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Epic Comment Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ThreadedComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEpicCommentCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
    /// </remarks>
    public Task<ThreadedComment> CreateEpicCommentComment(CreateEpicCommentCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("epic-public-id", request.EpicPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ThreadedComment>(),
            CreateEpicCommentCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Epic Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEpicHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new health status for the specified Epic.
    /// </remarks>
    public Task<Health> CreateEpicHealth(CreateEpicHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/health"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Health>(),
            CreateEpicHealthError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
    /// </remarks>
    public Task DeleteEpic(DeleteEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Epic Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEpicCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to delete a Comment from an Epic.
    /// </remarks>
    public Task DeleteEpicComment(DeleteEpicCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("epic-public-id", request.EpicPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEpicCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Epic"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Epic returns information about the selected Epic.
    /// </remarks>
    public Task<Epic> GetEpic(GetEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Epic>(),
            GetEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Epic Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ThreadedComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpicCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint returns information about the selected Epic Comment.
    /// </remarks>
    public Task<ThreadedComment> GetEpicComment(GetEpicCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("epic-public-id", request.EpicPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ThreadedComment>(),
            GetEpicCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Epic Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpicHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current health for the specified Epic.
    /// </remarks>
    public Task<Health> GetEpicHealth(GetEpicHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/health"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            GetEpicHealthError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epic Comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ThreadedComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all Comments on an Epic.
    /// </remarks>
    public Task<IReadOnlyList<ThreadedComment>> ListEpicComments(ListEpicCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ThreadedComment>>(),
            ListEpicCommentsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epic Documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DocSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all Documents related to this Epic.
    /// </remarks>
    public Task<IReadOnlyList<DocSlim>> ListEpicDocuments(ListEpicDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/documents"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DocSlim>>(),
            ListEpicDocumentsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epic Healths
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicHealthsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the history of health statuses for the specified Epic, most recent first.
    /// </remarks>
    public Task<IReadOnlyList<Health>> ListEpicHealths(ListEpicHealthsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/health-history"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Health>>(),
            ListEpicHealthsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epic Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all Stories in an Epic.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> ListEpicStories(ListEpicStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/stories"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [new Param("includes_description", request.IncludesDescription)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            ListEpicStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EpicSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Epics returns a list of all Epics and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<EpicSlim>> ListEpics(ListEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics"),
            [],
            [new Param("includes_description", request.IncludesDescription)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EpicSlim>>(),
            ListEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Epics Paginated
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpicPaginatedResults"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpicsPaginatedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Epics with pagination returns a paginated list of Epics and their attributes.
    /// </remarks>
    public Task<EpicPaginatedResults> ListEpicsPaginated(ListEpicsPaginatedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/paginated"),
            [],
            [
                new Param("includes_description", request.IncludesDescription),
                new Param("page", request.Page),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpicPaginatedResults>(),
            ListEpicsPaginatedError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Epic"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
    /// </remarks>
    public Task<Epic> UpdateEpic(UpdateEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}"),
            [new TemplateParam("epic-public-id", request.EpicPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Epic>(),
            UpdateEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Epic Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ThreadedComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEpicCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to update a threaded Comment on an Epic.
    /// </remarks>
    public Task<ThreadedComment> UpdateEpicComment(UpdateEpicCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("epic-public-id", request.EpicPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ThreadedComment>(),
            UpdateEpicCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
