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
using Hud.Requests.Rollouts;

namespace Hud.Api;

public sealed class Rollouts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Rollouts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Cancel Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelJobV2RolloutsCancelJobPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel all non-terminal traces in a job.
    /// </remarks>
    public Task<CancelJobResponse> CancelJobV2RolloutsCancelJobPost(CancelJobV2RolloutsCancelJobPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/cancel_job"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CancelJobResponse>(),
            CancelJobV2RolloutsCancelJobPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel User Jobs
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelUserJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelUserJobsV2RolloutsCancelUserJobsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel all of the caller's active jobs, reporting per-job cancellation counts.
    /// </remarks>
    public Task<CancelUserJobsResponse> CancelUserJobsV2RolloutsCancelUserJobsPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/cancel_user_jobs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CancelUserJobsResponse>(),
            CancelUserJobsV2RolloutsCancelUserJobsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelV2RolloutsCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a single rollout trace; noop if it already reached a terminal state.
    /// </remarks>
    public Task<CancelResponse> CancelV2RolloutsCancelPost(CancelV2RolloutsCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/cancel"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CancelResponse>(),
            CancelV2RolloutsCancelPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run List
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RolloutBatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunListV2RolloutsRunListPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Launch a batch of hosted rollouts under one job.
    /// </remarks>
    public Task<RolloutBatchResponse> RunListV2RolloutsRunListPost(RunListV2RolloutsRunListPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/run_list"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RolloutBatchResponse>(),
            RunListV2RolloutsRunListPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RolloutResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunV2RolloutsRunPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Launch a single hosted rollout and return its trace and job identifiers.
    /// </remarks>
    public Task<RolloutResponse> RunV2RolloutsRunPost(RunV2RolloutsRunPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/run"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RolloutResponse>(),
            RunV2RolloutsRunPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RolloutResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitV2RolloutsSubmitPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.
    /// <para>
    /// The SDK polls GET /v2/trace/{trace_id} to completion.
    /// </para>
    /// </remarks>
    public Task<RolloutResponse> SubmitV2RolloutsSubmitPost(SubmitV2RolloutsSubmitPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/rollouts/submit"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RolloutResponse>(),
            SubmitV2RolloutsSubmitPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
