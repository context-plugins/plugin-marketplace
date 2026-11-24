using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core;
using ParallelSdk.Core.Exceptions;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Request;
using ParallelSdk.Core.Response;
using ParallelSdk.Errors;
using ParallelSdk.Models;
using ParallelSdk.Models.OneOf;
using ParallelSdk.Requests.Tasks;

namespace ParallelSdk.Api;

/// <summary>
/// The Task API executes web research and extraction tasks.
/// </summary>
public sealed class Tasks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tasks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Stream Task Run Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsEventsGetV1TasksRunsRunIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Streams events for a task run.
    /// <para>
    /// Returns a stream of events showing progress updates and state changes for the task
    /// run.
    /// </para>
    /// <para>
    /// For task runs that did not have enable_events set to true during creation, the
    /// frequency of events will be reduced.
    /// </para>
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// <see cref="ResponseDeserializationException"/> on a frame that cannot be parsed,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>> TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/runs/{run_id}/events"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonSseResponse.Create<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>(),
            TasksRunsEventsGetV1TasksRunsRunIdEventsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stream Task Run Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Streams events for a task run.
    /// <para>
    /// Returns a stream of events showing progress updates and state changes for the task
    /// run.
    /// </para>
    /// <para>
    /// For task runs that did not have enable_events set to true during creation, the
    /// frequency of events will be reduced.
    /// </para>
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// <see cref="ResponseDeserializationException"/> on a frame that cannot be parsed,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>> TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1beta/tasks/runs/{run_id}/events"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonSseResponse.Create<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>(),
            TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Task Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsGetV1TasksRunsRunIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves run status by run_id.
    /// <para>
    /// The run result is available from the <c>/result</c> endpoint.
    /// </para>
    /// </remarks>
    public Task<TaskRun> TasksRunsGetV1TasksRunsRunIdGet(TasksRunsGetV1TasksRunsRunIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/runs/{run_id}"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskRun>(),
            TasksRunsGetV1TasksRunsRunIdGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Task Run Input
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskRunInput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsInputGetV1TasksRunsRunIdInputGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the input of a run by run_id.
    /// </remarks>
    public Task<TaskRunInput> TasksRunsInputGetV1TasksRunsRunIdInputGet(TasksRunsInputGetV1TasksRunsRunIdInputGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/runs/{run_id}/input"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskRunInput>(),
            TasksRunsInputGetV1TasksRunsRunIdInputGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Task Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsPostV1TasksRunsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates a task run.
    /// <para>
    /// Returns immediately with a run object in status 'queued'.
    /// </para>
    /// <para>
    /// Beta features can be enabled by setting the 'parallel-beta' header.
    /// </para>
    /// </remarks>
    public Task<TaskRun> TasksRunsPostV1TasksRunsPost(TasksRunsPostV1TasksRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/runs"),
            [],
            [],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskRun>(),
            TasksRunsPostV1TasksRunsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Task Run Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskRunResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksRunsResultGetV1TasksRunsRunIdResultGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a run result by run_id, blocking until the run is completed.
    /// </remarks>
    public Task<TaskRunResult> TasksRunsResultGetV1TasksRunsRunIdResultGet(TasksRunsResultGetV1TasksRunsRunIdResultGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/runs/{run_id}/result"),
            [new TemplateParam("run_id", request.RunId)],
            [new Param("timeout", request.Timeout)],
            [new HeaderParam("parallel-beta", request.ParallelBeta)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskRunResult>(),
            TasksRunsResultGetV1TasksRunsRunIdResultGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stream Task Group Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Streams events from a TaskGroup: status updates and run completions.
    /// <para>
    /// The connection will remain open for up to an hour as long as at least one run in the
    /// group is still active.
    /// </para>
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// <see cref="ResponseDeserializationException"/> on a frame that cannot be parsed,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>> TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups/{taskgroup_id}/events"),
            [new TemplateParam("taskgroup_id", request.TaskgroupId)],
            [new Param("last_event_id", request.LastEventId), new Param("timeout", request.Timeout)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonSseResponse.Create<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>(),
            TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Task Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskGroupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves aggregated status across runs in a TaskGroup.
    /// </remarks>
    public Task<TaskGroupResponse> TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups/{taskgroup_id}"),
            [new TemplateParam("taskgroup_id", request.TaskgroupId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskGroupResponse>(),
            TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Task Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskGroupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksTaskgroupsPostV1TasksGroupsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates a TaskGroup to group and track multiple runs.
    /// </remarks>
    public Task<TaskGroupResponse> TasksTaskgroupsPostV1TasksGroupsPost(TasksTaskgroupsPostV1TasksGroupsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskGroupResponse>(),
            TasksTaskgroupsPostV1TasksGroupsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch Task Group Runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves task runs in a TaskGroup and optionally their inputs and outputs.
    /// <para>
    /// All runs within a TaskGroup are returned as a stream. To get the inputs and/or
    /// outputs back in the stream, set the corresponding <c>include_input</c> and
    /// <c>include_output</c> parameters to <c>true</c>.
    /// </para>
    /// <para>
    /// The stream is resumable using the <c>event_id</c> as the cursor. To resume a stream,
    /// specify the <c>last_event_id</c> parameter with the <c>event_id</c> of the last event in the
    /// stream. The stream will resume from the next event after the <c>last_event_id</c>.
    /// </para>
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// <see cref="ResponseDeserializationException"/> on a frame that cannot be parsed,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>> TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups/{taskgroup_id}/runs"),
            [new TemplateParam("taskgroup_id", request.TaskgroupId)],
            [
                new Param("last_event_id", request.LastEventId),
                new Param("status", request.Status),
                new Param("include_input", request.IncludeInput),
                new Param("include_output", request.IncludeOutput),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonSseResponse.Create<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>(),
            TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Task Group Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves run status by run_id.
    /// <para>
    /// This endpoint is equivalent to fetching run status directly using the
    /// <c>retrieve()</c> method or the <c>tasks/runs</c> GET endpoint.
    /// </para>
    /// <para>
    /// The run result is available from the <c>/result</c> endpoint.
    /// </para>
    /// </remarks>
    public Task<TaskRun> TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups/{taskgroup_id}/runs/{run_id}"),
            [new TemplateParam("taskgroup_id", request.TaskgroupId), new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskRun>(),
            TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add Runs to Task Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskGroupRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates multiple task runs within a TaskGroup.
    /// </remarks>
    public Task<TaskGroupRunResponse> TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tasks/groups/{taskgroup_id}/runs"),
            [new TemplateParam("taskgroup_id", request.TaskgroupId)],
            [new Param("refresh_status", request.RefreshStatus)],
            [
                new HeaderParam("parallel-beta", request.ParallelBeta),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskGroupRunResponse>(),
            TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
