using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core;
using Cloro.Core.Exceptions;
using Cloro.Core.Models;
using Cloro.Core.Request;
using Cloro.Core.Response;
using Cloro.Errors;
using Cloro.Models;
using Cloro.Requests.Async;

namespace Cloro.Api;

public sealed class Async
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Async(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Clear queued async tasks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClearQueueResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClearAsyncQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes every task still in the <c>QUEUED</c> state for the authenticated organization, letting you drain a pending backlog in one call instead of opening a support request. Tasks that are already <c>PROCESSING</c> are in-flight on a worker and are left untouched, as are <c>COMPLETED</c> and <c>FAILED</c> tasks. Queued tasks have not been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is already empty it simply returns <c>cleared: 0</c>.
    /// </remarks>
    public Task<ClearQueueResponse> ClearAsyncQueue(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/async/queue"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ClearQueueResponse>(),
            ClearAsyncQueueError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create async task
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncTaskCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAsyncTaskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results or receive via webhook.
    /// </remarks>
    public Task<AsyncTaskCreateResponse> CreateAsyncTask(CreateAsyncTaskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/async/task"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AsyncTaskCreateResponse>(),
            CreateAsyncTaskError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create batch async tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchTaskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBatchAsyncTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does not block the rest. Returns per-task results.
    /// </remarks>
    public Task<BatchTaskResponse> CreateBatchAsyncTasks(CreateBatchAsyncTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/async/task/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchTaskResponse>(),
            CreateBatchAsyncTasksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get async queue status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAsyncStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.
    /// </remarks>
    public Task<AsyncStatusResponse> GetAsyncStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/async/status"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AsyncStatusResponse>(),
            GetAsyncStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get async task status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTaskStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full structured result payload.
    /// </remarks>
    public Task<TaskStatusResponse> GetTaskStatus(GetTaskStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/async/task/{taskId}"),
            [new TemplateParam("taskId", request.TaskId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskStatusResponse>(),
            GetTaskStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
