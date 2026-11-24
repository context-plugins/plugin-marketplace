using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.EntityTemplates;

namespace Shortcut.Api;

public sealed class EntityTemplates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EntityTemplates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Entity Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateEntityTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new entity template for the Workspace.
    /// </remarks>
    public Task<EntityTemplate> CreateEntityTemplate(CreateEntityTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntityTemplate>(),
            CreateEntityTemplateError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Entity Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteEntityTemplateError"/> when the server returns an error response.</exception>
    public Task DeleteEntityTemplate(DeleteEntityTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates/{entity-template-public-id}"),
            [new TemplateParam("entity-template-public-id", request.EntityTemplatePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteEntityTemplateError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disable Story Templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisableStoryTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disables the Story Template feature for the Workspace.
    /// </remarks>
    public Task DisableStoryTemplates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates/disable"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DisableStoryTemplatesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable Story Templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnableStoryTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enables the Story Template feature for the Workspace.
    /// </remarks>
    public Task EnableStoryTemplates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates/enable"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            EnableStoryTemplatesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Entity Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEntityTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Entity Template returns information about a given entity template.
    /// </remarks>
    public Task<EntityTemplate> GetEntityTemplate(GetEntityTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates/{entity-template-public-id}"),
            [new TemplateParam("entity-template-public-id", request.EntityTemplatePublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EntityTemplate>(),
            GetEntityTemplateError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Entity Templates
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EntityTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEntityTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the entity templates for the Workspace.
    /// </remarks>
    public Task<IReadOnlyList<EntityTemplate>> ListEntityTemplates(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EntityTemplate>>(),
            ListEntityTemplatesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Entity Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntityTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateEntityTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an entity template's name or its contents.
    /// </remarks>
    public Task<EntityTemplate> UpdateEntityTemplate(UpdateEntityTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/entity-templates/{entity-template-public-id}"),
            [new TemplateParam("entity-template-public-id", request.EntityTemplatePublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntityTemplate>(),
            UpdateEntityTemplateError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
