using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.WebhooksApi;

namespace Beehiiv.Api;

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
    /// Create a webhook OAuth Scope: webhooks:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create13Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new webhook for a given publication.
    /// </remarks>
    public Task<WebhookResponse> Create13(Create13Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/webhooks"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResponse>(),
            Create13Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook OAuth Scope: webhooks:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Delete6Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a webhook subscription from a publication.
    /// </remarks>
    public Task<WebhooksDeleteResponse> Delete6(Delete6Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/webhooks/{endpointId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("endpointId", request.EndpointId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksDeleteResponse>(),
            Delete6Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks OAuth Scope: webhooks:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IndexWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index22Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all webhooks belonging to a specific publication.
    /// </remarks>
    public Task<IndexWebhooksResponse> Index22(Index22Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/webhooks"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("limit", request.Limit)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IndexWebhooksResponse>(),
            Index22Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get webhook OAuth Scope: webhooks:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show17Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a specific webhook belonging to a publication.
    /// </remarks>
    public Task<WebhookResponse> Show17(Show17Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/webhooks/{endpointId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("endpointId", request.EndpointId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookResponse>(),
            Show17Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update webhook OAuth Scope: webhooks:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Update4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a webhook subscription for a publication.
    /// </remarks>
    public Task<WebhookResponse> Update4(Update4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/webhooks/{endpointId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("endpointId", request.EndpointId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResponse>(),
            Update4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
