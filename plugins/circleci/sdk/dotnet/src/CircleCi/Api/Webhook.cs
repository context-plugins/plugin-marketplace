using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.Webhook;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for creating, updating, listing, and deleting outbound webhook subscriptions.
/// </summary>
public sealed class Webhook
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Webhook(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new outbound webhook for the specified scope.
    /// </remarks>
    public Task<WebhookInfo> CreateWebhook(CreateWebhookOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/webhook"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookInfo>(),
            CreateWebhookError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a webhook by its unique identifier.
    /// </remarks>
    public Task<MessageResponse> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
            [new TemplateParam("webhook-id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteWebhookError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a webhook by its unique identifier.
    /// </remarks>
    public Task<WebhookInfo> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
            [new TemplateParam("webhook-id", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookInfo>(),
            GetWebhookError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of outbound webhooks for the specified scope.
    /// </remarks>
    public Task<WebhookList> ListWebhooks(ListWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/webhook"),
            [],
            [new Param("scope-id", request.ScopeId), new Param("scope-type", request.ScopeType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookList>(),
            ListWebhooksError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing webhook with the provided parameters.
    /// </remarks>
    public Task<WebhookInfo> UpdateWebhook(UpdateWebhookOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCircleCiRestApiV2ContextApi("/webhook/{webhook-id}"),
            [new TemplateParam("webhook-id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookInfo>(),
            UpdateWebhookError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
