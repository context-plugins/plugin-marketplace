using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Payments;

namespace Bill.Api;

public sealed class Payments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Payments(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Cancel a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel an existing payment.
    /// <para>
    /// You can cancel a payment only when the payment <c>singleStatus</c> is <c>SCHEDULED</c>. When BILL starts processing the payment, the payment <c>singleStatus</c> changes. At that point, you cannot cancel the payment. You can attempt to void the payment with <c>POST /v3/payments/{paymentId}/void</c>.
    /// </para>
    /// </remarks>
    public Task<PaymentResponseDto> CancelPayment(CancelPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/{paymentId}/cancel"),
            [new TemplateParam("paymentId", request.PaymentId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentResponseDto>(),
            CancelPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a bulk payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkPaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBulkPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a request for paying multiple bills. You can pay up to 50 bills with one <c>POST /v3/payments/bulk</c> request.
    /// <para>
    /// Bulk payments at BILL follow a set of rules.
    /// * <b>Successful response</b>: In your bulk payment request, all your bill payments must be successful for a successful response. If any bill payment is not successful, the entire request fails and none of the bills in the request are paid.
    /// * <b>You can pay multiple vendors</b>: You can pay multiple vendors with one <c>POST /v3/payments/bulk</c> request. In this case, make sure that you do not set <c>vendorId</c> in your request.
    /// * <b>You can only pay existing bills</b>: When you create a single payment with <c>POST /v3/payments</c>, you can set <c>createBill</c> as <c>true</c> in your request for creating a new bill for a vendor payment. In your bulk payment request, an existing <c>billId</c> is required for each bill to be paid.
    /// * <b>Vendors with <c>"combinePayments": true</c></b>: When you create a bulk payment for a vendor that has <c>"combinePayments": true</c>, BILL combines payments for up to 35 bills in one <c>payments</c> response object, and then combines payments for the remaining bills in a second <c>payments</c> response object.
    /// </para>
    /// <para>
    /// See Get list of vendor payment options to get details about vendor payment options and payment process dates.
    /// </para>
    /// <para>
    /// <b>Note</b>: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.
    /// </para>
    /// <para>
    /// See Payments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<BulkPaymentResponseDto> CreateBulkPayment(CreateBulkPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkPaymentResponseDto>(),
            CreateBulkPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a mass payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MassPaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMassPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request asynchronously.
    /// <para>
    /// In the response, a BILL-generated payment batch ID is available. You can track the current status of each payment in a mass payment batch with <c>GET /v3/payments/mass/{paymentBatchId}</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.
    /// </para>
    /// </remarks>
    public Task<MassPaymentResponseDto> CreateMassPayment(CreateMassPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/mass"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MassPaymentResponseDto>(),
            CreateMassPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a payment.
    /// <para>
    /// See Get list of vendor payment options to get details about vendor payment options and payment process dates.
    /// </para>
    /// <para>
    /// <b>Note</b>: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.
    /// </para>
    /// <para>
    /// See Payments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<PaymentResponseDto> CreatePayment(CreatePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentResponseDto>(),
            CreatePaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get check image data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckImageDataResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCheckImageDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an image of an existing check sent to a vendor.
    /// <para>
    /// The check image is available when the vendor bank processes the check payment. BILL checks in with the bank every 30 minutes to get the check image. The image file format is determined by the vendor bank.
    /// </para>
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the front and back images of the check.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
    /// </code>
    /// </remarks>
    public Task<CheckImageDataResponseDto> GetCheckImageData(GetCheckImageDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/{paymentId}/check-image"),
            [new TemplateParam("paymentId", request.PaymentId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckImageDataResponseDto>(),
            GetCheckImageDataError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get BILL exchange rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExchangeRateResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExchangeRateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the vendor bill currency is not <c>USD</c>, the exchange rate batch ID is required for creating a payment with <c>POST /v3/payments</c> or <c>POST /v3/payments/bulk</c>.
    /// <para>
    /// BILL maintains all <c>exchangeRate</c> values in a batch. When a batch expires, a new batch ID is generated and all <c>exchangeRate</c> values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.
    /// </para>
    /// <para>
    /// In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the <c>exchangeRateBatchId</c>, <c>expirationTime</c> indicates that you have 3 minutes remaining (with <c>POST /v3/payments</c> or <c>POST /v3/payments/bulk</c>).
    /// </para>
    /// <para>
    /// <b>Note</b>:
    /// * International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
    /// * When the vendor bill currency is not <c>USD</c>, the payment <c>processDate</c> <b>must be</b> the next US business day.
    /// </para>
    /// </remarks>
    public Task<ExchangeRateResponseDto> GetExchangeRate(GetExchangeRateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/exchange-rate"),
            [],
            [new Param("vendorId", request.VendorId), new Param("amount", request.Amount)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExchangeRateResponseDto>(),
            GetExchangeRateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get BILL exchange rates for multiple vendors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExchangeRatesResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExchangeRatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API request. When the vendor bill currency is not <c>USD</c>, the exchange rate batch ID is required for creating a payment with <c>POST /v3/payments</c> or <c>POST /v3/payments/bulk</c>.
    /// <para>
    /// BILL maintains all <c>exchangeRate</c> values in a batch. When a batch expires, a new batch ID is generated and all <c>exchangeRate</c> values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.
    /// </para>
    /// <para>
    /// In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the <c>exchangeRateBatchId</c>, <c>expirationTime</c> indicates that you have 3 minutes remaining (with <c>POST /v3/payments</c> or <c>POST /v3/payments/bulk</c>).
    /// </para>
    /// <para>
    /// <b>Note</b>:
    /// * International vendor payment information is required for you to get BILL exchange rates with this endpoint.
    /// * When the vendor bill currency is not <c>USD</c>, the payment <c>processDate</c> <b>must be</b> the next US business day.
    /// </para>
    /// </remarks>
    public Task<ExchangeRatesResponseDto> GetExchangeRates(GetExchangeRatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/exchange-rate"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExchangeRatesResponseDto>(),
            GetExchangeRatesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get mass payment status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MassPaymentDetailsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMassPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing mass payment batch.
    /// <para>
    /// In the response, you get the status of each payment in the mass payment batch. Each payment is either <c>scheduled</c>, <c>completed</c>, or <c>failed</c>. In addition, you get the <c>count</c> for the total number of payments in the mass payments batch.
    /// </para>
    /// <para>
    /// <b>Note</b>: From the list of <c>completed</c> payments in the response, BILL begins processing payments based on the payment <c>processDate</c>.
    /// </para>
    /// </remarks>
    public Task<MassPaymentDetailsResponseDto> GetMassPayment(GetMassPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/mass/{paymentBatchId}"),
            [new TemplateParam("paymentBatchId", request.PaymentBatchId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MassPaymentDetailsResponseDto>(),
            GetMassPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get payment details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing payment.
    /// </remarks>
    public Task<PaymentResponseDto> GetPayment(GetPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/{paymentId}"),
            [new TemplateParam("paymentId", request.PaymentId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentResponseDto>(),
            GetPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of vendor payment options
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentOptionsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of vendor payment options available based on the funding account options available in the signed-in user's BILL organization and on the payment methods accepted by a vendor.
    /// <para>
    /// See Vendor payment options in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<PaymentOptionsResponseDto> ListPaymentOptions(ListPaymentOptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/options"),
            [],
            [new Param("vendorId", request.VendorId), new Param("amount", request.Amount)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentOptionsResponseDto>(),
            ListPaymentOptionsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of payments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of payment objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListPaymentResponseDto> ListPayments(ListPaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPaymentResponseDto>(),
            ListPaymentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Void a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VoidPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Void an existing payment.
    /// <para>
    /// Void a bill payment that has started processing and cannot be canceled (with <c>POST /v3/payments/{paymentId}/cancel</c>). You can attempt to void payments made both with BILL (online) and outside BILL (offline).
    /// </para>
    /// <para>
    /// ### Void a payment made with BILL (online)
    /// </para>
    /// <para>
    /// In your /<c>POST /v3/payments/{paymentId}/void</c> request:
    /// * Set <c>paymentId</c> as the BILL-generated ID of the payment. The value begins with <c>stp</c>.
    /// * Set <c>type</c> as the void payment request type
    /// * Set <c>reason</c> as the reason for voiding the payment
    /// </para>
    /// <para>
    /// See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment process and timing in the production environment.
    /// </para>
    /// </remarks>
    public Task<PaymentResponseDto> VoidPayment(VoidPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/payments/{paymentId}/void"),
            [new TemplateParam("paymentId", request.PaymentId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentResponseDto>(),
            VoidPaymentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
