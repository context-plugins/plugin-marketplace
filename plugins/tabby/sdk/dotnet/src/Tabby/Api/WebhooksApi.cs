using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Tabby.Core;
using Tabby.Core.Exceptions;
using Tabby.Core.Models;
using Tabby.Core.Request;
using Tabby.Core.Response;
using Tabby.Errors;
using Tabby.Models;
using Tabby.Models.AnyOf;
using Tabby.Requests.WebhooksApi;

namespace Tabby.Api;

/// <summary>
/// Manage webhook endpoints.
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
    /// Remove a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookDelete"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified webhook.
    /// </remarks>
    public Task<WebhookDelete> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("X-Merchant-Code", request.XMerchantCode),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookDelete>(),
            DeleteWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the specified webhook.
    /// </remarks>
    public Task<Webhook> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Merchant-Code", request.XMerchantCode)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Webhook>(),
            GetWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve all webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponseAll"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all registred webhooks.
    /// </remarks>
    public Task<WebhookResponseAll> GetWebhooks(GetWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks"),
            [],
            [],
            [new HeaderParam("X-Merchant-Code", request.XMerchantCode)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookResponseAll>(),
            GetWebhooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Register a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookRegistrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook
    /// </remarks>
    public Task<WebhookRegistrationResponse> PostWebhook(PostWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks"),
            [],
            [],
            [
                new HeaderParam("X-Merchant-Code", request.XMerchantCode),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookRegistrationResponse>(),
            PostWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookUpdate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified webhook.
    /// </remarks>
    public Task<WebhookUpdate> PutWebhook(PutWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("X-Merchant-Code", request.XMerchantCode),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookUpdate>(),
            PutWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
