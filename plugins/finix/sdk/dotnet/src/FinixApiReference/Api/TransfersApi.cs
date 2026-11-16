using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.TransfersApi;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Transfer</c> represents any flow of funds either to or from a <c>Payment Instrument</c>. All payments in Finix are represented by a <c>Transfer</c>.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/online-payments-quickstart">Online Payments Quickstart</see>
/// - <see href="/guides/online-payments/payment-features/level-2-level-3-processing/">Level 2 and 3 Processing</see>
/// - <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>
/// - <see href="/guides/online-payments/payment-features/buyer-charges/">Buyer Charges</see>,
/// - <see href="/guides/online-payments/bank-payments/ach-direct-debits">ACH (eCheck) Direct Debit</see>
/// </para>
/// </summary>
public sealed class TransfersApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TransfersApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Transfer</c>.
    /// </remarks>
    public Task<Transfer> CreateTransfer(CreateTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Transfer>(),
            CreateTransferError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refund or Reverse a Transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTransferReversalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reverse a transfer with a <c>type</c> of <c>DEBIT</c>. This reversal creates a new <c>Transfer</c> resource with a <c>type</c> of <c>REVERSAL</c>.
    /// <para>
    /// Related Guides: <see href="/guides/after-the-payment/refunds">Refunding Payments</see>
    /// </para>
    /// </remarks>
    public Task<Transfer> CreateTransferReversal(CreateTransferReversalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{transfer_id}/reversals"),
            [new TemplateParam("transfer_id", request.TransferId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Transfer>(),
            CreateTransferReversalError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a <c>Transfer</c>.
    /// </remarks>
    public Task<Transfer> GetTransfer(GetTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{transfer_id}"),
            [new TemplateParam("transfer_id", request.TransferId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Transfer>(),
            GetTransferError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Transfer Reversals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransfersReversalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransferReversalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of reversals for a <c>Transfer</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<TransfersReversalsResponse> ListTransferReversals(ListTransferReversalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{transfer_id}/reversals"),
            [new TemplateParam("transfer_id", request.TransferId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransfersReversalsResponse>(),
            ListTransferReversalsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTransfers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Transfers</c>.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters</see>.
    /// </para>
    /// <para>
    /// {% admonition type="info" %}
    /// If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<ListTransfers> ListTransfers(ListTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("amount", request.Amount),
                new Param("bank_return_reason_code", request.BankReturnReasonCode),
                new Param("before_cursor", request.BeforeCursor),
                new Param("buyer_business_name", request.BuyerBusinessName),
                new Param("buyer_business_name.like", request.BuyerBusinessNameLike),
                new Param("buyer_doing_business_as", request.BuyerDoingBusinessAs),
                new Param("buyer_doing_business_as.like", request.BuyerDoingBusinessAsLike),
                new Param("buyer_identity_first_name", request.BuyerIdentityFirstName),
                new Param("buyer_identity_first_name.like", request.BuyerIdentityFirstNameLike),
                new Param("buyer_identity_id", request.BuyerIdentityId),
                new Param("buyer_identity_last_name", request.BuyerIdentityLastName),
                new Param("buyer_identity_last_name.like", request.BuyerIdentityLastNameLike),
                new Param("buyer_identity_name", request.BuyerIdentityName),
                new Param("buyer_identity_name.like", request.BuyerIdentityNameLike),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("currency", request.Currency),
                new Param("device", request.Device),
                new Param("id", request.Id),
                new Param("idempotency_id", request.IdempotencyId),
                new Param("instrument_account_last4", request.InstrumentAccountLast4),
                new Param("instrument_bin", request.InstrumentBin),
                new Param("instrument_brand_type", request.InstrumentBrandType),
                new Param("instrument_card_last4", request.InstrumentCardLast4),
                new Param("instrument_issuer_country", request.InstrumentIssuerCountry),
                new Param("instrument_name", request.InstrumentName),
                new Param("instrument_type", request.InstrumentType),
                new Param("limit", request.Limit),
                new Param("merchant", request.Merchant),
                new Param("merchant_identity_id", request.MerchantIdentityId),
                new Param("merchant_identity_name", request.MerchantIdentityName),
                new Param("merchant_mid", request.MerchantMid),
                new Param("merchant_processor_id", request.MerchantProcessorId),
                new Param("parent_transfer_id", request.ParentTransferId),
                new Param("ready_to_settle_at.gte", request.ReadyToSettleAtGte?.ToIso8601()),
                new Param("ready_to_settle_at.lte", request.ReadyToSettleAtLte?.ToIso8601()),
                new Param("state", request.State),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("trace_id", request.TraceId),
                new Param("type", request.Type),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTransfers>(),
            ListTransfersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a <c>Transfer</c>.
    /// </remarks>
    public Task<Transfer> UpdateTransfer(UpdateTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfers/{transfer_id}"),
            [new TemplateParam("transfer_id", request.TransferId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Transfer>(),
            UpdateTransferError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
