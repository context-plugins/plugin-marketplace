using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Models;
using Postscript.Requests.WebhooksApi;

namespace Postscript.Api;

/// <summary>
/// Create, read, update and delete webhook subscriptions; fetch the signing token, sample payloads and test deliveries.
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
    /// Create Webhook Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookSubscriptionError"/> when the server returns an error response.</exception>
    public Task<JsonElement> CreateWebhookSubscription(CreateWebhookSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JsonElement>(),
            CreateWebhookSubscriptionError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Webhook Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookSubscriptionError"/> when the server returns an error response.</exception>
    public Task<object> DeleteWebhookSubscription(DeleteWebhookSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteWebhookSubscriptionError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Example Event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2WebhooksExampleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExampleEventError"/> when the server returns an error response.</exception>
    public Task<ApiV2WebhooksExampleResponse> ExampleEvent(ExampleEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/example"),
            [],
            [new Param("event", request.Event)],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2WebhooksExampleResponse>(),
            ExampleEventError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Webhook Signing Token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2WebhooksTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookSigningTokenError"/> when the server returns an error response.</exception>
    public Task<ApiV2WebhooksTokenResponse> GetWebhookSigningToken(GetWebhookSigningTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/token"),
            [],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2WebhooksTokenResponse>(),
            GetWebhookSigningTokenError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Webhook Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookSubscriptionError"/> when the server returns an error response.</exception>
    public Task<JsonElement> GetWebhookSubscription(GetWebhookSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JsonElement>(),
            GetWebhookSubscriptionError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Webhook Subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhookSubscriptionsError"/> when the server returns an error response.</exception>
    public Task<JsonElement> ListWebhookSubscriptions(ListWebhookSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks"),
            [],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JsonElement>(),
            ListWebhookSubscriptionsError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test Shop Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2WebhooksTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestShopWebhookError"/> when the server returns an error response.</exception>
    public Task<ApiV2WebhooksTestResponse> TestShopWebhook(TestShopWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/test"),
            [],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2WebhooksTestResponse>(),
            TestShopWebhookError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Webhook Subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookSubscriptionError"/> when the server returns an error response.</exception>
    public Task<JsonElement> UpdateWebhookSubscription(UpdateWebhookSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/webhooks/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JsonElement>(),
            UpdateWebhookSubscriptionError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
