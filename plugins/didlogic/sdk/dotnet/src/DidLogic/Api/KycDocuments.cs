using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.KycDocuments;

namespace DidLogic.Api;

public sealed class KycDocuments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal KycDocuments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List document countries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2DocumentsCountriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the country names a document can be uploaded for.
    /// <para>
    /// The name is the exact value documents_create takes in <c>document[country]</c>; a code such as <c>UK</c> or <c>GB</c> is
    /// refused. Narrow the list by part of the name with <c>name_contains</c>.
    /// </para>
    /// <para>
    /// <c>countries[].name</c> feeds documents_create.
    /// </para>
    /// </remarks>
    public Task<ApiV2DocumentsCountriesResponse> DocumentsCountries(DocumentsCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents/countries"),
            [],
            [new Param("name_contains", request.NameContains)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2DocumentsCountriesResponse>(),
            DocumentsCountriesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2DocumentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a new document for identity verification.
    /// <para>
    /// <b>Document Types:</b>
    /// - <c>personal_id</c> - Personal ID
    /// - <c>address_proof</c> - Proof of address
    /// - <c>business_registration</c> - Business Registration
    /// - <c>letter_of_intent</c> - Letter of Intent
    /// </para>
    /// <para>
    /// <b>File Requirements:</b>
    /// - Allowed extensions: jpg, jpeg, png, pdf
    /// - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]
    /// </para>
    /// <para>
    /// <c>document_id</c> feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
    /// <c>document.files[].role</c> feeds documents_files_download_file.
    /// </para>
    /// </remarks>
    public Task<ApiV2DocumentsResponse1> DocumentsCreate(DocumentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("document[name]", request.DocumentName),
                new MultipartParam("document[doc_type]", request.DocumentDocType),
                new MultipartParam("document[files][frontside]", request.DocumentFilesFrontside),
                new MultipartParam("document[identity_id]", request.DocumentIdentityId),
                new MultipartParam("document[country]", request.DocumentCountry),
                new MultipartParam("document[files][backside]", request.DocumentFilesBackside)),
            JsonResponse.Create<ApiV2DocumentsResponse1>(),
            DocumentsCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a document by ID.
    /// <para>
    /// <b>Important notes:</b>
    /// - Document is permanently removed
    /// - Cannot be undone
    /// </para>
    /// </remarks>
    public Task DocumentsDestroy(DocumentsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DocumentsDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download document file by role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsFilesDownloadFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download a specific document file by role (frontside/backside).
    /// </remarks>
    public Task<BinaryContent> DocumentsFilesDownloadFile(DocumentsFilesDownloadFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents/{id}/files/{role}"),
            [new TemplateParam("id", request.Id), new TemplateParam("role", request.Role)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DocumentsFilesDownloadFileError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2DocumentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of documents with filtering and pagination.
    /// <para>
    /// <b>Important notes:</b>
    /// - Supports filtering by approval status, identity ID, and date range
    /// - Results can be sorted and paginated
    /// </para>
    /// <para>
    /// <c>documents[].id</c> feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
    /// <c>documents[].files[].role</c> feeds documents_files_download_file; <c>documents[].identity_id</c> feeds
    /// identities_index. Full record: documents_show.
    /// </para>
    /// </remarks>
    public Task<ApiV2DocumentsResponse> DocumentsIndex(DocumentsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents"),
            [],
            [
                new Param("ids", request.Ids),
                new Param("identity_id", request.IdentityId),
                new Param("approvement_status", request.ApprovementStatus),
                new Param("upload_date_from", request.UploadDateFrom?.ToDate()),
                new Param("upload_date_to", request.UploadDateTo?.ToDate()),
                new Param("order_by", request.OrderBy),
                new Param("order", request.Order),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2DocumentsResponse>(),
            DocumentsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2DocumentsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a document by ID.
    /// <para>
    /// <c>document.files[].role</c> feeds documents_files_download_file; <c>document.identity_id</c> feeds identities_index.
    /// Rows: documents_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2DocumentsResponse2> DocumentsShow(DocumentsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2DocumentsResponse2>(),
            DocumentsShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2DocumentsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DocumentsUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing document's name or identity.
    /// <para>
    /// <c>document_id</c> feeds documents_show.
    /// </para>
    /// </remarks>
    public Task<ApiV2DocumentsResponse3> DocumentsUpdate(DocumentsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/documents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2DocumentsResponse3>(),
            DocumentsUpdateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
