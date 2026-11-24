using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.Deployments;

namespace Bitbucket.Api;

/// <summary>
/// Teams are deploying code faster than ever, thanks to continuous
/// delivery practices and tools like Bitbucket Pipelines. Bitbucket
/// Deployments gives teams visibility into their deployment
/// environments and helps teams to track how far changes have
/// progressed in their deployment pipeline.
/// </summary>
public sealed class Deployments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Deployments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeploymentEnvironment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an environment.
    /// </remarks>
    public Task<DeploymentEnvironment> CreateEnvironment(CreateEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/environments"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeploymentEnvironment>(),
            CreateEnvironmentError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEnvironmentForRepositoryError"/> when the server returns an error response.</exception>
    public Task DeleteEnvironmentForRepository(DeleteEnvironmentForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEnvironmentForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a repository deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This deletes a deploy key from a repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            [
                new TemplateParam("key_id", request.KeyId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a deploy key from a project
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This deletes a deploy key from a project.
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            [
                new TemplateParam("key_id", request.KeyId),
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a deployment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeploymentForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a deployment
    /// </remarks>
    public Task<Deployment> GetDeploymentForRepository(GetDeploymentForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("deployment_uuid", request.DeploymentUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Deployment>(),
            GetDeploymentForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDeployments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find deployments
    /// </remarks>
    public Task<PaginatedDeployments> GetDeploymentsForRepository(GetDeploymentsForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deployments"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDeployments>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeploymentEnvironment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentForRepositoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an environment
    /// </remarks>
    public Task<DeploymentEnvironment> GetEnvironmentForRepository(GetEnvironmentForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeploymentEnvironment>(),
            GetEnvironmentForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDeploymentEnvironments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find environments
    /// </remarks>
    public Task<PaginatedDeploymentEnvironments> GetEnvironmentsForRepository(GetEnvironmentsForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/environments"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("repo_slug", request.RepoSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDeploymentEnvironments>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repository deploy keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedDeployKeys"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDeployKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all deploy-keys belonging to a repository.
    /// </remarks>
    public Task<PaginatedDeployKeys> GetRepositoriesByWorkspaceByRepoSlugDeployKeys(GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedDeployKeys>(),
            GetRepositoriesByWorkspaceByRepoSlugDeployKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a repository deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the deploy key belonging to a specific key.
    /// </remarks>
    public Task<DeployKey> GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            [
                new TemplateParam("key_id", request.KeyId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeployKey>(),
            GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List project deploy keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedProjectDeployKeys"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all deploy keys belonging to a project.
    /// </remarks>
    public Task<PaginatedProjectDeployKeys> GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedProjectDeployKeys>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a project deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectDeployKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the deploy key belonging to a specific key ID.
    /// </remarks>
    public Task<ProjectDeployKey> GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}"),
            [
                new TemplateParam("key_id", request.KeyId),
                new TemplateParam("project_key", request.ProjectKey),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectDeployKey>(),
            GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a repository deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugDeployKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new deploy key in a repository. Note: If authenticating a deploy key
    /// with an OAuth consumer, any changes to the OAuth consumer will subsequently
    /// invalidate the deploy key.
    /// <para>
    /// Example:
    /// <code>
    /// $ curl -X POST \
    /// -H "Authorization " \
    /// -H "Content-type: application/json" \
    /// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
    /// '{
    /// "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    /// "label": "mydeploykey"
    /// }'
    /// </code>
    /// </para>
    /// </remarks>
    public Task<DeployKey> PostRepositoriesByWorkspaceByRepoSlugDeployKeys(PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deploy-keys"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<DeployKey>(),
            PostRepositoriesByWorkspaceByRepoSlugDeployKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a project deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectDeployKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new deploy key in a project.
    /// <para>
    /// Example:
    /// <code>
    /// $ curl -X POST \
    /// -H "Authorization " \
    /// -H "Content-type: application/json" \
    /// https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \
    /// '{
    /// "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
    /// "label": "mydeploykey"
    /// }'
    /// </code>
    /// </para>
    /// </remarks>
    public Task<ProjectDeployKey> PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/projects/{project_key}/deploy-keys"),
            [new TemplateParam("project_key", request.ProjectKey), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectDeployKey>(),
            PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a repository deploy key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeployKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new deploy key in a repository.
    /// <para>
    /// The same key needs to be passed in but the comment and label can change.
    /// </para>
    /// <para>
    /// Example:
    /// <code>
    /// $ curl -X PUT \
    /// -H "Authorization " \
    /// -H "Content-type: application/json" \
    /// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
    /// '{
    /// "label": "newlabel",
    /// "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
    /// }'
    /// </code>
    /// </para>
    /// </remarks>
    public Task<DeployKey> PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}"),
            [
                new TemplateParam("key_id", request.KeyId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<DeployKey>(),
            PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEnvironmentForRepositoryError"/> when the server returns an error response.</exception>
    public Task UpdateEnvironmentForRepository(UpdateEnvironmentForRepositoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("environment_uuid", request.EnvironmentUuid),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateEnvironmentForRepositoryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
