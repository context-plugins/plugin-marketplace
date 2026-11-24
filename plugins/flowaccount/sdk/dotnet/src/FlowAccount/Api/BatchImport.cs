using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FlowAccount.Core;
using FlowAccount.Core.ErrorResponse;
using FlowAccount.Core.Exceptions;
using FlowAccount.Core.Models;
using FlowAccount.Core.Request;
using FlowAccount.Core.Response;
using FlowAccount.Models;
using FlowAccount.Requests.BatchImport;

namespace FlowAccount.Api;

public sealed class BatchImport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BatchImport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete custom template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportDeleteCustomTemplate(BatchImportDeleteCustomTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/custom-template/{templateId}"),
            [new TemplateParam("templateId", request.TemplateId), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// To get details of a document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchImportMetadata"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BatchImportMetadata> BatchImportGenerateBacthIdMetadata(BatchImportGenerateBacthIdMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/batch-metadata"),
            [new TemplateParam("culture", request.Culture)],
            [new Param("fileName", request.FileName)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BatchImportMetadata>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get data from Storage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportGetBatchS3Data(BatchImportGetBatchS3DataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/get-batch-s3-data/{batchId}"),
            [new TemplateParam("batchId", request.BatchId), new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get custom template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportGetCustomTemplate(BatchImportGetCustomTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/custom-template/{templateId}"),
            [new TemplateParam("templateId", request.TemplateId), new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Original File
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportGetOrgingalFile(BatchImportGetOrgingalFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/get-batch-import-org-file/{batchId}"),
            [new TemplateParam("batchId", request.BatchId), new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get presign url to upload the file with payloads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportGetPresign(BatchImportGetPresignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/get-presign-for-upload-simpledoc"),
            [new TemplateParam("culture", request.Culture)],
            [new Param("id", request.Id)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mark the batch as viewed in notification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<bool> BatchImportMarkViewed(BatchImportMarkViewedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/mark-viewed"),
            [new TemplateParam("culture", request.Culture)],
            [new Param("userId", request.UserId), new Param("batchId", request.BatchId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<bool>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query the batch by id and status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BatchStatus> BatchImportQueryBatch(BatchImportQueryBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/query-batch"),
            [new TemplateParam("culture", request.Culture)],
            [new Param("status", request.Status)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchStatus>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch import query batch history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchHistory"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BatchHistory> BatchImportQueryBatchHistory(BatchImportQueryBatchHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/batch-import-history"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BatchHistory>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch import retry simple documents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="bool"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<bool> BatchImportRetrySimpleDocuments(BatchImportRetrySimpleDocumentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/retry-simple-documents"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<bool>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or Update (Upsert) custom template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> BatchImportUpsertCustomTemplate(BatchImportUpsertCustomTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/cash-invoices/custom-template"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
