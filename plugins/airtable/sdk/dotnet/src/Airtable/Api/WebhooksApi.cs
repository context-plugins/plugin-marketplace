using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;
using Airtable.Core.Request;
using Airtable.Core.Response;
using Airtable.Errors;
using Airtable.Models;
using Airtable.Requests.WebhooksApi;

namespace Airtable.Api;

/// <summary>
/// Subscribe to real-time change notifications on bases
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
    /// Airtable Create a Webhook for a Base
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth authentication with the webhook:manage scope.
    /// </remarks>
    public Task<WebhookCreateResponse> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bases/{baseId}/webhooks"),
            [new TemplateParam("baseId", request.BaseId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookCreateResponse>(),
            CreateWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Delete a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.
    /// </remarks>
    public Task<object> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bases/{baseId}/webhooks/{webhookId}"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List Webhook Payloads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookPayloadList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhookPayloadsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in chronological order and can be paginated using a cursor.
    /// </remarks>
    public Task<WebhookPayloadList> ListWebhookPayloads(ListWebhookPayloadsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bases/{baseId}/webhooks/{webhookId}/payloads"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("webhookId", request.WebhookId)],
            [new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookPayloadList>(),
            ListWebhookPayloadsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List Webhooks for a Base
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BasesWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and expiration information.
    /// </remarks>
    public Task<BasesWebhooksResponse> ListWebhooks(ListWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bases/{baseId}/webhooks"),
            [new TemplateParam("baseId", request.BaseId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BasesWebhooksResponse>(),
            ListWebhooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Refresh a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BasesWebhooksRefreshResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be periodically refreshed to remain active.
    /// </remarks>
    public Task<BasesWebhooksRefreshResponse> RefreshWebhook(RefreshWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/bases/{baseId}/webhooks/{webhookId}/refresh"),
            [new TemplateParam("baseId", request.BaseId), new TemplateParam("webhookId", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BasesWebhooksRefreshResponse>(),
            RefreshWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
