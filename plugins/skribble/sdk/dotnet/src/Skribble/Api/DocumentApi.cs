using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.DocumentApi;

namespace Skribble.Api;

/// <summary>
/// Endpoints for uploading and managing documents.
/// </summary>
public sealed class DocumentApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DocumentApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a <c>Document</c> by its ID. Deletion behaves similarly to deleting a
    /// <c>SignatureRequest</c> and does not necessarily remove the object from the
    /// system immediately.
    /// <para>
    /// If more than one participant is involved, the DELETE request only removes
    /// the current user from the <c>Document</c>.
    /// </para>
    /// <para>
    /// The system permanently removes the <c>Document</c> once the last user deletes it
    /// via the Skribble web application.
    /// </para>
    /// <para>
    /// <b>Async cascade note:</b> If the <c>Document</c>'s parent <c>SignatureRequest</c> was
    /// recently deleted, the server-side cascade that removes associated documents
    /// runs asynchronously. During this window the document is still listed by
    /// <c>GET /documents</c> but returns <c>403 Forbidden</c> on delete attempts. Retry
    /// after a few seconds — the document will either have been removed by the
    /// cascade or the delete will succeed.
    /// </para>
    /// </remarks>
    public Task DeleteDocument(DeleteDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents/{DOC_ID}"),
            [new TemplateParam("DOC_ID", request.DocId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDocumentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Document Content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentContentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Downloads the content of the document identified by its ID. Returns either
    /// a PDF binary or a JSON object containing a Base64-encoded PDF.
    /// </remarks>
    public Task<DocumentContentResponse> GetDocumentContent(GetDocumentContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents/{DOC_ID}/content"),
            [new TemplateParam("DOC_ID", request.DocId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentContentResponse>(),
            GetDocumentContentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Document Metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the metadata for the <c>Document</c> identified by its ID.
    /// </remarks>
    public Task<DocumentResponse> GetDocumentMetadata(GetDocumentMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents/{DOC_ID}"),
            [new TemplateParam("DOC_ID", request.DocId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocumentResponse>(),
            GetDocumentMetadataError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Document Page Preview
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentPreviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a preview image for a specific page of the uploaded PDF document.
    /// Page numbering starts at <b>0</b> for the first page.
    /// <para>
    /// &gt; Use the optional <c>scale</c> parameter to control the preview size:
    /// &gt; <c>scale=100</c> returns a full-size preview, while <c>scale=20</c> returns a
    /// &gt; thumbnail.
    /// </para>
    /// </remarks>
    public Task<BinaryContent> GetDocumentPreview(GetDocumentPreviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents/{DOC_ID}/pages/{PAGE_ID}"),
            [new TemplateParam("DOC_ID", request.DocId), new TemplateParam("PAGE_ID", request.PageId)],
            [new Param("scale", request.Scale)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetDocumentPreviewError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List All Accessible Documents
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DocumentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of all accessible <c>Document</c> objects.
    /// </remarks>
    public Task<IReadOnlyList<DocumentResponse>> GetDocuments(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DocumentResponse>>(),
            GetDocumentsError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload a Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocumentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload using a <b>Base64 encoded</b> file as <c>content</c>.
    /// <para>
    /// <b>Content size limits</b>:
    /// Very large uploads are rejected by the gateway in front of the API
    /// before the request reaches it, returning a <c>403 Forbidden</c> response.
    /// This currently returns a plain body instead of the standard
    /// Problem+JSON error envelope used elsewhere in this API; a fix to align
    /// it is planned.
    /// </para>
    /// </remarks>
    public Task<DocumentResponse> UploadDocument(UploadDocumentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleDocumentApi("/documents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocumentResponse>(),
            UploadDocumentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
