using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Extensions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.Pipelines;

namespace Bitbucket.Api;

/// <summary>
/// Bitbucket Pipelines brings continuous delivery to Bitbucket
/// Cloud, empowering teams with full branching to deployment
/// visibility and faster feedback loops.
/// </summary>
public sealed class Pipelines
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pipelines(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a variable for an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeploymentVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDeploymentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a deployment environment level variable.
    /// </remarks>
    public Task<DeploymentVariable> CreateDeploymentVariable(CreateDeploymentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeploymentVariable>(),
            CreateDeploymentVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePipelineForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Endpoint to create and initiate a pipeline.
    /// </remarks>
    public Task<Pipeline> CreatePipelineForRepository(CreatePipelineForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Pipeline>(),
            CreatePipelineForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a variable for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePipelineVariableForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an account level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> CreatePipelineVariableForTeam(CreatePipelineVariableForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/pipelines_config/variables"),
            [new TemplateParam("username", request.Username)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            CreatePipelineVariableForTeamError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a variable for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePipelineVariableForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a user level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> CreatePipelineVariableForUser(CreatePipelineVariableForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/pipelines_config/variables"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            CreatePipelineVariableForUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a variable for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePipelineVariableForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a workspace level variable.
    /// </remarks>
    public Task<PipelineVariable> CreatePipelineVariableForWorkspace(CreatePipelineVariableForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/variables"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            CreatePipelineVariableForWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a known host
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineKnownHost"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRepositoryPipelineKnownHostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a repository level known host.
    /// </remarks>
    public Task<PipelineKnownHost> CreateRepositoryPipelineKnownHost(CreateRepositoryPipelineKnownHostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineKnownHost>(),
            CreateRepositoryPipelineKnownHostError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineSchedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRepositoryPipelineScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a schedule for the given repository.
    /// </remarks>
    public Task<PipelineSchedule> CreateRepositoryPipelineSchedule(CreateRepositoryPipelineScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineSchedule>(),
            CreateRepositoryPipelineScheduleError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a variable for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRepositoryPipelineVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a repository level variable.
    /// </remarks>
    public Task<PipelineVariable> CreateRepositoryPipelineVariable(CreateRepositoryPipelineVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            CreateRepositoryPipelineVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create repository runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRepositoryRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create repository runner.
    /// </remarks>
    public Task<PipelineRunner> CreateRepositoryRunner(CreateRepositoryRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            CreateRepositoryRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create workspace runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWorkspaceRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create workspace runner.
    /// </remarks>
    public Task<PipelineRunner> CreateWorkspaceRunner(CreateWorkspaceRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/runners"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            CreateWorkspaceRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a variable for an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDeploymentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a deployment environment level variable.
    /// </remarks>
    public Task DeleteDeploymentVariable(DeleteDeploymentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDeploymentVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a variable for a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePipelineVariableForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a team level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task DeletePipelineVariableForTeam(DeletePipelineVariableForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            [new TemplateParam("username", request.Username), new TemplateParam("variable_uuid", request.VariableUuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeletePipelineVariableForTeamError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a variable for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePipelineVariableForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an account level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task DeletePipelineVariableForUser(DeletePipelineVariableForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeletePipelineVariableForUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a variable for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePipelineVariableForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a workspace level variable.
    /// </remarks>
    public Task DeletePipelineVariableForWorkspace(DeletePipelineVariableForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeletePipelineVariableForWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a repository cache.
    /// </remarks>
    public Task DeleteRepositoryPipelineCache(DeleteRepositoryPipelineCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("cache_uuid", request.CacheUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineCacheError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete caches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineCachesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete repository cache versions by name.
    /// </remarks>
    public Task DeleteRepositoryPipelineCaches(DeleteRepositoryPipelineCachesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [new Param("name", request.Name)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineCachesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete SSH key pair
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineKeyPairError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the repository SSH key pair.
    /// </remarks>
    public Task DeleteRepositoryPipelineKeyPair(DeleteRepositoryPipelineKeyPairRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineKeyPairError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a known host
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineKnownHostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a repository level known host.
    /// </remarks>
    public Task DeleteRepositoryPipelineKnownHost(DeleteRepositoryPipelineKnownHostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("known_host_uuid", request.KnownHostUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineKnownHostError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a schedule.
    /// </remarks>
    public Task DeleteRepositoryPipelineSchedule(DeleteRepositoryPipelineScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("schedule_uuid", request.ScheduleUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineScheduleError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a variable for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryPipelineVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a repository level variable.
    /// </remarks>
    public Task DeleteRepositoryPipelineVariable(DeleteRepositoryPipelineVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryPipelineVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete repository runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoryRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete repository runner by uuid.
    /// </remarks>
    public Task DeleteRepositoryRunner(DeleteRepositoryRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("runner_uuid", request.RunnerUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoryRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete workspace runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspaceRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete workspace runner by uuid.
    /// </remarks>
    public Task DeleteWorkspaceRunner(DeleteWorkspaceRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("runner_uuid", request.RunnerUuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspaceRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List variables for an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDeploymentVariables"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find deployment environment level variables.
    /// </remarks>
    public Task<PaginatedDeploymentVariables> GetDeploymentVariables(GetDeploymentVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDeploymentVariables>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get OpenID configuration for OIDC in Pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOidcConfigurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
    /// </remarks>
    public Task GetOidcConfiguration(GetOidcConfigurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetOidcConfigurationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get keys for OIDC in Pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOidcKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
    /// </remarks>
    public Task GetOidcKeys(GetOidcKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetOidcKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the logs for the build container or a service container for a given step of…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineContainerLogError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the log file for a build container or service container.
    /// <para>
    /// This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log files.
    /// </para>
    /// </remarks>
    public Task GetPipelineContainerLog(GetPipelineContainerLogRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
                new TemplateParam("log_uuid", request.LogUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPipelineContainerLogError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a specified pipeline
    /// </remarks>
    public Task<Pipeline> GetPipelineForRepository(GetPipelineForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Pipeline>(),
            GetPipelineForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a step of a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineStep"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineStepForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a given step of a pipeline.
    /// </remarks>
    public Task<PipelineStep> GetPipelineStepForRepository(GetPipelineStepForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineStep>(),
            GetPipelineStepForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get log file for a step
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineStepLogForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the log file for a given step of a pipeline.
    /// <para>
    /// This endpoint supports (and encourages!) the use of HTTP Range requests to deal with potentially very large log files.
    /// </para>
    /// </remarks>
    public Task GetPipelineStepLogForRepository(GetPipelineStepLogForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPipelineStepLogForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List steps for a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineSteps"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find steps for the given pipeline.
    /// </remarks>
    public Task<PaginatedPipelineSteps> GetPipelineStepsForRepository(GetPipelineStepsForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineSteps>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get test case reasons (output) for a given test case in a step of a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineTestReportTestCaseReasonsError"/> when the server returns an error response.</exception>
    public Task GetPipelineTestReportTestCaseReasons(GetPipelineTestReportTestCaseReasonsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
                new TemplateParam("test_case_uuid", request.TestCaseUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPipelineTestReportTestCaseReasonsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get test cases for a given step of a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineTestReportTestCasesError"/> when the server returns an error response.</exception>
    public Task GetPipelineTestReportTestCases(GetPipelineTestReportTestCasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPipelineTestReportTestCasesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a summary of test reports for a given step of a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineTestReportsError"/> when the server returns an error response.</exception>
    public Task GetPipelineTestReports(GetPipelineTestReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
                new TemplateParam("step_uuid", request.StepUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPipelineTestReportsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a variable for a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineVariableForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a team level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> GetPipelineVariableForTeam(GetPipelineVariableForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            [new TemplateParam("username", request.Username), new TemplateParam("variable_uuid", request.VariableUuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineVariable>(),
            GetPipelineVariableForTeamError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a variable for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineVariableForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a user level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> GetPipelineVariableForUser(GetPipelineVariableForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineVariable>(),
            GetPipelineVariableForUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get variable for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPipelineVariableForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a workspace level variable.
    /// </remarks>
    public Task<PipelineVariable> GetPipelineVariableForWorkspace(GetPipelineVariableForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineVariable>(),
            GetPipelineVariableForWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List variables for an account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineVariables"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find account level variables.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PaginatedPipelineVariables> GetPipelineVariablesForTeam(GetPipelineVariablesForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/pipelines_config/variables"),
            [new TemplateParam("username", request.Username)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineVariables>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List variables for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineVariables"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find user level variables.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PaginatedPipelineVariables> GetPipelineVariablesForUser(GetPipelineVariablesForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/pipelines_config/variables"),
            [new TemplateParam("selected_user", request.SelectedUser)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineVariables>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List variables for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineVariables"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find workspace level variables.
    /// </remarks>
    public Task<PaginatedPipelineVariables> GetPipelineVariablesForWorkspace(GetPipelineVariablesForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/variables"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineVariables>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelines"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find pipelines in a repository.
    /// <para>
    /// Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow filtering
    /// and sorting of returned results. See query parameters
    /// for specific details.
    /// </para>
    /// </remarks>
    public Task<PaginatedPipelines> GetPipelinesForRepository(GetPipelinesForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [
                new Param("creator.uuid", request.CreatorUuid),
                new Param("target.ref_type", request.TargetRefType),
                new Param("target.ref_name", request.TargetRefName),
                new Param("target.branch", request.TargetBranch),
                new Param("target.commit.hash", request.TargetCommitHash),
                new Param("target.selector.pattern", request.TargetSelectorPattern),
                new Param("target.selector.type", request.TargetSelectorType),
                new Param("created_on", request.CreatedOn?.ToIso8601()),
                new Param("trigger_type", request.TriggerType),
                new Param("status", request.Status),
                new Param("sort", request.Sort),
                new Param("page", request.Page),
                new Param("pagelen", request.Pagelen),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelines>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get cache content URI
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineCacheContentUri"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineCacheContentUriError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the URI of the content of the specified cache.
    /// </remarks>
    public Task<PipelineCacheContentUri> GetRepositoryPipelineCacheContentUri(GetRepositoryPipelineCacheContentUriRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("cache_uuid", request.CacheUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineCacheContentUri>(),
            GetRepositoryPipelineCacheContentUriError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List caches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineCache"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineCachesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the repository pipelines caches.
    /// </remarks>
    public Task<PaginatedPipelineCache> GetRepositoryPipelineCaches(GetRepositoryPipelineCachesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/caches"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineCache>(),
            GetRepositoryPipelineCachesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelinesConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the repository pipelines configuration.
    /// </remarks>
    public Task<PipelinesConfig> GetRepositoryPipelineConfig(GetRepositoryPipelineConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelinesConfig>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a known host
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineKnownHost"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineKnownHostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a repository level known host.
    /// </remarks>
    public Task<PipelineKnownHost> GetRepositoryPipelineKnownHost(GetRepositoryPipelineKnownHostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("known_host_uuid", request.KnownHostUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineKnownHost>(),
            GetRepositoryPipelineKnownHostError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List known hosts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineKnownHosts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find repository level known hosts.
    /// </remarks>
    public Task<PaginatedPipelineKnownHosts> GetRepositoryPipelineKnownHosts(GetRepositoryPipelineKnownHostsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineKnownHosts>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineSchedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a schedule by its UUID.
    /// </remarks>
    public Task<PipelineSchedule> GetRepositoryPipelineSchedule(GetRepositoryPipelineScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("schedule_uuid", request.ScheduleUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineSchedule>(),
            GetRepositoryPipelineScheduleError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List executions of a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineScheduleExecutions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineScheduleExecutionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the executions of a given schedule.
    /// </remarks>
    public Task<PaginatedPipelineScheduleExecutions> GetRepositoryPipelineScheduleExecutions(GetRepositoryPipelineScheduleExecutionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("schedule_uuid", request.ScheduleUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineScheduleExecutions>(),
            GetRepositoryPipelineScheduleExecutionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List schedules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineSchedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineSchedulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the configured schedules for the given repository.
    /// </remarks>
    public Task<PaginatedPipelineSchedule> GetRepositoryPipelineSchedules(GetRepositoryPipelineSchedulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineSchedule>(),
            GetRepositoryPipelineSchedulesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get SSH key pair
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineSshKeyPair"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineSshKeyPairError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
    /// </remarks>
    public Task<PipelineSshKeyPair> GetRepositoryPipelineSshKeyPair(GetRepositoryPipelineSshKeyPairRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineSshKeyPair>(),
            GetRepositoryPipelineSshKeyPairError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a variable for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryPipelineVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a repository level variable.
    /// </remarks>
    public Task<PipelineVariable> GetRepositoryPipelineVariable(GetRepositoryPipelineVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineVariable>(),
            GetRepositoryPipelineVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List variables for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedPipelineVariables"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find repository level variables.
    /// </remarks>
    public Task<PaginatedPipelineVariables> GetRepositoryPipelineVariables(GetRepositoryPipelineVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedPipelineVariables>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get repository runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoryRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve repository runner by uuid.
    /// </remarks>
    public Task<PipelineRunner> GetRepositoryRunner(GetRepositoryRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("runner_uuid", request.RunnerUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            GetRepositoryRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get repository runners
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRunners"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve repository runners.
    /// </remarks>
    public Task<PaginatedRunners> GetRepositoryRunners(GetRepositoryRunnersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRunners>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workspace runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get workspace runner by uuid.
    /// </remarks>
    public Task<PipelineRunner> GetWorkspaceRunner(GetWorkspaceRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("runner_uuid", request.RunnerUuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            GetWorkspaceRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workspace runners
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRunners"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve workspace runners.
    /// </remarks>
    public Task<PaginatedRunners> GetWorkspaceRunners(GetWorkspaceRunnersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/runners"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRunners>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop a pipeline
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopPipelineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Signal the stop of a pipeline and all of its steps that not have completed yet.
    /// </remarks>
    public Task StopPipeline(StopPipelineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pipeline_uuid", request.PipelineUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StopPipelineError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a variable for an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeploymentVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDeploymentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a deployment environment level variable.
    /// </remarks>
    public Task<DeploymentVariable> UpdateDeploymentVariable(UpdateDeploymentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeploymentVariable>(),
            UpdateDeploymentVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a variable for a team
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePipelineVariableForTeamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a team level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> UpdatePipelineVariableForTeam(UpdatePipelineVariableForTeamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/teams/{username}/pipelines_config/variables/{variable_uuid}"),
            [new TemplateParam("username", request.Username), new TemplateParam("variable_uuid", request.VariableUuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            UpdatePipelineVariableForTeamError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a variable for a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePipelineVariableForUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a user level variable.
    /// This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see the announcement.
    /// </remarks>
    public Task<PipelineVariable> UpdatePipelineVariableForUser(UpdatePipelineVariableForUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            UpdatePipelineVariableForUserError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update variable for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePipelineVariableForWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a workspace level variable.
    /// </remarks>
    public Task<PipelineVariable> UpdatePipelineVariableForWorkspace(UpdatePipelineVariableForWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            UpdatePipelineVariableForWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update the next build number
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineBuildNumber"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryBuildNumberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
    /// </remarks>
    public Task<PipelineBuildNumber> UpdateRepositoryBuildNumber(UpdateRepositoryBuildNumberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/build_number"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineBuildNumber>(),
            UpdateRepositoryBuildNumberError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelinesConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the pipelines configuration for a repository.
    /// </remarks>
    public Task<PipelinesConfig> UpdateRepositoryPipelineConfig(UpdateRepositoryPipelineConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelinesConfig>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update SSH key pair
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineSshKeyPair"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryPipelineKeyPairError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
    /// </remarks>
    public Task<PipelineSshKeyPair> UpdateRepositoryPipelineKeyPair(UpdateRepositoryPipelineKeyPairRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineSshKeyPair>(),
            UpdateRepositoryPipelineKeyPairError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a known host
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineKnownHost"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryPipelineKnownHostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a repository level known host.
    /// </remarks>
    public Task<PipelineKnownHost> UpdateRepositoryPipelineKnownHost(UpdateRepositoryPipelineKnownHostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("known_host_uuid", request.KnownHostUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineKnownHost>(),
            UpdateRepositoryPipelineKnownHostError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a schedule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineSchedule"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryPipelineScheduleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a schedule.
    /// </remarks>
    public Task<PipelineSchedule> UpdateRepositoryPipelineSchedule(UpdateRepositoryPipelineScheduleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("schedule_uuid", request.ScheduleUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineSchedule>(),
            UpdateRepositoryPipelineScheduleError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a variable for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryPipelineVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a repository level variable.
    /// </remarks>
    public Task<PipelineVariable> UpdateRepositoryPipelineVariable(UpdateRepositoryPipelineVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("variable_uuid", request.VariableUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PipelineVariable>(),
            UpdateRepositoryPipelineVariableError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update repository runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRepositoryRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update repository runner.
    /// </remarks>
    public Task<PipelineRunner> UpdateRepositoryRunner(UpdateRepositoryRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("runner_uuid", request.RunnerUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            UpdateRepositoryRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update workspace runner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PipelineRunner"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWorkspaceRunnerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update workspace runner.
    /// </remarks>
    public Task<PipelineRunner> UpdateWorkspaceRunner(UpdateWorkspaceRunnerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("runner_uuid", request.RunnerUuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<PipelineRunner>(),
            UpdateWorkspaceRunnerError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
