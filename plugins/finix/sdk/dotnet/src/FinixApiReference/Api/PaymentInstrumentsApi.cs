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
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Requests.PaymentInstrumentsApi;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Payment Instrument</c> resource represents the payment details of a credit card or bank account. Payment details get tokenized multiple times and each tokenization produces a unique <c>Payment Instrument</c>.
/// <para>
/// A <c>Payment Instrument</c> is associated with a single <see href="#Identities"><c>Identity</c></see>. Once a <c>Payment Instrument</c> is created, the <c>Identity</c> it's associated with can't be changed.
/// </para>
/// <para>
/// Including an address when creating a <c>Payment Instrument</c> can lower interchange on credit card transactions.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/payment-tokenization/tokenization-forms">Using Hosted Fields</see>
/// - <see href="/guides/getting-started">Getting Started</see>
/// </para>
/// </summary>
public sealed class PaymentInstrumentsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentInstrumentsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an Apple Pay Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentApplePaySession1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApplePaySessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an <c>apple_pay_session</c> to process Apple Pay transactions on the web.
    /// <para>
    /// To create an Apple Pay Session, pass the unique <c>validation_url</c> (provided by Apple) while creating an <c>apple_pay_sessions</c> resource. Finix returns a <c>merchantSession</c> object that you can use to create a payment. For more information, see <see href="/guides/online-payments/digital-wallets/apple-pay">Apple Pay</see>.
    /// </para>
    /// </remarks>
    public Task<PaymentInstrumentApplePaySession1> CreateApplePaySession(CreateApplePaySessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apple_pay_sessions"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentApplePaySession1>(),
            CreateApplePaySessionError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Payment Instrument
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreatePaymentInstrument"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentInstrumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Payment Instrument</c> resource using a card or bank account.
    /// {% admonition type="warning" name="Payment Instruments PCI Scope" %}
    /// The creation of <c>Payment Instruments</c> directly via Finix's API should only be done for testing purposes. You must use <see href="/guides/online-payments/payment-tokenization/tokenization-forms">our hosted fields</see> or the javascript client to remain out of PCI scope.
    /// {% /admonition %}
    /// </remarks>
    public Task<CreatePaymentInstrument> CreatePaymentInstrument(CreatePaymentInstrumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreatePaymentInstrument>(),
            CreatePaymentInstrumentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify CVV, AVS, and Name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentCard"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentInstrumentVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verify a <c>Payment Instrument</c> to determine CVV, AVS, and name verification results.
    /// <para>
    /// {% admonition type="warning" name="PCI Scope Restriction" %}
    /// CVV submission is only available to PCI-compliant merchants. Non-PCI customers should not collect and pass CVV in this request.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<PaymentInstrumentCard> CreatePaymentInstrumentVerification(CreatePaymentInstrumentVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments/{payment_instrument_id_verify}"),
            [new TemplateParam("payment_instrument_id_verify", request.PaymentInstrumentIdVerify)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentCard>(),
            CreatePaymentInstrumentVerificationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify Push-to-Card Eligibility
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentVerification"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentInstrumentVerificationPushToCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Determine Push To Card eligibility for <see href="/guides/payouts/card-payouts">Push To Card</see> customers.
    /// <para>
    /// Additionally, the cardholder's name is verified with the issuing bank, and the result is shown in <c>name_verification_results</c>. This applies to Visa and Mastercard.
    /// </para>
    /// </remarks>
    public Task<PaymentInstrumentVerification> CreatePaymentInstrumentVerificationPushToCard(CreatePaymentInstrumentVerificationPushToCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments/{payment_instrument_id_verify}/verifications"),
            [new TemplateParam("payment_instrument_id_verify", request.PaymentInstrumentIdVerify)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentVerification>(),
            CreatePaymentInstrumentVerificationPushToCardError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Payment Instrument
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentInstrumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Payment Instrument</c>.
    /// </remarks>
    public Task<PaymentInstrumentsResponse> GetPaymentInstrument(GetPaymentInstrumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments/{payment_instrument_id}"),
            [new TemplateParam("payment_instrument_id", request.PaymentInstrumentId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentInstrumentsResponse>(),
            GetPaymentInstrumentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Instrument History Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListInstrumentHistoryEntries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListInstrumentHistoryEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Whenever a stored payment card's details are updated, an <c>Instrument History Entry</c> is created. Use this endpoint to retrieve a list of <c>Instrument History Entries</c> for a specific <c>Payment Instrument</c>.
    /// </remarks>
    public Task<ListInstrumentHistoryEntries> ListInstrumentHistoryEntries(ListInstrumentHistoryEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments/{payment_instrument_id}/instrument_history"),
            [new TemplateParam("payment_instrument_id", request.PaymentInstrumentId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListInstrumentHistoryEntries>(),
            ListInstrumentHistoryEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Payment Instruments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPaymentInstruments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentInstrumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Payment Instrument</c> resources.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters.</see>
    /// </para>
    /// <para>
    /// {% admonition type="info" %}
    /// If no query parameters are specified in the request the API automatically limits the response to records from the last 30 days. You can request older data by passing an explicit created_at.lte filter.
    /// {% /admonition %}
    /// </para>
    /// </remarks>
    public Task<ListPaymentInstruments> ListPaymentInstruments(ListPaymentInstrumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("account_last4", request.AccountLast4),
                new Param("account_routing_number", request.AccountRoutingNumber),
                new Param("bin", request.Bin),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("expiration_month", request.ExpirationMonth),
                new Param("expiration_year", request.ExpirationYear),
                new Param("id", request.Id),
                new Param("last4", request.Last4),
                new Param("limit", request.Limit),
                new Param("name", request.Name),
                new Param("owner_identity_id", request.OwnerIdentityId),
                new Param("type", request.Type),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPaymentInstruments>(),
            ListPaymentInstrumentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Payment Instrument
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentInstrumentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePaymentInstrumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a <c>Payment Instrument</c> to:
    /// - Change the <b>billing address</b> in case the account holder moved (<c>instrument_type</c>:<b>PAYMENT_CARD</b> only).
    /// - Disable the <c>Payment Instrument</c> resource so it can't be used in requests.
    /// - Update the <c>name</c> on the <c>Payment Instrument</c>.
    /// - Change the <c>tags</c>.
    /// - Enable or disable <b>Account Updater</b>.
    /// - Enable or disable <b>Network Tokens</b>.
    /// - Update the <b>expiration date</b> (<c>instrument_type</c>:<b>PAYMENT_CARD</b> only).
    /// - Verify a <see href="/guides/online-payments/bank-payments/microdeposit-verification">Microdeposit</see> code (<c>instrument_type: BANK_ACCOUNT</c> only).
    /// </remarks>
    public Task<PaymentInstrumentsResponse1> UpdatePaymentInstrument(UpdatePaymentInstrumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payment_instruments/{payment_instrument_id}"),
            [new TemplateParam("payment_instrument_id", request.PaymentInstrumentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentInstrumentsResponse1>(),
            UpdatePaymentInstrumentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
