using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudStorageTransferService.Core;
using GoogleCloudStorageTransferService.Core.Authentication;
using GoogleCloudStorageTransferService.Core.Exceptions;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Core.Request;
using GoogleCloudStorageTransferService.Core.Response;
using GoogleCloudStorageTransferService.Errors;
using GoogleCloudStorageTransferService.Models;
using GoogleCloudStorageTransferService.Requests.Projects;

namespace GoogleCloudStorageTransferService.Api;

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
    /// Create agentPools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AgentPool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferProjectsAgentPoolsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an agent pool resource.
    /// </remarks>
    public Task<AgentPool> StoragetransferProjectsAgentPoolsCreate(StoragetransferProjectsAgentPoolsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/agentPools"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [new Param("agentPoolId", request.AgentPoolId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AgentPool>(),
            StoragetransferProjectsAgentPoolsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete agentPools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferProjectsAgentPoolsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an agent pool.
    /// </remarks>
    public Task<object> StoragetransferProjectsAgentPoolsDelete(StoragetransferProjectsAgentPoolsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("agentPoolsId", request.AgentPoolsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            StoragetransferProjectsAgentPoolsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get agentPools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AgentPool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferProjectsAgentPoolsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets an agent pool.
    /// </remarks>
    public Task<AgentPool> StoragetransferProjectsAgentPoolsGet(StoragetransferProjectsAgentPoolsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("agentPoolsId", request.AgentPoolsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AgentPool>(),
            StoragetransferProjectsAgentPoolsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List agentPools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAgentPoolsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferProjectsAgentPoolsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists agent pools.
    /// </remarks>
    public Task<ListAgentPoolsResponse> StoragetransferProjectsAgentPoolsList(StoragetransferProjectsAgentPoolsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/agentPools"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAgentPoolsResponse>(),
            StoragetransferProjectsAgentPoolsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch agentPools
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AgentPool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferProjectsAgentPoolsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing agent pool resource.
    /// </remarks>
    public Task<AgentPool> StoragetransferProjectsAgentPoolsPatch(StoragetransferProjectsAgentPoolsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("agentPoolsId", request.AgentPoolsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AgentPool>(),
            StoragetransferProjectsAgentPoolsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
