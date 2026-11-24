using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.Transfers;

namespace Curlec.Api;

/// <summary>
/// Fund transfers from a merchant, payment, or order to a Linked Account (Route). Supports payment-based splits, direct on-demand transfers, settlement hold controls, and full/partial reversals. INR only, minimum ₹100. Direct transfers support idempotency via X-Transfer-Idempotency header.
/// </summary>
public sealed class Transfers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Transfers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a direct transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferRazorpayTransfersApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDirectTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header (unique to direct transfers).
    /// </remarks>
    public Task<TransferRazorpayTransfersApi> CreateDirectTransfer(CreateDirectTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers"),
            [],
            [],
            [
                new HeaderParam("X-Transfer-Idempotency", request.XTransferIdempotency),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransferRazorpayTransfersApi>(),
            CreateDirectTransferError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create transfers from a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsTransfersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTransfersFromPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred to the recipient. INR only, minimum ₹100 per transfer.
    /// </remarks>
    public Task<PaymentsTransfersResponse> CreateTransfersFromPayment(CreateTransfersFromPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}/transfers"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentsTransfersResponse>(),
            CreateTransfersFromPaymentError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferRazorpayTransfersApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific transfer by ID.
    /// </remarks>
    public Task<TransferRazorpayTransfersApi> FetchTransfer(FetchTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransferRazorpayTransfersApi>(),
            FetchTransferError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch transfers for a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsTransfersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchTransfersForPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all transfers created from a specific payment.
    /// </remarks>
    public Task<PaymentsTransfersResponse> FetchTransfersForPayment(FetchTransfersForPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}/transfers"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentsTransfersResponse>(),
            FetchTransfersForPaymentError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reversals for a transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransfersReversalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReversalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all reversals for a specific transfer.
    /// </remarks>
    public Task<TransfersReversalsResponse> ListReversals(ListReversalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{id}/reversals"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransfersReversalsResponse>(),
            ListReversalsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransfersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a specific settlement. Use expand[]=recipient_settlement to include settlement details.
    /// </remarks>
    public Task<TransfersResponse> ListTransfers(ListTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
                new Param("recipient_settlement_id", request.RecipientSettlementId),
                new Param("expand[]", request.Expand),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransfersResponse>(),
            ListTransfersError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify settlement hold on a transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferRazorpayTransfersApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModifyTransferSettlementHoldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement, on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.
    /// </remarks>
    public Task<TransferRazorpayTransfersApi> ModifyTransferSettlementHold(ModifyTransferSettlementHoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransferRazorpayTransfersApi>(),
            ModifyTransferSettlementHoldError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse a transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Reversal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReverseTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.
    /// </remarks>
    public Task<Reversal> ReverseTransfer(ReverseTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{id}/reversals"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Reversal>(),
            ReverseTransferError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
