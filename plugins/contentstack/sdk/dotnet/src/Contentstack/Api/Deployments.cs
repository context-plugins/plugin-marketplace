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
using Contentstack.Requests.Deployments;

namespace Contentstack.Api;

/// <summary>
/// Deployments represent individual build and publish operations to a Launch environment. Each deployment has associated build logs, server logs, and status tracking.
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
    /// Create a deployment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDeploymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers a new deployment to the specified environment. Requires a previously uploaded build artifact referenced by its upload URL. The deployment process builds and publishes the application to the environment's CDN infrastructure.
    /// </remarks>
    public Task<Deployment> CreateDeployment(CreateDeploymentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Deployment>(),
            CreateDeploymentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all deployments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeploymentList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllDeploymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all deployments for a specific environment, showing deployment history with status, creation times, and build metadata.
    /// </remarks>
    public Task<DeploymentList> GetAllDeployments(GetAllDeploymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_uid}/environments/{env_uid}/deployments"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeploymentList>(),
            GetAllDeploymentsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a deployment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deployment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeploymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full details of a specific deployment including its status, build configuration, and completion information.
    /// </remarks>
    public Task<Deployment> GetDeployment(GetDeploymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}"),
            [
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("env_uid", request.EnvUid),
                new TemplateParam("deploy_uid", request.DeployUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Deployment>(),
            GetDeploymentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get deployment logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LogResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeploymentLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the build and deployment logs for a specific deployment, useful for debugging failed deployments and monitoring build progress.
    /// </remarks>
    public Task<LogResponse> GetDeploymentLogs(GetDeploymentLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs"),
            [
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("env_uid", request.EnvUid),
                new TemplateParam("deploy_uid", request.DeployUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LogResponse>(),
            GetDeploymentLogsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get server logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LogResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetServerLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side rendering issues and monitoring application runtime behavior.
    /// </remarks>
    public Task<LogResponse> GetServerLogs(GetServerLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs"),
            [
                new TemplateParam("project_uid", request.ProjectUid),
                new TemplateParam("env_uid", request.EnvUid),
                new TemplateParam("deploy_uid", request.DeployUid),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LogResponse>(),
            GetServerLogsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
