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
using Hud.Requests.Tasksets;

namespace Hud.Api;

public sealed class Tasksets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Tasksets(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Taskset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTasksetV2TasksetsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a taskset for the caller's team.
    /// </remarks>
    public Task<TasksetResponse> CreateTasksetV2TasksetsPost(CreateTasksetV2TasksetsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TasksetResponse>(),
            CreateTasksetV2TasksetsPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export Taskset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportTasksetV2TasksetsTasksetIdExportGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a taskset by UUID in the task wire format.
    /// <para>
    /// Same shape as the by-name lookup, and the only fetch path for cross-team
    /// public tasksets.
    /// </para>
    /// </remarks>
    public Task<TasksetExportResponse> ExportTasksetV2TasksetsTasksetIdExportGet(ExportTasksetV2TasksetsTasksetIdExportGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets/{taskset_id}/export"),
            [new TemplateParam("taskset_id", request.TasksetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksetExportResponse>(),
            ExportTasksetV2TasksetsTasksetIdExportGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Taskset By Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksetByNameV2TasksetsByNameNameGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a taskset by name and return its tasks in the task wire format.
    /// <para>
    /// Returns the latest version per task — the read-side counterpart of
    /// <c>POST /tasks/upload</c>.
    /// </para>
    /// <para>
    /// Scoped to the caller's team. Cross-team public tasksets are accessible
    /// by UUID (<c>GET /tasksets/{id}/export</c>) only — name uniqueness is per team,
    /// so resolving by name across teams would be ambiguous.
    /// </para>
    /// </remarks>
    public Task<TasksetExportResponse> GetTasksetByNameV2TasksetsByNameNameGet(GetTasksetByNameV2TasksetsByNameNameGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets/by-name/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksetExportResponse>(),
            GetTasksetByNameV2TasksetsByNameNameGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Taskset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TasksetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTasksetV2TasksetsTasksetIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a taskset by id.
    /// </remarks>
    public Task<TasksetResponse> GetTasksetV2TasksetsTasksetIdGet(GetTasksetV2TasksetsTasksetIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets/{taskset_id}"),
            [new TemplateParam("taskset_id", request.TasksetId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TasksetResponse>(),
            GetTasksetV2TasksetsTasksetIdGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Taskset Tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseTaskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTasksetTasksV2TasksetsTasksetIdTasksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List live task definitions, including for public-only viewers.
    /// </remarks>
    public Task<PaginatedResponseTaskResponse> ListTasksetTasksV2TasksetsTasksetIdTasksGet(ListTasksetTasksV2TasksetsTasksetIdTasksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets/{taskset_id}/tasks"),
            [new TemplateParam("taskset_id", request.TasksetId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseTaskResponse>(),
            ListTasksetTasksV2TasksetsTasksetIdTasksGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tasksets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedResponseTasksetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTasksetsV2TasksetsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List tasksets visible to the caller, with search, ownership, and sort filters.
    /// </remarks>
    public Task<PaginatedResponseTasksetResponse> ListTasksetsV2TasksetsGet(ListTasksetsV2TasksetsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/tasksets"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("search", request.Search),
                new Param("public_only", request.PublicOnly),
                new Param("featured_only", request.FeaturedOnly),
                new Param("owner_only", request.OwnerOnly),
                new Param("min_tasks", request.MinTasks),
                new Param("registry_id", request.RegistryId),
                new Param("scenario_id", request.ScenarioId),
                new Param("project_id", request.ProjectId),
                new Param("sort_by", request.SortBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedResponseTasksetResponse>(),
            ListTasksetsV2TasksetsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
