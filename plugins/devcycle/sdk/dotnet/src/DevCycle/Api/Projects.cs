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
using DevCycle.Requests.Projects;

namespace DevCycle.Api;

public sealed class Projects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Projects(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create project in the current organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new project within the authed organization.
    /// The project key must be unique within the organization.
    /// If this is called in an Organization that has permissions controlled via an external IdP (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only) - then no users will have permission to access this project.
    /// </remarks>
    public Task<Project> ProjectsControllerCreate(ProjectsControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            ProjectsControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Projects that the current API Token has permission to view
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerFindAllError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all projects that the current API Token has permission to view.
    /// </remarks>
    public Task<IReadOnlyList<Project>> ProjectsControllerFindAll(ProjectsControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects"),
            [],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Project>>(),
            ProjectsControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Project by ID or key.
    /// </remarks>
    public Task<Project> ProjectsControllerFindOne(ProjectsControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Project>(),
            ProjectsControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all stale Features for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="FeatureStalenessEntity"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerGetStalenessError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<FeatureStalenessEntity>> ProjectsControllerGetStaleness(ProjectsControllerGetStalenessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}/staleness"),
            [new TemplateParam("key", request.Key)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
                new Param("includeSilenced", request.IncludeSilenced),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<FeatureStalenessEntity>>(),
            ProjectsControllerGetStalenessError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerRemoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a Project by ID or key
    /// </remarks>
    public Task ProjectsControllerRemove(ProjectsControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ProjectsControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Project by ID or key. Certain facets of the project settings require additional permissions to update.
    /// </remarks>
    public Task<Project> ProjectsControllerUpdate(ProjectsControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            ProjectsControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Protected Settings for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerUpdateProtectedSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the Protect Settings for a Project by ID or key
    /// </remarks>
    public Task<Project> ProjectsControllerUpdateProtectedSettings(ProjectsControllerUpdateProtectedSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}/settings/protected"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            ProjectsControllerUpdateProtectedSettingsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Publisher Restricted Settings for a Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProjectsControllerUpdateSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a subset of settings for a Project that only requires publisher permissions
    /// </remarks>
    public Task<Project> ProjectsControllerUpdateSettings(ProjectsControllerUpdateSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{key}/settings"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            ProjectsControllerUpdateSettingsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
