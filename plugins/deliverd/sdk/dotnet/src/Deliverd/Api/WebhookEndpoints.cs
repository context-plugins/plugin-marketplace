using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.WebhookEndpoints;

namespace Deliverd.Api;

public sealed class WebhookEndpoints
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebhookEndpoints(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Remove a webhook endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1WebhookEndpointsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Its delivery log goes with it. <c>PATCH</c> with <c>{"enabled": false}</c> stops deliveries and keeps both.
    /// </remarks>
    public Task DeleteApiV1WebhookEndpointsById(DeleteApiV1WebhookEndpointsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteApiV1WebhookEndpointsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhook endpoints
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WebhookEndpointsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1WebhookEndpointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The organisation's endpoints, newest first, with their delivery health. Never their signing secrets — those are returned once, when an endpoint is created. Owners and administrators only; an agent key is refused.
    /// </remarks>
    public Task<ApiV1WebhookEndpointsResponse> GetApiV1WebhookEndpoints(GetApiV1WebhookEndpointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints"),
            [],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WebhookEndpointsResponse>(),
            GetApiV1WebhookEndpointsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One webhook endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WebhookEndpointsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1WebhookEndpointsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// With its delivery health. Never its signing secret.
    /// </remarks>
    public Task<ApiV1WebhookEndpointsResponse2> GetApiV1WebhookEndpointsById(GetApiV1WebhookEndpointsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WebhookEndpointsResponse2>(),
            GetApiV1WebhookEndpointsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Change a webhook endpoint, or turn it off and on
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WebhookEndpointsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchApiV1WebhookEndpointsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Only the fields sent change; at least one is required. Turning an endpoint back on clears its run of failures, as the console's switch does. The signing secret cannot be changed: delete the endpoint and add it again for a new one.
    /// </remarks>
    public Task<ApiV1WebhookEndpointsResponse2> PatchApiV1WebhookEndpointsById(PatchApiV1WebhookEndpointsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1WebhookEndpointsResponse2>(),
            PatchApiV1WebhookEndpointsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a webhook endpoint
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WebhookEndpointsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1WebhookEndpointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every event the endpoint subscribes to then arrives as a signed POST. <c>events</c> empty or absent means every event, including ones added later, except the opt-in ones (the gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which arrive only when named.
    /// <para>
    /// The response carries <b><c>secret</c>, on this response only</b>. No other call returns it and it cannot be retrieved afterwards; delete the endpoint and add it again if it is lost. A retry carrying the same <c>Idempotency-Key</c> gets this same response back.
    /// </para>
    /// </remarks>
    public Task<ApiV1WebhookEndpointsResponse1> PostApiV1WebhookEndpoints(PostApiV1WebhookEndpointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1WebhookEndpointsResponse1>(),
            PostApiV1WebhookEndpointsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a webhook endpoint one test event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WebhookEndpointsTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1WebhookEndpointsByIdTestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Posts the event now, with the same signature and headers as a real delivery, <c>"test": true</c> beside <c>event</c> and obviously fake ids in <c>data</c>. One shot: never retried, and never counted toward the failures that switch an endpoint off. <c>delivered: false</c> is an answer about the endpoint, not a failure of this call. The body is optional.
    /// </remarks>
    public Task<ApiV1WebhookEndpointsTestResponse> PostApiV1WebhookEndpointsByIdTest(PostApiV1WebhookEndpointsByIdTestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/webhook-endpoints/{id}/test"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1WebhookEndpointsTestResponse>(),
            PostApiV1WebhookEndpointsByIdTestError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
