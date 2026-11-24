using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Documents;

namespace Divvy.Api;

public sealed class Documents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Documents(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Upload bill document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentCreateResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBillDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the uploaded document is available on the bill details page in the BILL web app.
    /// <para>
    /// In the response, the <c>name</c>, <c>createdTime</c>, and <c>downloadLink</c> is available when the upload is complete.
    /// </para>
    /// <para>
    /// When you upload a document, it takes a few minutes for BILL to complete the upload process.
    /// * <b>Upload in-progress</b>: A temporary BILL-generated ID is available for the document when the upload is in progress. The value begins with <c>0du</c>. You can get the document upload status with <c>GET /v3/documents/upload-status</c>.
    /// * <b>Upload complete</b>: A BILL-generated ID is available for the document when the upload is complete. The value begins with <c>00h</c>. You can get details about the uploaded document with <c>GET /v3/documents/bills/{billId}</c>.
    /// </para>
    /// <para>
    /// See Documents and attachments in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<DocumentCreateResponseDto> CreateBillDocument(CreateBillDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/documents/bills/{billId}"),
            [new TemplateParam("billId", request.BillId)],
            [new Param("name", request.Name)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocumentCreateResponseDto>(),
            CreateBillDocumentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get document details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about a document associated with a bill.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the document.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
    /// </code>
    /// </remarks>
    public Task<DocumentResponseDto> GetDocument(GetDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/documents/{documentId}"),
            [new TemplateParam("documentId", request.DocumentId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentResponseDto>(),
            GetDocumentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoDocumentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of documents associated with a bill.
    /// <para>
    /// From the response, use <c>downloadLink</c> in a GET request to download the document.
    /// </para>
    /// <code>
    /// curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
    /// </code>
    /// </remarks>
    public Task<ListResponseDtoDocumentResponseDto> ListDocuments(ListDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/documents/bills/{billId}"),
            [new TemplateParam("billId", request.BillId)],
            [new Param("max", request.Max), new Param("page", request.Page)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoDocumentResponseDto>(),
            ListDocumentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get document upload status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DocumentUploadStatusResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get status of a document upload. Use this endpoint to identify when a document upload is complete.
    /// * BILL generates an <c>uploadId</c> for the document when the upload is in progress (<c>IN_PROGRESS</c>). The value begins with <c>0du</c>.
    /// * BILL generates a <c>documentId</c> for the document when the upload is complete (<c>UPLOADED</c>). The value begins with <c>00h</c>.
    /// </remarks>
    public Task<IReadOnlyList<DocumentUploadStatusResponseDto>> UploadStatus(UploadStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/documents/upload-status"),
            [],
            [new Param("ids", request.Ids)],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DocumentUploadStatusResponseDto>>(),
            UploadStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
