using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.PaymentInstrumentAssociations;

namespace FinixApiReference.Api;

/// <summary>
/// In Finix, <c>Payment Instruments</c> are tied to the owner of that account. For example, <c>Payment Instruments</c> tied to buyer will be the cards used for purchases while <c>Payment Instruments</c> tied to a <c>Merchant</c> are the bank accounts where they receive settlements.
/// <para>
/// Therefore when billing events occur that are tied to a buyer's <c>Payment Instrument</c> (e.g. enrolling in account updater, using Plaid for tokenization, etc) Finix cannot automatically map those fees to a specific <c>Merchant</c>. By default, these costs are instead charged to your <c>Application</c> (e.g. the Platform, Marketplace, Vertical Saas owner's account) and will be deducted from your residual. If you wish to monetize these offerings or pass the fees on to your <c>Merchant</c> you must explicitly link the buyers <c>Payment Instrument</c> to a <c>Merchant</c> resource using the <c>Payment Instrument Association</c>
/// </para>
/// </summary>
public sealed class PaymentInstrumentAssociations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentInstrumentAssociations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Payment Instrument Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentInstrumentAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Payment Instrument Association</c> to associate a <c>Payment Instrument</c> with a <c>Merchant</c> for fee assignment purposes.
    /// </remarks>
    public Task<PaymentInstrumentAssociation> CreatePaymentInstrumentAssociation(CreatePaymentInstrumentAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instrument_associations"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentAssociation>(),
            CreatePaymentInstrumentAssociationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Payment Instrument Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentInstrumentAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Payment Instrument Association</c>.
    /// </remarks>
    public Task<PaymentInstrumentAssociation> GetPaymentInstrumentAssociation(GetPaymentInstrumentAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instrument_associations/{payment_instrument_association_id}"),
            [new TemplateParam("payment_instrument_association_id", request.PaymentInstrumentAssociationId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentInstrumentAssociation>(),
            GetPaymentInstrumentAssociationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Payment Instrument Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPaymentInstrumentAssociations"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentInstrumentAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Payment Instrument Association</c> resources.
    /// </remarks>
    public Task<ListPaymentInstrumentAssociations> ListPaymentInstrumentAssociations(ListPaymentInstrumentAssociationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instrument_associations"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
                new Param("merchant_id", request.MerchantId),
                new Param("payment_instrument_id", request.PaymentInstrumentId),
                new Param("application_id", request.ApplicationId),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPaymentInstrumentAssociations>(),
            ListPaymentInstrumentAssociationsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Payment Instrument Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentAssociation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePaymentInstrumentAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the <c>tags</c> of an existing <c>Payment Instrument Association</c>.
    /// </remarks>
    public Task<PaymentInstrumentAssociation> UpdatePaymentInstrumentAssociation(UpdatePaymentInstrumentAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instrument_associations/{payment_instrument_association_id}"),
            [new TemplateParam("payment_instrument_association_id", request.PaymentInstrumentAssociationId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentAssociation>(),
            UpdatePaymentInstrumentAssociationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
