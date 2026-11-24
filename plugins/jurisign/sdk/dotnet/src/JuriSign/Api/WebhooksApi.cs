using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Models;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;
using JuriSign.Requests.WebhooksApi;

namespace JuriSign.Api;

/// <summary>
/// Manage webhook endpoints for event notifications
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
    /// Create Webhook Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Register a new webhook endpoint. The response includes the signing secret which is only shown once.
    /// </remarks>
    public Task<WebhooksResponse1> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhooksResponse1>(),
            CreateWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Webhook Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a webhook endpoint and all its delivery logs.
    /// </remarks>
    public Task<MessageResponse> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Webhook Delivery Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// View delivery logs for a specific webhook endpoint.
    /// </remarks>
    public Task<WebhooksLogsResponse> GetWebhookLogs(GetWebhookLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{id}/logs"),
            [new TemplateParam("id", request.Id)],
            [new Param("per_page", request.PerPage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksLogsResponse>(),
            GetWebhookLogsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Webhook Endpoints
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all webhook endpoints for your organization.
    /// </remarks>
    public Task<WebhooksResponse> ListWebhooks(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksResponse>(),
            ListWebhooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Regenerate Webhook Secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksRegenerateSecretResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RegenerateWebhookSecretError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.
    /// </remarks>
    public Task<WebhooksRegenerateSecretResponse> RegenerateWebhookSecret(RegenerateWebhookSecretRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{id}/regenerate-secret"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksRegenerateSecretResponse>(),
            RegenerateWebhookSecretError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook Endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a webhook endpoint's URL, events, or active status.
    /// </remarks>
    public Task<WebhooksResponse2> UpdateWebhook(UpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhooksResponse2>(),
            UpdateWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
