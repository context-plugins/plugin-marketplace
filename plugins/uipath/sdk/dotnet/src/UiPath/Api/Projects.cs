using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Projects;

namespace UiPath.Api;

/// <summary>
/// Manage test projects within Test Manager
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
    /// UiPath Create a Test Project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUiPathTestManagerProjectsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new test project in Test Manager. The project becomes the container for all test cases, requirements, and test sets associated with the testing effort. Requires the TM.Projects OAuth scope.
    /// </remarks>
    public Task<ProjectUiPathTestManagerProjectsApi> CreateProject(CreateProjectOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectUiPathTestManagerProjectsApi>(),
            CreateProjectError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get a Test Project by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectUiPathTestManagerProjectsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific test project by its unique identifier. Returns project details including name, description, creation date, and summary statistics for test cases and requirements.
    /// </remarks>
    public Task<ProjectUiPathTestManagerProjectsApi> GetProject(GetProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}"),
            [new TemplateParam("projectId", request.ProjectId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectUiPathTestManagerProjectsApi>(),
            GetProjectError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Test Projects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjects2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all test projects accessible to the authenticated user. Projects are the top-level containers for test cases, requirements, test sets, and execution results. Requires the TM.Projects or TM.Projects.Read OAuth scope.
    /// </remarks>
    public Task<ProjectListResponse> ListProjects2(ListProjects2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathTestManagerProjectsApi("/api/v2/projects"),
            [],
            [new Param("page", request.Page), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectListResponse>(),
            ListProjects2Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
