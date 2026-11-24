using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.WebhooksApi;

namespace UiPath.Api;

/// <summary>
/// Manage webhook subscriptions for Orchestrator event notifications
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
    /// UiPath Create a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Webhook"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification, whether to subscribe to all events or specific event types, and whether to allow insecure SSL.
    /// </remarks>
    public Task<Webhook> CreateWebhook(CreateWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Webhooks"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Webhook>(),
            CreateWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Delete a Webhook
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL will no longer receive event notifications from Orchestrator.
    /// </remarks>
    public Task DeleteWebhook(DeleteWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Webhooks({key})"),
            [new TemplateParam("key", request.Key)],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWebhookError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get Available Webhook Event Types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWebhookEventTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as job.faulted or queueItem.transactionCompleted.
    /// </remarks>
    public Task<OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse> GetWebhookEventTypes(GetWebhookEventTypesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()"),
            [],
            [],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse>(),
            GetWebhookEventTypesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Webhooks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataWebhookCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWebhooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the events to subscribe to, and an HMAC secret for payload signature verification.
    /// </remarks>
    public Task<ODataWebhookCollection> ListWebhooks(ListWebhooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/Webhooks"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataWebhookCollection>(),
            ListWebhooksError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
