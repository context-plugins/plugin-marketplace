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
using Curlec.Requests.Payments;

namespace Curlec.Api;

/// <summary>
/// A payment is created when a customer completes checkout. Payments can be auto-captured or manually captured. Fetch payment details to reconcile and diagnose failures.
/// </summary>
public sealed class Payments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Payments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Capture a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentRazorpayPaymentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CapturePaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Capture an authorized payment to collect funds. Must be called within the capture window (default 5 days). Amount must exactly equal authorized amount unless partial capture is enabled.
    /// </remarks>
    public Task<PaymentRazorpayPaymentsApi> CapturePayment(CapturePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}/capture"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentRazorpayPaymentsApi>(),
            CapturePaymentError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all payments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllPaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of payments. Maximum 100 per call.
    /// </remarks>
    public Task<PaymentsResponse> FetchAllPayments(FetchAllPaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments"),
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
            JsonResponse.Create<PaymentsResponse>(),
            FetchAllPaymentsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch payment by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentRazorpayPaymentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details and current status of a specific payment. Always re-fetch before acting — status can change.
    /// </remarks>
    public Task<PaymentRazorpayPaymentsApi> FetchPayment(FetchPaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentRazorpayPaymentsApi>(),
            FetchPaymentError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a payment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentRazorpayPaymentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePaymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the notes field of a payment. Only notes can be modified.
    /// </remarks>
    public Task<PaymentRazorpayPaymentsApi> UpdatePayment(UpdatePaymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PaymentRazorpayPaymentsApi>(),
            UpdatePaymentError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
