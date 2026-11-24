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
using JuriSign.Requests.Documents;

namespace JuriSign.Api;

/// <summary>
/// Upload and manage PDF documents
/// </summary>
public sealed class Documents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Documents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a document. Only documents in <c>draft</c> status can be deleted.
    /// </remarks>
    public Task<MessageResponse> DeleteDocument(DeleteDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/documents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download the original PDF file.
    /// </remarks>
    public Task<BinaryContent> DownloadDocument(DownloadDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/documents/{id}/download"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve details of a specific document.
    /// </remarks>
    public Task<DocumentsResponse1> GetDocument(GetDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/documents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentsResponse1>(),
            GetDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of documents belonging to your organization.
    /// </remarks>
    public Task<DocumentsResponse> ListDocuments(ListDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/documents"),
            [],
            [
                new Param("status", request.Status),
                new Param("search", request.Search),
                new Param("per_page", request.PerPage),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentsResponse>(),
            ListDocumentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a PDF document. Maximum file size is 20 MB.
    /// </remarks>
    public Task<DocumentsResponse1> UploadDocument(UploadDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/documents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File), new MultipartParam("title", request.Title)),
            JsonResponse.Create<DocumentsResponse1>(),
            UploadDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
