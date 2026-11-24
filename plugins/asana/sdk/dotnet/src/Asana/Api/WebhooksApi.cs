using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.WebhooksApi;

namespace Asana.Api;

/// <summary>
/// Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).
/// <para>
/// For a more detailed explanation of webhooks see the overview of webhooks.
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
    /// Establish a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Establishing a webhook is a two-part process. First, a simple HTTP POST
    /// request initiates the creation similar to creating any other resource.
    /// <para>
    /// Next, in the middle of this request comes the confirmation handshake.
    /// When a webhook is created, we will send a test POST to the target with an
    /// <c>X-Hook-Secret</c> header. The target must respond with a <c>200 OK</c> or `204
    /// No Content<c> and a matching </c>X-Hook-Secret` header to confirm that this
    /// webhook subscription is indeed expected. We strongly recommend storing
    /// this secret to be used to verify future webhook event signatures.
    /// </para>
    /// <para>
    /// The POST request to create the webhook will then return with the status
    /// of the request. If you do not acknowledge the webhook’s confirmation
    /// handshake it will fail to setup, and you will receive an error in
    /// response to your attempt to create it. This means you need to be able to
    /// receive and complete the webhook *while* the POST request is in-flight
    /// (in other words, have a server that can handle requests asynchronously).
    /// </para>
    /// <para>
    /// Invalid hostnames like localhost will recieve a 403 Forbidden status code.
    /// </para>
    /// <code>
    /// # Request
    /// curl -H "Authorization: Bearer " \
    /// -X POST https://app.asana.com/api/1.0/webhooks \
    /// -d "resource=8675309" \
    /// -d "target=https://example.com/receive-webhook/7654"
    /// </code>
    /// <code>
    /// # Handshake sent to https://example.com/
    /// POST /receive-webhook/7654
    /// X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
    /// </code>
    /// <code>
    /// # Handshake response sent by example.com
    /// HTTP/1.1 200
    /// X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
    /// </code>
    /// <code>
    /// # Response
    /// HTTP/1.1 201
    /// {
    /// "data": {
    /// "gid": "43214",
    /// "resource": {
    /// "gid": "8675309",
    /// "name": "Bugs"
    /// },
    /// "target": "https://example.com/receive-webhook/7654",
    /// "active": false,
    /// "last_success_at": null,
    /// "last_failure_at": null,
    /// "last_failure_content": null
    /// }
    /// }
    /// </code>
    /// </remarks>
    public Task<WebhooksResponse1> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhooksResponse1>(),
            CreateWebhookError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.
    /// </remarks>
    public Task<WebhooksResponse4> DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{webhook_gid}"),
            [new TemplateParam("webhook_gid", request.WebhookGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksResponse4>(),
            DeleteWebhookError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for the given webhook.
    /// </remarks>
    public Task<WebhooksResponse1> GetWebhook(GetWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{webhook_gid}"),
            [new TemplateParam("webhook_gid", request.WebhookGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksResponse1>(),
            GetWebhookError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get multiple webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.
    /// </remarks>
    public Task<WebhooksResponse> GetWebhooks(GetWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks"),
            [],
            [
                new Param("workspace", request.Workspace),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("resource", request.Resource),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhooksResponse>(),
            GetWebhooksError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhooksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous <c>filters</c> array will be completely overwritten by the <c>filters</c> sent in the PUT request.
    /// </remarks>
    public Task<WebhooksResponse1> UpdateWebhook(UpdateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/webhooks/{webhook_gid}"),
            [new TemplateParam("webhook_gid", request.WebhookGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WebhooksResponse1>(),
            UpdateWebhookError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
