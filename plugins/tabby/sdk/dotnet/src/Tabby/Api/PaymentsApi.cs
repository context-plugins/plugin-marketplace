using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Tabby.Core;
using Tabby.Core.Exceptions;
using Tabby.Core.Extensions;
using Tabby.Core.Models;
using Tabby.Core.Request;
using Tabby.Core.Response;
using Tabby.Errors;
using Tabby.Models;
using Tabby.Requests.PaymentsApi;

namespace Tabby.Api;

/// <summary>
/// The core of tabby is a payments flow enabling you to handle payments at your webstore.
/// </summary>
public sealed class PaymentsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PaymentsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Close a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentClose"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClosePaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Closed is the final status of the payment. Your payment is going to be closed automatically if you capture the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it - the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this part and close the payment – it will mean that another part of the order is not going to be delivered to the customer.
    /// </remarks>
    public Task<PaymentClose> ClosePayment(ClosePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments/{id}/close"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentClose>(),
            ClosePaymentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures and Refunds objects.
    /// </remarks>
    public Task<PaymentResponse> GetPayment(GetPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentResponse>(),
            GetPaymentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List of all payments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Payments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of success payments (<c>AUTHORIZED</c> or <c>CLOSED</c>) you’ve previously created. The payments are returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate payments object, including the status, any captures and any refunds. If no more payments are available, the resulting array will be empty. Payments might be filtered by creation date.
    /// </remarks>
    public Task<Payments> GetPayments(GetPaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments"),
            [],
            [
                new Param("created_at__gte", request.CreatedAtGte?.ToDate()),
                new Param("created_at__lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("status", request.Status),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Payments>(),
            GetPaymentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Capture a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentCaptureResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostPaymentCaptureError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment will be automatically closed with full capture. If you capture partial amount, the payment will remain Authorized until the rest of the amount is captured or Close request sent.
    /// </remarks>
    public Task<PaymentCaptureResponse> PostPaymentCapture(PostPaymentCaptureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments/{id}/captures"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentCaptureResponse>(),
            PostPaymentCaptureError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refund a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentRefundResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostPaymentRefundError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a full or partial refund amount request. You can only refund the payment that has Closed status. By default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.
    /// </remarks>
    public Task<PaymentRefundResponse> PostPaymentRefund(PostPaymentRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments/{id}/refunds"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentRefundResponse>(),
            PostPaymentRefundError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentUpdate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or CLOSED.
    /// </remarks>
    public Task<PaymentUpdate> PutPayment(PutPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/payments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentUpdate>(),
            PutPaymentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
