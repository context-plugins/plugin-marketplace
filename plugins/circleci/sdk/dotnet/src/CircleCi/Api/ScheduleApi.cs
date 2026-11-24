using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.ScheduleApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for creating, updating, and managing scheduled pipeline triggers.
/// </summary>
public sealed class ScheduleApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ScheduleApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Schedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a scheduled pipeline trigger for the specified project.
    /// </remarks>
    public Task<Schedule> CreateSchedule(CreateScheduleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/schedule"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Schedule>(),
            CreateScheduleError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a schedule by its unique identifier.
    /// </remarks>
    public Task<MessageResponse> DeleteSchedule(DeleteScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
            [new TemplateParam("schedule-id", request.ScheduleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteScheduleError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a schedule by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Schedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a schedule by its unique identifier.
    /// </remarks>
    public Task<Schedule> GetSchedule(GetScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
            [new TemplateParam("schedule-id", request.ScheduleId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Schedule>(),
            GetScheduleError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List schedules for a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScheduleList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of scheduled pipeline triggers for a given project.
    /// </remarks>
    public Task<ScheduleList> ListSchedules(ListSchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/project/{project-slug}/schedule"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScheduleList>(),
            ListSchedulesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Schedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing schedule with the provided parameters.
    /// </remarks>
    public Task<Schedule> UpdateSchedule(UpdateScheduleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/schedule/{schedule-id}"),
            [new TemplateParam("schedule-id", request.ScheduleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Schedule>(),
            UpdateScheduleError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
