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
using AmazonLex.Requests.Imports;

namespace AmazonLex.Api;

public sealed class Imports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Imports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeleteImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes a previous import and the associated file stored in an S3 bucket.
    /// </remarks>
    public Task<DeleteImportResponse> DeleteImport(DeleteImportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/imports/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DeleteImportResponse>(),
            DeleteImportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DescribeImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a specific import.
    /// </remarks>
    public Task<DescribeImportResponse> DescribeImport(DescribeImportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/imports/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DescribeImportResponse>(),
            DescribeImportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Imports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListImportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListImportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.
    /// </remarks>
    public Task<ListImportsResponse> ListImports(ListImportsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/imports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListImportsResponse>(),
            ListImportsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.
    /// </remarks>
    public Task<StartImportResponse> StartImport(StartImportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonLexModelBuildingV2BotsApi("/imports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartImportResponse>(),
            StartImportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
