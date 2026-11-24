using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.WebhooksApi;

namespace Givebutter.Api;

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
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksDestroyError"/> when the server returns an error response.</exception>
    public Task WebhooksDestroy(WebhooksDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{webhook}"),
            [new TemplateParam("webhook", request.Webhook)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            WebhooksDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all webhooks
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1WebhooksResponse> WebhooksIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WebhooksResponse>(),
            RawErrorResponse.Instance,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksShowError"/> when the server returns an error response.</exception>
    public Task<WebhookResource> WebhooksShow(WebhooksShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{webhook}"),
            [new TemplateParam("webhook", request.Webhook)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookResource>(),
            WebhooksShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksStoreError"/> when the server returns an error response.</exception>
    public Task<WebhookResource> WebhooksStore(WebhooksStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResource>(),
            WebhooksStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksUpdateError"/> when the server returns an error response.</exception>
    public Task<WebhookResource> WebhooksUpdate(WebhooksUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{webhook}"),
            [new TemplateParam("webhook", request.Webhook)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookResource>(),
            WebhooksUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
