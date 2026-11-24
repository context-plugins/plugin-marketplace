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
using Shortcut.Requests.Objectives;

namespace Shortcut.Api;

public sealed class Objectives
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Objectives(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Objective"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateObjectiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create Objective allows you to create a new Objective in Shortcut.
    /// </remarks>
    public Task<Objective> CreateObjective(CreateObjectiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Objective>(),
            CreateObjectiveError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Objective Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateObjectiveHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new health status for the specified Objective.
    /// </remarks>
    public Task<Health> CreateObjectiveHealth(CreateObjectiveHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}/health"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Health>(),
            CreateObjectiveHealthError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteObjectiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Objective can be used to delete any Objective.
    /// </remarks>
    public Task DeleteObjective(DeleteObjectiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteObjectiveError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Objective"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetObjectiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Objective returns information about a chosen Objective.
    /// </remarks>
    public Task<Objective> GetObjective(GetObjectiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Objective>(),
            GetObjectiveError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Objective Health
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetObjectiveHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current health for the specified Objective.
    /// </remarks>
    public Task<Health> GetObjectiveHealth(GetObjectiveHealthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}/health"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            GetObjectiveHealthError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Objective Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EpicSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectiveEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all of the Epics within the Objective.
    /// </remarks>
    public Task<IReadOnlyList<EpicSlim>> ListObjectiveEpics(ListObjectiveEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}/epics"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EpicSlim>>(),
            ListObjectiveEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Objective Healths
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectiveHealthsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the history of health statuses for the specified Objective, most recent first.
    /// </remarks>
    public Task<IReadOnlyList<Health>> ListObjectiveHealths(ListObjectiveHealthsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}/health-history"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Health>>(),
            ListObjectiveHealthsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Objectives
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Objective"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectivesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Objectives returns a list of all Objectives and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<Objective>> ListObjectives(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Objective>>(),
            ListObjectivesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Objective
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Objective"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateObjectiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Objective can be used to update Objective properties.
    /// </remarks>
    public Task<Objective> UpdateObjective(UpdateObjectiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/objectives/{objective-public-id}"),
            [new TemplateParam("objective-public-id", request.ObjectivePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Objective>(),
            UpdateObjectiveError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
