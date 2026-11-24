using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PrismaReviews.Core;
using PrismaReviews.Core.Exceptions;
using PrismaReviews.Core.Models;
using PrismaReviews.Core.Request;
using PrismaReviews.Core.Response;
using PrismaReviews.Errors;
using PrismaReviews.Models;
using PrismaReviews.Requests.WebhooksApi;

namespace PrismaReviews.Api;

/// <summary>
/// Signed event deliveries to your HTTPS endpoints.
/// </summary>
public sealed class WebhooksApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebhooksApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Register a webhook endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookCreated"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Registers an HTTPS endpoint for signed event deliveries. The signing <c>secret</c> is returned only in this response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not idempotent: retrying creates a second endpoint.
    /// </remarks>
    public Task<WebhookCreated> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookCreated>(),
            CreateWebhookError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookDeleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint and delete the old one.
    /// </remarks>
    public Task<WebhookDeleted> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookDeleted>(),
            DeleteWebhookError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhook endpoints
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.
    /// </remarks>
    public Task<WebhookList> ListWebhooks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookList>(),
            ListWebhooksError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
