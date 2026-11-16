using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.WebhooksApi;

namespace FinixApiReference.Api;

/// <summary>
/// Webhooks let you set up integrations that subscribe to automated notifications (events) on the Finix API. When an enabled event occurs, Finix sends an HTTP POST payload to the <c>Webhook</c>'s configured URL.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/additional-resources/developers/webhooks">Webhooks</see>
/// - <see href="/additional-resources/developers/webhooks/integrating-into-webhooks">Integrating Webhooks</see>
/// - <see href="/additional-resources/developers/webhooks/webhook-events">Webhook Events</see>
/// </para>
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
    /// Create a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Webhook</c> to receive webhook events for specified entities (e.g., <c>transfer</c>, <c>merchant</c>) to a URL provided by you. When an enabled event occurs, Finix sends a POST request to this URL with the webhook event payload.
    /// <para>
    /// {% admonition type="info" %}
    /// The response includes a <c>secret_signing_key</c>. Store this value securely. It is used to verify that incoming payloads were sent by Finix.
    /// {% /admonition %}
    /// </para>
    /// <para>
    /// <b>Authentication</b>
    /// </para>
    /// <para>
    /// Set <c>authentication.type</c> to control how Finix authenticates requests to your endpoint:
    /// - <c>NONE</c> (default) — No authentication header is sent
    /// - <c>BASIC</c> — Provide <c>authentication.basic.username</c> and <c>authentication.basic.password</c>
    /// - <c>BEARER</c> — Provide <c>authentication.bearer.token</c>
    /// </para>
    /// <para>
    /// To learn how to add webhook authentication, see <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#creating-authenticated-webhooks">Creating Authenticated Webhooks</see>.
    /// </para>
    /// <para>
    /// <b>Event Filtering</b>
    /// </para>
    /// <para>
    /// By default, a new <c>Webhook</c> subscribes to a standard set of events. Include <c>enabled_events</c> to override the default set of events and receive only specific entity/type combinations. See <see href="/additional-resources/developers/webhooks/webhook-events">Webhook Events</see> for supported entities and event types.
    /// </para>
    /// </remarks>
    public Task<Webhook> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Webhook>(),
            CreateWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Webhook</c>.
    /// </remarks>
    public Task<Webhook> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{webhook_id}"),
            [new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Webhook>(),
            GetWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListWebhooks"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Webhook</c> resources.
    /// </remarks>
    public Task<ListWebhooks> ListWebhooks(ListWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListWebhooks>(),
            ListWebhooksError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing <c>Webhook</c> to:
    ///   - Enable or disable a <c>Webhook</c>. Disabled webhooks stop receiving events at the configured URL.
    ///   - Add <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#creating-authenticated-webhooks">authentication to a Webhook</see>
    ///   - <see href="/additional-resources/developers/webhooks/integrating-into-webhooks#filtering-webhooks">Override default event filters</see> by specifying the list of events you are interested in receiving
    /// </remarks>
    public Task<Webhook> UpdateWebhook(UpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{webhook_id}"),
            [new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Webhook>(),
            UpdateWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
