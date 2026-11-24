using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using JuriSign.Core;
using JuriSign.Core.Exceptions;
using JuriSign.Core.Models;
using JuriSign.Core.Request;
using JuriSign.Core.Response;
using JuriSign.Errors;
using JuriSign.Models;
using JuriSign.Requests.SignRequests;

namespace JuriSign.Api;

/// <summary>
/// Create, send, and track signature requests
/// </summary>
public sealed class SignRequests
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignRequests(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Sign Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignRequestsCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelSignRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a pending signature request. Only requests in <c>pending</c> status can be cancelled.
    /// </remarks>
    public Task<SignRequestsCancelResponse> CancelSignRequest(CancelSignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests/{id}/cancel"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SignRequestsCancelResponse>(),
            CancelSignRequestError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Sign Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignRequestsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new signature request with one or more signers. The request is created in <c>draft</c> status and must be sent explicitly via the send endpoint.
    /// </remarks>
    public Task<SignRequestsResponse1> CreateSignRequest(CreateSignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignRequestsResponse1>(),
            CreateSignRequestError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Audit Proof
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadProofError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP addresses.
    /// </remarks>
    public Task<BinaryContent> DownloadProof(DownloadProofRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests/{id}/proof"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadProofError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Signed PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadSignedPdfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download the signed PDF document. Only available after all signers have completed signing.
    /// </remarks>
    public Task<BinaryContent> DownloadSignedPdf(DownloadSignedPdfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests/{id}/download"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadSignedPdfError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Sign Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignRequestsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve full details of a signature request, including signers, signature zones, and download links.
    /// </remarks>
    public Task<SignRequestsResponse2> GetSignRequest(GetSignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignRequestsResponse2>(),
            GetSignRequestError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sign Requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignRequestsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSignRequestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of signature requests.
    /// </remarks>
    public Task<SignRequestsResponse> ListSignRequests(ListSignRequestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests"),
            [],
            [
                new Param("status", request.Status),
                new Param("per_page", request.PerPage),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignRequestsResponse>(),
            ListSignRequestsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send Sign Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignRequestsSendResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendSignRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send the signature request to all signers. This changes the status from <c>draft</c> to <c>pending</c> and sends invitation emails.
    /// </remarks>
    public Task<SignRequestsSendResponse> SendSignRequest(SendSignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sign-requests/{id}/send"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SignRequestsSendResponse>(),
            SendSignRequestError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
