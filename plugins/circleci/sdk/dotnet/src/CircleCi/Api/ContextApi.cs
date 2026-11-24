using System;
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
using CircleCi.Requests.ContextApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for managing contexts, which are used to secure and share environment variables across projects.
/// </summary>
public sealed class ContextApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContextApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add or update an environment variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentVariable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddOrUpdateContextEnvironmentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new environment variable or updates an existing one within the specified context.
    /// </remarks>
    public Task<EnvironmentVariable> AddOrUpdateContextEnvironmentVariable(AddOrUpdateContextEnvironmentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context/{context-id}/environment-variable/{env-var-name}"),
            [new TemplateParam("context-id", request.ContextId), new TemplateParam("env-var-name", request.EnvVarName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnvironmentVariable>(),
            AddOrUpdateContextEnvironmentVariableError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a context
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Context"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new context for sharing environment variables across projects.
    /// </remarks>
    public Task<Context> CreateContext(CreateContextOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Context>(),
            CreateContextError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a context
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteContextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a context and all of its associated environment variables.
    /// </remarks>
    public Task<MessageResponse> DeleteContext(DeleteContextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context/{context-id}"),
            [new TemplateParam("context-id", request.ContextId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteContextError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove an environment variable
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteContextEnvironmentVariableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an environment variable from the specified context.
    /// </remarks>
    public Task<MessageResponse> DeleteContextEnvironmentVariable(DeleteContextEnvironmentVariableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context/{context-id}/environment-variable/{env-var-name}"),
            [new TemplateParam("context-id", request.ContextId), new TemplateParam("env-var-name", request.EnvVarName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteContextEnvironmentVariableError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a context
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Context"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific context by its unique identifier.
    /// </remarks>
    public Task<Context> GetContext(GetContextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context/{context-id}"),
            [new TemplateParam("context-id", request.ContextId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Context>(),
            GetContextError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List environment variables in a context
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnvironmentVariableList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContextEnvironmentVariablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of environment variables associated with a specific context.
    /// </remarks>
    public Task<EnvironmentVariableList> ListContextEnvironmentVariables(ListContextEnvironmentVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context/{context-id}/environment-variable"),
            [new TemplateParam("context-id", request.ContextId)],
            [new Param("page-token", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EnvironmentVariableList>(),
            ListContextEnvironmentVariablesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contexts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContextList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContextsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of contexts for a given owner, which can be an organization or account.
    /// </remarks>
    public Task<ContextList> ListContexts(ListContextsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/context"),
            [],
            [
                new Param("owner-id", request.OwnerId),
                new Param("owner-slug", request.OwnerSlug),
                new Param("owner-type", request.OwnerType),
                new Param("page-token", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContextList>(),
            ListContextsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
