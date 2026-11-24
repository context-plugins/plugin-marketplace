using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fillo.Core;
using Fillo.Core.Exceptions;
using Fillo.Core.Models;
using Fillo.Core.Request;
using Fillo.Core.Response;
using Fillo.Errors;
using Fillo.Models;
using Fillo.Requests.WebhooksApi;

namespace Fillo.Api;

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
    /// Add a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookCreated"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFormWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Register a signed webhook with optional receiver authentication. The response includes the Fillo signing secret ONCE; neither it nor a receiver credential is retrievable again. Delivery URLs are SSRF-guarded and must be http(s). Scope: webhooks:manage.
    /// </remarks>
    public Task<WebhookCreated> CreateFormWebhook(CreateFormWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/webhooks"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhookCreated>(),
            CreateFormWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsWebhooksResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFormWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove one of the form's signed webhooks. Scope: webhooks:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsWebhooksResponse2> DeleteFormWebhook(DeleteFormWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            [new TemplateParam("form", request.Form), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageFormsWebhooksResponse2>(),
            DeleteFormWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a form's webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsWebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFormWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The form's signed webhooks (Zapier subscriptions excluded). Signing and receiver-authentication secrets are never returned. Scope: webhooks:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsWebhooksResponse> ListFormWebhooks(ListFormWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/webhooks"),
            [new TemplateParam("form", request.Form)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ManageFormsWebhooksResponse>(),
            ListFormWebhooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsWebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFormWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Turn draft.abandoned delivery on or off, replace receiver authentication, or remove it with authentication.type none. Receiver credentials remain write-only. Scope: webhooks:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsWebhooksResponse1> UpdateFormWebhook(UpdateFormWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/webhooks/{id}"),
            [new TemplateParam("form", request.Form), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsWebhooksResponse1>(),
            UpdateFormWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
