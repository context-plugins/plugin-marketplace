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
using DevCycle.Requests.WebhooksApi;

namespace DevCycle.Api;

public sealed class WebhooksApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal WebhooksApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksControllerCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Webhook
    /// </remarks>
    public Task<Webhook> WebhooksControllerCreate(WebhooksControllerCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/webhooks"),
            [new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Webhook>(),
            WebhooksControllerCreateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksControllerFindAllError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<Webhook>> WebhooksControllerFindAll(WebhooksControllerFindAllRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/webhooks"),
            [new TemplateParam("project", request.Project)],
            [
                new Param("page", request.Page),
                new Param("perPage", request.PerPage),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("createdBy", request.CreatedBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Webhook>>(),
            WebhooksControllerFindAllError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksControllerFindOneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a webhook by ID
    /// </remarks>
    public Task<Webhook> WebhooksControllerFindOne(WebhooksControllerFindOneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/webhooks/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("project", request.Project)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Webhook>(),
            WebhooksControllerFindOneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksControllerRemoveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a webhook by ID
    /// </remarks>
    public Task<Webhook> WebhooksControllerRemove(WebhooksControllerRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/webhooks/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Webhook>(),
            WebhooksControllerRemoveError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksControllerUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a Webhook
    /// </remarks>
    public Task<Webhook> WebhooksControllerUpdate(WebhooksControllerUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{project}/webhooks/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Webhook>(),
            WebhooksControllerUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
