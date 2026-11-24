using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CallNode.Core;
using CallNode.Core.Authentication;
using CallNode.Core.Exceptions;
using CallNode.Core.Models;
using CallNode.Core.Request;
using CallNode.Core.Response;
using CallNode.Errors;
using CallNode.Models;
using CallNode.Requests.Faxes;

namespace CallNode.Api;

/// <summary>
/// Hosted fax: send a PDF or TIFF as a fax, list and retrieve faxes sent and
/// received on your numbers, download the document, delete it. Billed per page
/// for the pages actually transmitted; documents are kept until you delete them.
/// </summary>
public sealed class Faxes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Faxes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a fax and its documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409 <c>job_in_progress</c>.
    /// </remarks>
    public Task DeleteFax(DeleteFaxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/faxes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteFaxError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download the document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadFaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.
    /// </remarks>
    public Task<BinaryContent> DownloadFax(DownloadFaxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/faxes/{id}/download"),
            [new TemplateParam("id", request.Id)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadFaxError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a fax
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Fax"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFaxError"/> when the server returns an error response.</exception>
    public Task<Fax> GetFax(GetFaxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/faxes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Fax>(),
            GetFaxError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List faxes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1FaxesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFaxesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newest first, keyset-paginated. Test keys list test faxes only.
    /// </remarks>
    public Task<ApiV1FaxesResponse> ListFaxes(ListFaxesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/faxes"),
            [],
            [
                new Param("direction", request.Direction),
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1FaxesResponse>(),
            ListFaxesError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a fax
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Fax"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SendFaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Converts the document to a fax TIFF and queues it from one of your numbers.
    /// Gates run in order: number ownership, business verification, destination
    /// class, suppression (do-not-contact), wholesale contract posture, document
    /// limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at
    /// least <c>pages × rate</c>. Only the pages actually transmitted are charged, when
    /// the fax finishes. A <c>cn_test_</c> key runs every gate and then simulates the
    /// transmission. The 8am–9pm called-party window is not applied to faxes.
    /// </remarks>
    public Task<Fax> SendFax(SendFaxOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/faxes"),
            [],
            [],
            [
                new HeaderParam("X-Idempotency-Key", request.XIdempotencyKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Fax>(),
            SendFaxError.Response,
            AuthScheme.All(_auth.ApiKeyAuth, _auth.TimestampAuth, _auth.SignatureAuth),
            requestOptions,
            cancellationToken);
}
