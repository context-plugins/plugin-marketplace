using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Projects;

namespace Contentstack.Api;

/// <summary>
/// Automation projects are containers for automations within a Contentstack organization. Each project groups related automations and can have its own variables and account connections.
/// </summary>
public sealed class Projects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Projects(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new automation project within the specified organization. Projects serve as organizational containers for automations and shared configuration.
    /// </remarks>
    public Task<Project> CreateProject(CreateProjectOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/v1/organizations/{organization_uid}/projects"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            CreateProjectError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an automation project and all its automations, variables, and configuration. This action is irreversible.
    /// </remarks>
    public Task DeleteProject(DeleteProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/v1/organizations/{organization_uid}/projects/{project_uid}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteProjectError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectsByProjectUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a Launch project and all its environments and deployment history. This action is irreversible.
    /// </remarks>
    public Task DeleteProjectsByProjectUid(DeleteProjectsByProjectUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/projects/{project_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteProjectsByProjectUidError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all automation projects within the specified organization. Each project contains automations, variables, and external service account connections.
    /// </remarks>
    public Task<ProjectList> GetAllProjects(GetAllProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/v1/organizations/{organization_uid}/projects"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectList>(),
            GetAllProjectsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific automation project including its metadata, creation date, and current status.
    /// </remarks>
    public Task<Project> GetProject(GetProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/v1/organizations/{organization_uid}/projects/{project_uid}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Project>(),
            GetProjectError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all projects
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectList2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all Launch projects accessible to the authenticated user or organization. Returns project metadata including names, creation dates, and environment counts.
    /// </remarks>
    public Task<ProjectList2> GetProjects(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/projects"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectList2>(),
            GetProjectsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsByProjectUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific Launch project including its configuration, current status, and linked Contentstack stack.
    /// </remarks>
    public Task<Project2> GetProjectsByProjectUid(GetProjectsByProjectUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/projects/{project_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Project2>(),
            GetProjectsByProjectUidError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Launch project for deploying a web application. Projects serve as the top-level container for environments and deployments.
    /// </remarks>
    public Task<Project2> PostProjects(PostProjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/projects"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project2>(),
            PostProjectsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutProjectsByProjectUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of an existing Launch project such as its name, description, or framework settings.
    /// </remarks>
    public Task<Project2> PutProjectsByProjectUid(PutProjectsByProjectUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/projects/{project_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project2>(),
            PutProjectsByProjectUidError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name or description of an existing automation project.
    /// </remarks>
    public Task<Project> UpdateProject(UpdateProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackProjectsApi("/v1/organizations/{organization_uid}/projects/{project_uid}"),
            [
                new TemplateParam("organization_uid", request.OrganizationUid),
                new TemplateParam("project_uid", request.ProjectUid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Project>(),
            UpdateProjectError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
