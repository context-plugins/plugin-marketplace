using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.VariablesApi;

namespace DevCycle.Api;

public sealed class VariablesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal VariablesApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a Variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VariableDevCycleManagementVariablesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerCreateError"/> when the server returns an error response.</exception>
    public Task<VariableDevCycleManagementVariablesApi> VariablesControllerCreate(VariablesControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VariableDevCycleManagementVariablesApi>(),
            VariablesControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Variables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="VariableDevCycleManagementVariablesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<VariableDevCycleManagementVariablesApi>> VariablesControllerFindAll(VariablesControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("feature", request.Feature),
                new Param("type", request.Type),
                new Param("status", request.Status),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<VariableDevCycleManagementVariablesApi>>(),
            VariablesControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VariableDevCycleManagementVariablesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerFindOneError"/> when the server returns an error response.</exception>
    public Task<VariableDevCycleManagementVariablesApi> VariablesControllerFindOne(VariablesControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VariableDevCycleManagementVariablesApi>(),
            VariablesControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerRemoveError"/> when the server returns an error response.</exception>
    public Task VariablesControllerRemove(VariablesControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            VariablesControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VariableDevCycleManagementVariablesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerUpdateError"/> when the server returns an error response.</exception>
    public Task<VariableDevCycleManagementVariablesApi> VariablesControllerUpdate(VariablesControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VariableDevCycleManagementVariablesApi>(),
            VariablesControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Variable status to archived or active
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VariableDevCycleManagementVariablesApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VariablesControllerUpdateStatusError"/> when the server returns an error response.</exception>
    public Task<VariableDevCycleManagementVariablesApi> VariablesControllerUpdateStatus(VariablesControllerUpdateStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/variables/{key}/status"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VariableDevCycleManagementVariablesApi>(),
            VariablesControllerUpdateStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
