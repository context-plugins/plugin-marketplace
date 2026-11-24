using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;
using Archbee.Requests.Documents;

namespace Archbee.Api;

/// <summary>
/// Create, read, update, delete and search documents
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
    /// Delete document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete document by docId
    /// </remarks>
    public Task<DocResponse> DeleteDocument(DeleteDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/doc"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocResponse>(),
            DeleteDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get document
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a document in markdown, html, json, or source format.
    /// </remarks>
    public Task<DocResponse1> GetDocument(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/doc"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DocResponse1>(),
            GetDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import Content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ImportContentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree structure.
    /// </remarks>
    public Task<ImportContentResponse> ImportContent(ImportContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/import-content"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File), new MultipartParam("type", request.Type)),
            JsonResponse.Create<ImportContentResponse>(),
            ImportContentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search Archbee documents in docSpace. Can perform one of the 3 types of search:
    /// <para>
    /// ai-chat to return ai generative answer accompanied by source docs;
    /// ai-retrieval to return just similar docs with the query;
    /// words to perform normal search aka. "word-based"; use empty query to return all docs
    /// single-doc to return document info by id
    /// </para>
    /// </remarks>
    public Task<DocsSearchResponse> SearchDocument(SearchDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/docs/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocsSearchResponse>(),
            SearchDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update / Create document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCreateDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create / Update Doc by docId
    /// </remarks>
    public Task<DocResponse2> UpdateCreateDocument(UpdateCreateDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/doc"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocResponse2>(),
            UpdateCreateDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
