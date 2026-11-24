using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fellow.Core;
using Fellow.Core.ErrorResponse;
using Fellow.Core.Exceptions;
using Fellow.Core.Models;
using Fellow.Core.Request;
using Fellow.Core.Response;
using Fellow.Models;
using Fellow.Requests.WebhooksApi;

namespace Fellow.Api;

/// <summary>
/// Create and manage webhook endpoints to receive real-time notifications when events occur in your Fellow workspace.
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
    /// Create Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new webhook endpoint.
    /// <para>
    /// Creates a webhook that will receive HTTP POST requests when subscribed events occur.
    /// The webhook will be associated with the authenticated user.
    /// </para>
    /// <para>
    /// Set <c>scope</c> to <c>workspace</c> to create an account-wide webhook instead, which receives every
    /// matching event in the account and is delivered once per event rather than once per attendee.
    /// <b>Super Admin Access Required</b> for that value: a key acting through <c>X-On-Behalf-Of</c> cannot
    /// create one, because impersonation drops privileged access.
    /// </para>
    /// </remarks>
    public Task<WebhookCreateResponse> AppsDeveloperApiApiCreateWebhook(AppsDeveloperApiApiCreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookCreateResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a webhook endpoint by its ID.
    /// <para>
    /// An account-wide webhook is deleted through this same endpoint, and needs a privileged key:
    /// without one its id reads as not found.
    /// </para>
    /// </remarks>
    public Task<WebhookDeleteResponse> AppsDeveloperApiApiDeleteWebhook(AppsDeveloperApiApiDeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook/{webhook_id}"),
            [new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookDeleteResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a webhook by its ID.
    /// </remarks>
    public Task<WebhookResponse> AppsDeveloperApiApiGetWebhookById(AppsDeveloperApiApiGetWebhookByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook/{webhook_id}"),
            [new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List webhooks with optional filters and pagination.
    /// <para>
    /// Query Parameters:
    /// - page_size: Number of results per page (optional, default: 20, max: 50)
    /// - cursor: Pagination cursor for next page (optional)
    /// - filters: JSON-encoded WebhookFilters (optional)
    /// Example: ?filters={"status":"active","created_at_start":"2024-01-01"}
    /// </para>
    /// <para>
    /// Returns a list of webhooks for the authenticated user. Privileged access
    /// allows listing all webhooks for the account.
    /// </para>
    /// </remarks>
    public Task<WebhooksListResponse> AppsDeveloperApiApiListWebhooks(AppsDeveloperApiApiListWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhooks"),
            [],
            [
                new Param("page_size", request.PageSize),
                new Param("cursor", request.Cursor),
                new Param("filters", request.Filters),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksListResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing webhook endpoint.
    /// <para>
    /// Allows partial updates - only provided fields will be modified.
    /// The webhook must belong to the authenticated user (or account for privileged access).
    /// </para>
    /// <para>
    /// An account-wide webhook is updated through this same endpoint, and needs a privileged key:
    /// without one its id reads as not found, the same answer as another user's webhook.
    /// </para>
    /// <para>
    /// <c>scope</c> cannot be changed after creation, and is ignored here: a webhook's scope decides
    /// which Svix application its endpoint lives in, so converting one means deleting and
    /// recreating it.
    /// </para>
    /// </remarks>
    public Task<WebhookResponse> AppsDeveloperApiApiUpdateWebhook(AppsDeveloperApiApiUpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook/{webhook_id}"),
            [new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);
}
