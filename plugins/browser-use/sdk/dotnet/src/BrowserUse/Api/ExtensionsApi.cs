using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Requests.ExtensionsApi;

namespace BrowserUse.Api;

public sealed class ExtensionsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExtensionsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteExtensionExtensionsExtensionIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete an extension without affecting running browsers.
    /// </remarks>
    public Task DeleteExtensionExtensionsExtensionIdDelete(DeleteExtensionExtensionsExtensionIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/extensions/{extension_id}"),
            [new TemplateParam("extension_id", request.ExtensionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteExtensionExtensionsExtensionIdDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtensionView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExtensionExtensionsExtensionIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an uploaded extension by its ID.
    /// </remarks>
    public Task<ExtensionView> GetExtensionExtensionsExtensionIdGet(GetExtensionExtensionsExtensionIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/extensions/{extension_id}"),
            [new TemplateParam("extension_id", request.ExtensionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExtensionView>(),
            GetExtensionExtensionsExtensionIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Extensions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtensionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExtensionsExtensionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the extensions uploaded to this project.
    /// </remarks>
    public Task<ExtensionListResponse> ListExtensionsExtensionsGet(ListExtensionsExtensionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/extensions"),
            [],
            [new Param("pageSize", request.PageSize), new Param("pageNumber", request.PageNumber)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExtensionListResponse>(),
            ListExtensionsExtensionsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Extension
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtensionView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadExtensionExtensionsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.
    /// </remarks>
    public Task<ExtensionView> UploadExtensionExtensionsPost(UploadExtensionExtensionsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/extensions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<ExtensionView>(),
            UploadExtensionExtensionsPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
