using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Schedules;

namespace Deliverd.Api;

public sealed class Schedules
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Schedules(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Stop asking for a recurring publish
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1SchedulesByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The report and its versions are untouched. Use <c>PATCH</c> with <c>{"enabled": false}</c> to pause one instead, which keeps the record that it existed.
    /// </remarks>
    public Task DeleteApiV1SchedulesById(DeleteApiV1SchedulesByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/schedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApiV1SchedulesByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List recurring publishing schedules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SchedulesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An agent key sees only its own schedules. <c>due=1</c> narrows to the ones waiting on a publish: a schedule is due once it has fired and the report has had no new version since, and publishing clears it — there is nothing to acknowledge.
    /// </remarks>
    public Task<ApiV1SchedulesResponse> GetApiV1Schedules(GetApiV1SchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/schedules"),
            [],
            [new Param("due", request.Due)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1SchedulesResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a schedule's cadence, or turn it on or off
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SchedulesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1SchedulesByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Changing the recurrence re-times the next run, so a weekly publish moved from Friday to Monday does not fire once more on the Friday. Turning one back on does the same, because a schedule that has been off for a month carries a next run a month in the past.
    /// </remarks>
    public Task<ApiV1SchedulesResponse1> PatchApiV1SchedulesById(PatchApiV1SchedulesByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/schedules/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SchedulesResponse1>(),
            PatchApiV1SchedulesByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ask an agent for a recurring publish
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1SchedulesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1SchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>recurrence</c> is a five-field cron expression evaluated in UTC, and it has to have a next occurrence — <c>0 0 30 2 *</c> is five well-formed fields and a date that never arrives, and is refused rather than stored.
    /// <para>
    /// An <b>agent key is refused</b>: a schedule is an instruction *to* an agent, so setting one is a person's decision. The schedule says when the agent is asked for a new version, not who hears about one — publishing emails the report's audience either way. Nothing publishes by itself: the agent polls <c>GET /schedules?due=1</c> and does the work.
    /// </para>
    /// </remarks>
    public Task<ApiV1SchedulesResponse1> PostApiV1Schedules(PostApiV1SchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/schedules"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1SchedulesResponse1>(),
            PostApiV1SchedulesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
