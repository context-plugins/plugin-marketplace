using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.PartnerWebhooks;

namespace Curlec.Api;

/// <summary>
/// Configure webhooks for sub-merchant accounts to receive payment events. Maximum 30 per account.
/// </summary>
public sealed class PartnerWebhooks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerWebhooks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a webhook for a sub-merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PartnerWebhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePartnerWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<PartnerWebhook> CreatePartnerWebhook(CreatePartnerWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/webhooks"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PartnerWebhook>(),
            CreatePartnerWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePartnerWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth access_token.
    /// </remarks>
    public Task<object> DeletePartnerWebhook(DeletePartnerWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            [new TemplateParam("account_id", request.AccountId), new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeletePartnerWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a webhook by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PartnerWebhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPartnerWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<PartnerWebhook> FetchPartnerWebhook(FetchPartnerWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            [new TemplateParam("account_id", request.AccountId), new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PartnerWebhook>(),
            FetchPartnerWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks for a sub-merchant
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2AccountsWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPartnerWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<V2AccountsWebhooksResponse> ListPartnerWebhooks(ListPartnerWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/webhooks"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2AccountsWebhooksResponse>(),
            ListPartnerWebhooksError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PartnerWebhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePartnerWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<PartnerWebhook> UpdatePartnerWebhook(UpdatePartnerWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            [new TemplateParam("account_id", request.AccountId), new TemplateParam("webhook_id", request.WebhookId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PartnerWebhook>(),
            UpdatePartnerWebhookError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
