using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RelmCrm.Core;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.ErrorResponse;
using RelmCrm.Core.Exceptions;
using RelmCrm.Core.Models;
using RelmCrm.Core.Request;
using RelmCrm.Core.Response;
using RelmCrm.Models;
using RelmCrm.Requests.Activities;

namespace RelmCrm.Api;

public sealed class Activities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Activities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Log an activity (attach to a contact and/or deal)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Activity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Activity> CreateActivity(CreateActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Activity>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Soft-delete an activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deleted> DeleteActivity(DeleteActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Deleted>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch an activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Activity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Activity> GetActivity(GetActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Activity>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List activities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActivityList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ActivityList> ListActivities(ListActivitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("include_deleted", request.IncludeDeleted),
                new Param("contact_id", request.ContactId),
                new Param("deal_id", request.DealId),
                new Param("type", request.Type),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ActivityList>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Activity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Activity> RestoreActivity(RestoreActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Activity>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Activity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Activity> UpdateActivity(UpdateActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Activity>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
