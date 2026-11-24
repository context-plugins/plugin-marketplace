using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.CustomProperties;

namespace DevCycle.Api;

public sealed class CustomProperties
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CustomProperties(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Custom Property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CustomPropertiesControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Custom Property
    /// </remarks>
    public Task<CustomProperty> CustomPropertiesControllerCreate(CustomPropertiesControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/customProperties"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomProperty>(),
            CustomPropertiesControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Custom Properties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CustomProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CustomPropertiesControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<CustomProperty>> CustomPropertiesControllerFindAll(CustomPropertiesControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/customProperties"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("type", request.Type),
                new Param("includeUsage", request.IncludeUsage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CustomProperty>>(),
            CustomPropertiesControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Custom Property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CustomPropertiesControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Custom Property by ID or key
    /// </remarks>
    public Task<CustomProperty> CustomPropertiesControllerFindOne(CustomPropertiesControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/customProperties/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CustomProperty>(),
            CustomPropertiesControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Custom Property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CustomPropertiesControllerRemoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Custom Property by ID or key
    /// </remarks>
    public Task CustomPropertiesControllerRemove(CustomPropertiesControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/customProperties/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CustomPropertiesControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Custom Property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CustomProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CustomPropertiesControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an Custom Property by ID or key
    /// </remarks>
    public Task<CustomProperty> CustomPropertiesControllerUpdate(CustomPropertiesControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/customProperties/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CustomProperty>(),
            CustomPropertiesControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
