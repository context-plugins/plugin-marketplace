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
using Archbee.Requests.ApiReference;

namespace Archbee.Api;

/// <summary>
/// Sync and inspect an imported OpenAPI reference
/// </summary>
public sealed class ApiReference
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ApiReference(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Info Open Api document
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InfoApiReferenceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InfoOpenApiDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get info of an existing Open Api tree
    /// </remarks>
    public Task<InfoApiReferenceResponse> InfoOpenApiDocument(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/info-api-reference"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InfoApiReferenceResponse>(),
            InfoOpenApiDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sync Open Api document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncApiReferenceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SyncOpenApiDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sync Open Api document with a new or existing Open Api tree
    /// </remarks>
    public Task<SyncApiReferenceResponse> SyncOpenApiDocument(SyncOpenApiDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-api-reference"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("file", request.File),
                new MultipartParam("docTreeId", request.DocTreeId),
                new MultipartParam("type", request.Type),
                new MultipartParam("openApiTryIt", request.OpenApiTryIt),
                new MultipartParam("openApiUseOwnBackend", request.OpenApiUseOwnBackend),
                new MultipartParam("showDownloadOpenApiFile", request.ShowDownloadOpenApiFile),
                new MultipartParam("shouldCreateSchemaCategory", request.ShouldCreateSchemaCategory),
                new MultipartParam("shouldCreateIntro", request.ShouldCreateIntro),
                new MultipartParam("openApiLanguageExamples", request.OpenApiLanguageExamples)),
            JsonResponse.Create<SyncApiReferenceResponse>(),
            SyncOpenApiDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
