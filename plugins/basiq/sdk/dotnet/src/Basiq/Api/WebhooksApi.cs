using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.WebhooksApi;

namespace Basiq.Api;

/// <summary>
/// Basiq Webhooks
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
    /// Create a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddWebhookError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksResponse> AddWebhook(AddWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NotificationsWebhooksResponse>(),
            AddWebhookError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    public Task DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWebhookError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksResponse> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NotificationsWebhooksResponse>(),
            GetWebhookError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksMessagesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookMessageError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksMessagesResponse1> GetWebhookMessage(GetWebhookMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}/messages/{messageId}"),
            [new TemplateParam("webhookId", request.WebhookId), new TemplateParam("messageId", request.MessageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NotificationsWebhooksMessagesResponse1>(),
            GetWebhookMessageError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get webhook delivery statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookStats"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookStatsError"/> when the server returns an error response.</exception>
    public Task<WebhookStats> GetWebhookStats(GetWebhookStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}/stats"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookStats>(),
            GetWebhookStatsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all webhooks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAppWebhooksError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksResponse1> ListAppWebhooks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NotificationsWebhooksResponse1>(),
            ListAppWebhooksError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all messages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMessagesError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksMessagesResponse> ListMessages(ListMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}/messages"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [new Param("limit", request.Limit), new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NotificationsWebhooksMessagesResponse>(),
            ListMessagesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Post a test message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestMessageError"/> when the server returns an error response.</exception>
    public Task TestMessage(TestMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/messages/test"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TestMessageError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationsWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    public Task<NotificationsWebhooksResponse> UpdateWebhook(UpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/notifications/webhooks/{webhookId}"),
            [new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NotificationsWebhooksResponse>(),
            UpdateWebhookError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
