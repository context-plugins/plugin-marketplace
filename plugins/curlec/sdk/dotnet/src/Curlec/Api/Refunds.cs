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
using Curlec.Requests.Refunds;

namespace Curlec.Api;

/// <summary>
/// Refunds return captured payment amounts to customers. Normal refunds take 5-7 business days. Instant (optimum) refunds settle immediately but may fall back to normal. Use X-Refund-Idempotency header to safely retry without duplicates.
/// </summary>
public sealed class Refunds
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Refunds(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a refund
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefundRazorpayRefundsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRefundError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiate a full or partial refund for a captured payment. Use speed=normal (default, 5-7 business days) or speed=optimum for instant refund (falls back to normal if unavailable). Use the X-Refund-Idempotency header with a unique key (&gt;=10 chars) to safely retry without duplicate refunds.
    /// </remarks>
    public Task<RefundRazorpayRefundsApi> CreateRefund(CreateRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}/refund"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RefundRazorpayRefundsApi>(),
            CreateRefundError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all refunds
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefundsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllRefundsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of all refunds across payments. Maximum 100 per call.
    /// </remarks>
    public Task<RefundsResponse> FetchAllRefunds(FetchAllRefundsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/refunds"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RefundsResponse>(),
            FetchAllRefundsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a specific refund for a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefundRazorpayRefundsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentRefundError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a specific refund by its ID scoped to a particular payment.
    /// </remarks>
    public Task<RefundRazorpayRefundsApi> FetchPaymentRefund(FetchPaymentRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{payment_id}/refunds/{refund_id}"),
            [new TemplateParam("payment_id", request.PaymentId), new TemplateParam("refund_id", request.RefundId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RefundRazorpayRefundsApi>(),
            FetchPaymentRefundError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch refunds for a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsRefundsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentRefundsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all refunds issued against a specific payment.
    /// </remarks>
    public Task<PaymentsRefundsResponse> FetchPaymentRefunds(FetchPaymentRefundsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{payment_id}/refunds"),
            [new TemplateParam("payment_id", request.PaymentId)],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentsRefundsResponse>(),
            FetchPaymentRefundsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch refund by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefundRazorpayRefundsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchRefundError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details and current status of a specific refund.
    /// </remarks>
    public Task<RefundRazorpayRefundsApi> FetchRefund(FetchRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/refunds/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RefundRazorpayRefundsApi>(),
            FetchRefundError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a refund
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RefundRazorpayRefundsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateRefundError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the notes field of a refund. Only notes can be modified.
    /// </remarks>
    public Task<RefundRazorpayRefundsApi> UpdateRefund(UpdateRefundRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/refunds/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RefundRazorpayRefundsApi>(),
            UpdateRefundError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
