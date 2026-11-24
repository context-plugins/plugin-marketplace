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
using Shortcut.Requests.Milestones;

namespace Shortcut.Api;

public sealed class Milestones
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Milestones(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Milestone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMilestoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.
    /// </remarks>
    public Task<Milestone> CreateMilestone(CreateMilestoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Milestone>(),
            CreateMilestoneError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Milestone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMilestoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
    /// </remarks>
    public Task DeleteMilestone(DeleteMilestoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones/{milestone-public-id}"),
            [new TemplateParam("milestone-public-id", request.MilestonePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMilestoneError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Milestone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMilestoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
    /// </remarks>
    public Task<Milestone> GetMilestone(GetMilestoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones/{milestone-public-id}"),
            [new TemplateParam("milestone-public-id", request.MilestonePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Milestone>(),
            GetMilestoneError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Milestone Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EpicSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMilestoneEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
    /// </remarks>
    public Task<IReadOnlyList<EpicSlim>> ListMilestoneEpics(ListMilestoneEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones/{milestone-public-id}/epics"),
            [new TemplateParam("milestone-public-id", request.MilestonePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EpicSlim>>(),
            ListMilestoneEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Milestones
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMilestonesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.
    /// </remarks>
    public Task<IReadOnlyList<Milestone>> ListMilestones(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Milestone>>(),
            ListMilestonesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Milestone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMilestoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.
    /// </remarks>
    public Task<Milestone> UpdateMilestone(UpdateMilestoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/milestones/{milestone-public-id}"),
            [new TemplateParam("milestone-public-id", request.MilestonePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Milestone>(),
            UpdateMilestoneError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
