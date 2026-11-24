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
using Contentstack.Requests.Environments;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for managing deployment environments (e.g., production, staging) within a stack.
/// </summary>
public sealed class Environments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Environments(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Environment2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new deployment environment for a Launch project. Each environment can have its own domain, build configuration, and deployment settings.
    /// </remarks>
    public Task<Environment2> CreateEnvironment(CreateEnvironmentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/projects/{project_uid}/environments"),
            [new TemplateParam("project_uid", request.ProjectUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Environment2>(),
            CreateEnvironmentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a deployment environment and its deployment history. This action is irreversible.
    /// </remarks>
    public Task DeleteEnvironment(DeleteEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/projects/{project_uid}/environments/{env_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEnvironmentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllEnvironmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all deployment environments configured for the stack, such as production, staging, and development.
    /// </remarks>
    public Task<EnvironmentList> GetAllEnvironments(GetAllEnvironmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/environments"),
            [],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("authtoken", request.Authtoken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentList>(),
            GetAllEnvironmentsError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Environment2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific deployment environment including its domain configuration, framework settings, and latest deployment status.
    /// </remarks>
    public Task<Environment2> GetEnvironment(GetEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/projects/{project_uid}/environments/{env_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Environment2>(),
            GetEnvironmentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all environments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentList2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProjectsByProjectUidEnvironmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all deployment environments configured for a Launch project, including their domain configurations and current deployment status.
    /// </remarks>
    public Task<EnvironmentList2> GetProjectsByProjectUidEnvironments(GetProjectsByProjectUidEnvironmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/projects/{project_uid}/environments"),
            [new TemplateParam("project_uid", request.ProjectUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentList2>(),
            GetProjectsByProjectUidEnvironmentsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revalidate CDN cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RevalidateCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh content on the next request. Subject to cache revalidation quota limits per organization.
    /// </remarks>
    public Task RevalidateCache(RevalidateCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi(
                "/projects/{project_uid}/environments/{env_uid}/revalidate-cache"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RevalidateCacheError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an environment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Environment2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEnvironmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the configuration of a deployment environment such as domain settings or build configuration.
    /// </remarks>
    public Task<Environment2> UpdateEnvironment(UpdateEnvironmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/projects/{project_uid}/environments/{env_uid}"),
            [new TemplateParam("project_uid", request.ProjectUid), new TemplateParam("env_uid", request.EnvUid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Environment2>(),
            UpdateEnvironmentError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.AuthtokenAuth),
            requestOptions,
            cancellationToken);
}
