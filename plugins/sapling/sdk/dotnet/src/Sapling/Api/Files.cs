using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Sapling.Core;
using Sapling.Core.Authentication;
using Sapling.Core.Exceptions;
using Sapling.Core.Models;
using Sapling.Core.Request;
using Sapling.Core.Response;
using Sapling.Errors;
using Sapling.Models;
using Sapling.Requests.Files;

namespace Sapling.Api;

/// <summary>
/// PDF/Word text extraction and text chunking.
/// </summary>
public sealed class Files
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Files(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Split HTML into chunks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IngestChunkHtmlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingChunkHtmlError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Like chunk_text, for HTML input. Not billed.
    /// </remarks>
    public Task<ApiV1IngestChunkHtmlResponse> SaplingChunkHtml(SaplingChunkHtmlRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ingest/chunk_html"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1IngestChunkHtmlResponse>(),
            SaplingChunkHtmlError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Split text into chunks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IngestChunkTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingChunkTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Split long text into overlapping chunks no longer than <c>max_length</c>, preferring sentence and whitespace boundaries. Not billed.
    /// </remarks>
    public Task<ApiV1IngestChunkTextResponse> SaplingChunkText(SaplingChunkTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ingest/chunk_text"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1IngestChunkTextResponse>(),
            SaplingChunkTextError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract text from a Word document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IngestDocxToTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingDocxToTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a .docx and receive its text, tables included in document order. Not billed.
    /// </remarks>
    public Task<ApiV1IngestDocxToTextResponse> SaplingDocxToText(SaplingDocxToTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ingest/docx_to_text"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1IngestDocxToTextResponse>(),
            SaplingDocxToTextError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract text from a PDF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IngestPdfToTextResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingPdfToTextError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a PDF and receive its text, with layout line breaks and hyphenation repaired. Owner-locked PDFs are decrypted transparently; image-only PDFs answer 400. Not billed.
    /// </remarks>
    public Task<ApiV1IngestPdfToTextResponse> SaplingPdfToText(SaplingPdfToTextRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/ingest/pdf_to_text"),
            [],
            [new Param("return_usage", request.ReturnUsageQuery), new Param("key", request.Key)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("jsonParams", request.JsonParams),
                new MultipartParam("return_usage", request.ReturnUsage)),
            JsonResponse.Create<ApiV1IngestPdfToTextResponse>(),
            SaplingPdfToTextError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);
}
