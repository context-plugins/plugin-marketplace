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
using Contentstack.Requests.Stacks;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for creating and managing Contentstack stacks, including settings, users, sharing, and ownership transfer.
/// </summary>
public sealed class Stacks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Stacks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a stack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StackModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Contentstack stack within an organization. A stack is an independent repository for content, assets, and configuration within a Contentstack account.
    /// </remarks>
    public Task<StackModel> CreateStack(CreateStackOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/stacks"),
            [],
            [],
            [
                new HeaderParam("organization_uid", request.OrganizationUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StackModel>(),
            CreateStackError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a stack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a stack and all its contents. This action is irreversible and will remove all content types, entries, assets, and configuration from the stack.
    /// </remarks>
    public Task DeleteStack(DeleteStackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/stacks/{api_key}"),
            [new TemplateParam("api_key", request.ApiKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteStackError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all stacks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StackList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllStacksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all stacks accessible to the authenticated user, optionally filtered by organization.
    /// </remarks>
    public Task<StackList> GetAllStacks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/stacks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StackList>(),
            GetAllStacksError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a stack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StackModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific stack identified by its API key, including configuration, plan, and region information.
    /// </remarks>
    public Task<StackModel> GetStack(GetStackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/stacks/{api_key}"),
            [new TemplateParam("api_key", request.ApiKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StackModel>(),
            GetStackError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a stack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StackModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates settings and metadata for a specific stack such as name, description, and master locale configuration.
    /// </remarks>
    public Task<StackModel> UpdateStack(UpdateStackOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/stacks/{api_key}"),
            [new TemplateParam("api_key", request.ApiKey)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StackModel>(),
            UpdateStackError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);
}
