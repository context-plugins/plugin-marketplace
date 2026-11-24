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
using Shortcut.Requests.Stories;

namespace Shortcut.Api;

public sealed class Stories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Stories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Multiple Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMultipleStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as Create Story.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> CreateMultipleStories(CreateMultipleStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            CreateMultipleStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Story
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Story"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Story is used to add a new story to your Shortcut Workspace.
    /// This endpoint requires that either <b>workflow_state_id</b> or <b>project_id</b> be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
    /// </remarks>
    public Task<Story> CreateStory(CreateStoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Story>(),
            CreateStoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Story Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStoryCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Comment allows you to create a Comment on any Story.
    /// </remarks>
    public Task<StoryComment> CreateStoryComment(CreateStoryCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoryComment>(),
            CreateStoryCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Story From Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Story"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStoryFromTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
    /// </remarks>
    public Task<Story> CreateStoryFromTemplate(CreateStoryFromTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/from-template"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Story>(),
            CreateStoryFromTemplateError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Story Reaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StoryReaction"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStoryReactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a reaction to a story comment.
    /// </remarks>
    public Task<IReadOnlyList<StoryReaction>> CreateStoryReaction(CreateStoryReactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<StoryReaction>>(),
            CreateStoryReactionError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Task is used to create a new task in a Story.
    /// </remarks>
    public Task<TaskModel> CreateTask(CreateTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/tasks"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskModel>(),
            CreateTaskError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Multiple Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMultipleStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Multiple Stories allows you to delete multiple archived stories at once.
    /// </remarks>
    public Task DeleteMultipleStories(DeleteMultipleStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteMultipleStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Story
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Story can be used to delete any Story.
    /// </remarks>
    public Task DeleteStory(DeleteStoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteStoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Story Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStoryCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a Comment from any story.
    /// </remarks>
    public Task DeleteStoryComment(DeleteStoryCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteStoryCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Story Reaction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStoryReactionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a reaction from any story comment.
    /// </remarks>
    public Task DeleteStoryReaction(DeleteStoryReactionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteStoryReactionError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Task can be used to delete any previously created Task on a Story.
    /// </remarks>
    public Task DeleteTask(DeleteTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("task-public-id", request.TaskPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTaskError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Story
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Story"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Story returns information about a chosen Story.
    /// </remarks>
    public Task<Story> GetStory(GetStoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Story>(),
            GetStoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Story Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStoryCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Comment is used to get Comment information.
    /// </remarks>
    public Task<StoryComment> GetStoryComment(GetStoryCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoryComment>(),
            GetStoryCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about a chosen Task.
    /// </remarks>
    public Task<TaskModel> GetTask(GetTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("task-public-id", request.TaskPublicId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskModel>(),
            GetTaskError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Story Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StoryComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListStoryCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Comments associated with a Story
    /// </remarks>
    public Task<IReadOnlyList<StoryComment>> ListStoryComment(ListStoryCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<StoryComment>>(),
            ListStoryCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Story Sub tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListStorySubTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> ListStorySubTasks(ListStorySubTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/sub-tasks"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            ListStorySubTasksError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Stories lets you search Stories based on desired parameters.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> QueryStories(QueryStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            QueryStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Story History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="History"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoryHistoryError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<History>> StoryHistory(StoryHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/history"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<History>>(),
            StoryHistoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unlink Comment thread from Slack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnlinkCommentThreadFromSlackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
    /// </remarks>
    public Task<StoryComment> UnlinkCommentThreadFromSlack(UnlinkCommentThreadFromSlackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<StoryComment>(),
            UnlinkCommentThreadFromSlackError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Multiple Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="StorySlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMultipleStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Multiple Stories allows you to make changes to numerous stories at once.
    /// </remarks>
    public Task<IReadOnlyList<StorySlim>> UpdateMultipleStories(UpdateMultipleStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/bulk"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<StorySlim>>(),
            UpdateMultipleStoriesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Story
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Story"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Story can be used to update Story properties.
    /// </remarks>
    public Task<Story> UpdateStory(UpdateStoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}"),
            [new TemplateParam("story-public-id", request.StoryPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Story>(),
            UpdateStoryError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Story Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStoryCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Comment replaces the text of the existing Comment.
    /// </remarks>
    public Task<StoryComment> UpdateStoryComment(UpdateStoryCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("comment-public-id", request.CommentPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoryComment>(),
            UpdateStoryCommentError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Task can be used to update Task properties.
    /// </remarks>
    public Task<TaskModel> UpdateTask(UpdateTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
            [
                new TemplateParam("story-public-id", request.StoryPublicId),
                new TemplateParam("task-public-id", request.TaskPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskModel>(),
            UpdateTaskError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
