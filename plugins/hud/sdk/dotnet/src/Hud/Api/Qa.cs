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
using Hud.Requests.Qa;

namespace Hud.Api;

public sealed class Qa
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Qa(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List Qa Checks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QaCheckListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQaChecksV2QaChecksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the QA checks available to run, each with the subject type it judges.
    /// </remarks>
    public Task<QaCheckListResponse> ListQaChecksV2QaChecksGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa/checks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QaCheckListResponse>(),
            ListQaChecksV2QaChecksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Qa Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QaResultListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQaResultsV2QaResultsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the result in effect for every QA check on the given evaluation traces or tasks.
    /// <para>
    /// A task's results in effect are those on its current version. With
    /// ``include_history``, list every result instead, newest first, across a
    /// task's versions.
    /// </para>
    /// </remarks>
    public Task<QaResultListResponse> ListQaResultsV2QaResultsGet(ListQaResultsV2QaResultsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa/results"),
            [],
            [
                new Param("trace_ids", request.TraceIds),
                new Param("task_ids", request.TaskIds),
                new Param("include_history", request.IncludeHistory),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QaResultListResponse>(),
            ListQaResultsV2QaResultsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run Qa Checks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QaResultListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunQaChecksV2QaRunsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each check.
    /// </remarks>
    public Task<QaResultListResponse> RunQaChecksV2QaRunsPost(RunQaChecksV2QaRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/qa/runs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QaResultListResponse>(),
            RunQaChecksV2QaRunsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
