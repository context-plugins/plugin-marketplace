using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Exports;

namespace AmazonLex.Api;

public sealed class Exports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Exports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots
    /// </remarks>
    public Task<CreateExportResponse> CreateExport(CreateExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateExportResponse>(),
            CreateExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a previous export and the associated files stored in an S3 bucket.
    /// </remarks>
    public Task<DeleteExportResponse> DeleteExport(DeleteExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
            [new TemplateParam("exportId", request.ExportId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteExportResponse>(),
            DeleteExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a specific export.
    /// </remarks>
    public Task<DescribeExportResponse> DescribeExport(DescribeExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
            [new TemplateParam("exportId", request.ExportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeExportResponse>(),
            DescribeExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Export
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports the contents of a Amazon Lex resource in a specified format.
    /// </remarks>
    public Task<GetExportResponse> GetExport(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetExportResponse>(),
            GetExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Exports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListExportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.
    /// </remarks>
    public Task<ListExportsResponse> ListExports(ListExportsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListExportsResponse>(),
            ListExportsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateExportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.
    /// </remarks>
    public Task<UpdateExportResponse> UpdateExport(UpdateExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2ExportsApi("/exports/{exportId}"),
            [new TemplateParam("exportId", request.ExportId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateExportResponse>(),
            UpdateExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
