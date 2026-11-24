using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.InboundDestinations;

namespace DidLogic.Api;

public sealed class InboundDestinations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal InboundDestinations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PurchasesDestinationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasesDestinationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a new inbound destination for a DID number.
    /// <para>
    /// <b>Destination Types:</b>
    /// - SIP addresses (e.g., <c>sip:user@domain.com</c>)
    /// - Phone numbers (e.g., <c>18005551234</c>)
    /// - Extensions (SIP accounts created within didlogic)
    /// </para>
    /// <para>
    /// <b>Parameters:</b>
    /// - <c>destination</c> - The forwarding target (SIP URI or phone number)
    /// - <c>dialing_type</c> - Dialing mode: <c>sequence</c>, <c>ring_all</c> or <c>random</c>
    /// - <c>callhunt</c> - Legacy two-state mirror of <c>dialing_type</c> (boolean); ignored when <c>dialing_type</c> is sent
    /// - <c>active</c> - Enable/disable this destination (boolean)
    /// - <c>transport</c> - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone,
    /// 12 = WebSocket)
    /// </para>
    /// <para>
    /// <c>transport: 12</c> streams the call to a WebSocket endpoint of your own instead of
    /// ringing a phone or a SIP device, and <c>destination</c> is then its public <c>wss://</c>
    /// URL. It is available only to accounts enabled for voice streaming; any other
    /// account is refused with <c>422</c>. The endpoint has to speak our protocol — see
    /// WebSocket Calls.
    /// </para>
    /// <para>
    /// <c>did_destination.id</c> feeds purchases_destinations_update and purchases_destinations_destroy as <c>id</c>.
    /// Rows: purchases_destinations_index.
    /// </para>
    /// </remarks>
    public Task<ApiV1PurchasesDestinationsResponse1> PurchasesDestinationsCreate(PurchasesDestinationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/purchases/{purchase_id}/destinations"),
            [new TemplateParam("purchase_id", request.PurchaseId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PurchasesDestinationsResponse1>(),
            PurchasesDestinationsCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasesDestinationsDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing inbound destination from a DID number.
    /// <para>
    /// <b>Important:</b>
    /// - Destination is permanently removed from the DID configuration
    /// - Deletion is logged for audit purposes
    /// </para>
    /// </remarks>
    public Task PurchasesDestinationsDestroy(PurchasesDestinationsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            [new TemplateParam("purchase_id", request.PurchaseId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PurchasesDestinationsDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List destinations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PurchasesDestinationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasesDestinationsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the list of inbound destinations configured for a specific DID number.
    /// <para>
    /// <b>Destinations</b> define where incoming calls to a DID should be routed (SIP addresses, phone numbers, etc.).
    /// </para>
    /// <para>
    /// <b>Features:</b>
    /// - Returns only current (non-deleted) destinations
    /// - Each destination includes active status and its dialing mode (<c>dialing_type</c>, with the legacy <c>callhunt</c> mirror)
    /// </para>
    /// <para>
    /// <c>destination[].id</c> feeds purchases_destinations_update and purchases_destinations_destroy as <c>id</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1PurchasesDestinationsResponse> PurchasesDestinationsIndex(PurchasesDestinationsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/purchases/{purchase_id}/destinations"),
            [new TemplateParam("purchase_id", request.PurchaseId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PurchasesDestinationsResponse>(),
            PurchasesDestinationsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PurchasesDestinationsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasesDestinationsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing inbound destination for a DID number.
    /// <para>
    /// <b>Updatable Fields:</b>
    /// - <c>dialing_type</c> - Dialing mode: <c>sequence</c>, <c>ring_all</c> or <c>random</c>
    /// - <c>callhunt</c> - Legacy two-state mirror of <c>dialing_type</c>; ignored when <c>dialing_type</c> is sent
    /// - <c>active</c> - Enable/disable this destination
    /// </para>
    /// <para>
    /// <b>Note:</b> The destination address and transport protocol cannot be changed. To change these, delete and create a new destination.
    /// </para>
    /// </remarks>
    public Task<ApiV1PurchasesDestinationsResponse2> PurchasesDestinationsUpdate(PurchasesDestinationsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
            [new TemplateParam("purchase_id", request.PurchaseId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PurchasesDestinationsResponse2>(),
            PurchasesDestinationsUpdateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
