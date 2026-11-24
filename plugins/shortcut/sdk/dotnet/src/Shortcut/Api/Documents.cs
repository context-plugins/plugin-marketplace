using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Documents;

namespace Shortcut.Api;

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
    /// Create Doc
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DocSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDocError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Doc. Supports markdown or HTML input via content_format parameter.
    /// </remarks>
    public Task<DocSlim> CreateDoc(CreateDocRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DocSlim>(),
            CreateDocError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Doc
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is deleted, connected clients will be notified via SSE events.
    /// </remarks>
    public Task DeleteDoc(DeleteDocRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}"),
            [new TemplateParam("doc-public-id", request.DocPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            DeleteDocError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Doc
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Doc"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDocError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.
    /// </remarks>
    public Task<Doc> GetDoc(GetDocRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}"),
            [new TemplateParam("doc-public-id", request.DocPublicId)],
            [new Param("content_format", request.ContentFormat)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Doc>(),
            GetDocError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Link Document to Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LinkDocumentToEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a relationship between a Document and an Epic.
    /// </remarks>
    public Task LinkDocumentToEpic(LinkDocumentToEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            [
                new TemplateParam("doc-public-id", request.DocPublicId),
                new TemplateParam("epic-public-id", request.EpicPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            LinkDocumentToEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Docs
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DocSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Docs returns a list of Doc that the current user can read.
    /// </remarks>
    public Task<IReadOnlyList<DocSlim>> ListDocs(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DocSlim>>(),
            ListDocsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Document Epics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EpicSlim"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDocumentEpicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all Epics related to this Document.
    /// </remarks>
    public Task<IReadOnlyList<EpicSlim>> ListDocumentEpics(ListDocumentEpicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}/epics"),
            [new TemplateParam("doc-public-id", request.DocPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EpicSlim>>(),
            ListDocumentEpicsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unlink Document from Epic
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnlinkDocumentFromEpicError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a relationship between a Document and an Epic.
    /// </remarks>
    public Task UnlinkDocumentFromEpic(UnlinkDocumentFromEpicRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            [
                new TemplateParam("doc-public-id", request.DocPublicId),
                new TemplateParam("epic-public-id", request.EpicPublicId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UnlinkDocumentFromEpicError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Doc
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Doc"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDocError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.
    /// </remarks>
    public Task<Doc> UpdateDoc(UpdateDocRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/documents/{doc-public-id}"),
            [new TemplateParam("doc-public-id", request.DocPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Doc>(),
            UpdateDocError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
