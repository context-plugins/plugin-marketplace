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
using Fillo.Requests.Deliveries;

namespace Fillo.Api;

public sealed class Deliveries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Deliveries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get delivery health and recent activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeliveryHealth"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFormDeliveriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per-destination delivery health plus the bounded recent-delivery list — exactly what the form's Activity page shows. Counts cover the telemetry retention window, not all time. Destinations are NAMED rather than spelled out: a webhook's target URL is the credential that authorizes posting to it, so a connector-owned hook is labelled by its connector (“Zapier”, “n8n”) and any other webhook by its host plus a short fingerprint of its path. The dashboard's Activity page is where a signed-in member reads the full URL. Scope: responses:manage.
    /// </remarks>
    public Task<DeliveryHealth> GetFormDeliveries(GetFormDeliveriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/deliveries"),
            [new TemplateParam("form", request.Form)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeliveryHealth>(),
            GetFormDeliveriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Re-send responses to every destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsDeliveriesRedeliverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RedeliverFormResponsesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send responses to every current destination again as a new delivery. This is not a repair: receivers that are not idempotent will see duplicates, which makes it outward-facing (Tier B). Held responses are never redelivered. Scope: responses:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsDeliveriesRedeliverResponse> RedeliverFormResponses(RedeliverFormResponsesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/deliveries/redeliver"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsDeliveriesRedeliverResponse>(),
            RedeliverFormResponsesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry failed deliveries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ManageFormsDeliveriesRetryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetryFormDeliveriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Repair deliveries that failed or are overdue. Send exactly one target: <c>responseIds</c> (repair those responses' newest occurrence), <c>destinationKey</c> (one destination's backlog), <c>deliveryKind</c> + <c>deliveryId</c> (one row), or <c>all: true</c> (the form's whole failed backlog). A retry re-sends work that was already meant to go out, so it is routine (Tier A). Scope: responses:manage.
    /// </remarks>
    public Task<ApiV1ManageFormsDeliveriesRetryResponse> RetryFormDeliveries(RetryFormDeliveriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/manage/forms/{form}/deliveries/retry"),
            [new TemplateParam("form", request.Form)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ManageFormsDeliveriesRetryResponse>(),
            RetryFormDeliveriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
