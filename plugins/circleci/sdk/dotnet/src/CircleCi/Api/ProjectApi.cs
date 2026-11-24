using System;
using System.Collections.Generic;
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
using CircleCi.Requests.ProjectApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for listing followed projects and managing project settings.
/// </summary>
public sealed class ProjectApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProjectApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCheckoutKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.
    /// </remarks>
    public Task<CheckoutKey> CreateCheckoutKey(CreateCheckoutKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/checkout-key"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CheckoutKey>(),
            CreateCheckoutKeyError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project environment variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectEnvVar"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateProjectEnvironmentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new environment variable for the specified project.
    /// </remarks>
    public Task<ProjectEnvVar> CreateProjectEnvironmentVariable(CreateProjectEnvironmentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/envvar"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProjectEnvVar>(),
            CreateProjectEnvironmentVariableError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCheckoutKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a checkout key by its fingerprint.
    /// </remarks>
    public Task<MessageResponse> DeleteCheckoutKey(DeleteCheckoutKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/checkout-key/{fingerprint}"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("fingerprint", request.Fingerprint),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteCheckoutKeyError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a project environment variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteProjectEnvironmentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an environment variable from the specified project.
    /// </remarks>
    public Task<MessageResponse> DeleteProjectEnvironmentVariable(DeleteProjectEnvironmentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/envvar/{name}"),
            [new TemplateParam("project-slug", request.ProjectSlug), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteProjectEnvironmentVariableError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Follow a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectProjectFollowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FollowProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Follows a project, adding it to the authenticated user's list of followed projects.
    /// </remarks>
    public Task<ProjectProjectFollowResponse> FollowProject(FollowProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/follow"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectProjectFollowResponse>(),
            FollowProjectError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCheckoutKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a checkout key by its fingerprint.
    /// </remarks>
    public Task<CheckoutKey> GetCheckoutKey(GetCheckoutKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/checkout-key/{fingerprint}"),
            [
                new TemplateParam("project-slug", request.ProjectSlug),
                new TemplateParam("fingerprint", request.Fingerprint),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutKey>(),
            GetCheckoutKeyError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Project2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.
    /// </remarks>
    public Task<Project2> GetProject(GetProjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Project2>(),
            GetProjectError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a masked environment variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectEnvVar"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectEnvironmentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a masked environment variable by name for the specified project.
    /// </remarks>
    public Task<ProjectEnvVar> GetProjectEnvironmentVariable(GetProjectEnvironmentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/envvar/{name}"),
            [new TemplateParam("project-slug", request.ProjectSlug), new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectEnvVar>(),
            GetProjectEnvironmentVariableError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List checkout keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutKeyList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCheckoutKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of checkout keys for a given project.
    /// </remarks>
    public Task<CheckoutKeyList> ListCheckoutKeys(ListCheckoutKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/checkout-key"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutKeyList>(),
            ListCheckoutKeysError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List project environment variables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectEnvVarList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectEnvironmentVariablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of masked environment variables for a given project.
    /// </remarks>
    public Task<ProjectEnvVarList> ListProjectEnvironmentVariables(ListProjectEnvironmentVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{project-slug}/envvar"),
            [new TemplateParam("project-slug", request.ProjectSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectEnvVarList>(),
            ListProjectEnvironmentVariablesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List followed projects
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="ProjectCircleciProjectApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all projects the authenticated user follows, including recent build summaries for each project.
    /// </remarks>
    public Task<IReadOnlyList<ProjectCircleciProjectApi>> ListProjects(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<ProjectCircleciProjectApi>>(),
            ListProjectsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
