using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Models.AnyOf;
using Hud.Requests.Tasks;

namespace Hud.Api;

public sealed class Tasks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Tasks(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Bulk Update Task Stage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateTaskStageV2TasksStagePatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk lifecycle-stage move (advance one stage / send back); non-atomic.
    /// </remarks>
    public Task<BulkStatusResponse> BulkUpdateTaskStageV2TasksStagePatch(BulkUpdateTaskStageV2TasksStagePatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/stage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkStatusResponse>(),
            BulkUpdateTaskStageV2TasksStagePatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk Update Task Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateTaskStatusV2TasksStatusPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.
    /// </remarks>
    public Task<BulkStatusResponse> BulkUpdateTaskStatusV2TasksStatusPatch(BulkUpdateTaskStatusV2TasksStatusPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/status"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkStatusResponse>(),
            BulkUpdateTaskStatusV2TasksStatusPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Task Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskCommentItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTaskCommentV2TasksTaskIdCommentsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a comment to a task and notify mentioned users.
    /// </remarks>
    public Task<TaskCommentItem> CreateTaskCommentV2TasksTaskIdCommentsPost(CreateTaskCommentV2TasksTaskIdCommentsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/comments"),
            [new TemplateParam("task_id", request.TaskId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskCommentItem>(),
            CreateTaskCommentV2TasksTaskIdCommentsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Task Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a task comment.
    /// </remarks>
    public Task DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/comments/{comment_id}"),
            [new TemplateParam("task_id", request.TaskId), new TemplateParam("comment_id", request.CommentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task Activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskActivityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskActivityV2TasksTaskIdActivityGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a task's combined activity feed of comments and state changes.
    /// </remarks>
    public Task<TaskActivityResponse> GetTaskActivityV2TasksTaskIdActivityGet(GetTaskActivityV2TasksTaskIdActivityGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/activity"),
            [new TemplateParam("task_id", request.TaskId)],
            [new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskActivityResponse>(),
            GetTaskActivityV2TasksTaskIdActivityGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task Comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskCommentsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskCommentsV2TasksTaskIdCommentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List comments on a task.
    /// </remarks>
    public Task<TaskCommentsListResponse> GetTaskCommentsV2TasksTaskIdCommentsGet(GetTaskCommentsV2TasksTaskIdCommentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/comments"),
            [new TemplateParam("task_id", request.TaskId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskCommentsListResponse>(),
            GetTaskCommentsV2TasksTaskIdCommentsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task Ready Check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evaluate the taskset's ready requirements against the task's latest version.
    /// <para>
    /// Informational: the Ready click is not blocked server-side.
    /// </para>
    /// </remarks>
    public Task<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet> GetTaskReadyCheckV2TasksTaskIdReadyCheckGet(GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/ready-check"),
            [new TemplateParam("task_id", request.TaskId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet>(),
            GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseTaskTrace"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskTracesV2TasksTaskIdTracesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the task's traces, newest first, optionally for one version or model.
    /// <para>
    /// Callers without scoped access to the task receive traces from public jobs only.
    /// </para>
    /// </remarks>
    public Task<PaginatedResponseTaskTrace> GetTaskTracesV2TasksTaskIdTracesGet(GetTaskTracesV2TasksTaskIdTracesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/traces"),
            [new TemplateParam("task_id", request.TaskId)],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("task_version_id", request.TaskVersionId),
                new Param("model_id", request.ModelId),
                new Param("exclude_training", request.ExcludeTraining),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseTaskTrace>(),
            GetTaskTracesV2TasksTaskIdTracesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Task Version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskWithVersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Task plus one of its versions, by version id.
    /// </remarks>
    public Task<TaskWithVersionResponse> GetTaskVersionV2TasksTaskIdVersionsVersionIdGet(GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/versions/{version_id}"),
            [new TemplateParam("task_id", request.TaskId), new TemplateParam("version_id", request.VersionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskWithVersionResponse>(),
            GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Task Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskCommentItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Edit one of the caller's task comments.
    /// </remarks>
    public Task<TaskCommentItem> UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/{task_id}/comments/{comment_id}"),
            [new TemplateParam("task_id", request.TaskId), new TemplateParam("comment_id", request.CommentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskCommentItem>(),
            UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadTasksV2TasksUploadPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bulk-upload tasks into a taskset, creating the taskset if needed.
    /// </remarks>
    public Task<TaskUploadResponse> UploadTasksV2TasksUploadPost(UploadTasksV2TasksUploadPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasks/upload"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskUploadResponse>(),
            UploadTasksV2TasksUploadPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
