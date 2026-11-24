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
using Curlec.Requests.QrCodes;

namespace Curlec.Api;

/// <summary>
/// QR Codes enable offline and digital payment collection. Customers scan with any UPI or card app. Supports fixed-amount and variable-amount codes, single-use and multiple-use modes.
/// </summary>
public sealed class QrCodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal QrCodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Close a QR code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloseQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.
    /// </remarks>
    public Task<QrCode> CloseQrCode(CloseQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes/{id}/close"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<QrCode>(),
            CloseQrCodeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a QR code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature; requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days. multiple_use QR codes have no expiry restriction.
    /// </remarks>
    public Task<QrCode> CreateQrCode(CreateQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCode>(),
            CreateQrCodeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all QR codes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsQrCodesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllQrCodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all QR codes. Filter by customer_id or payment_id.
    /// </remarks>
    public Task<PaymentsQrCodesResponse> FetchAllQrCodes(FetchAllQrCodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes"),
            [],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
                new Param("customer_id", request.CustomerId),
                new Param("payment_id", request.PaymentId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentsQrCodesResponse>(),
            FetchAllQrCodesError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch QR code by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific QR code including payment counts and status.
    /// </remarks>
    public Task<QrCode> FetchQrCode(FetchQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QrCode>(),
            FetchQrCodeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch payments for a QR code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaymentsQrCodesPaymentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchQrCodePaymentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all payments made against a specific QR code.
    /// </remarks>
    public Task<PaymentsQrCodesPaymentsResponse> FetchQrCodePayments(FetchQrCodePaymentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes/{id}/payments"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("from", request.From),
                new Param("to", request.To),
                new Param("count", request.Count),
                new Param("skip", request.Skip),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaymentsQrCodesPaymentsResponse>(),
            FetchQrCodePaymentsError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a QR code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QrCode"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateQrCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the notes field of a QR code. Only notes can be modified after creation.
    /// </remarks>
    public Task<QrCode> UpdateQrCode(UpdateQrCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/payments/qr_codes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QrCode>(),
            UpdateQrCodeError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
