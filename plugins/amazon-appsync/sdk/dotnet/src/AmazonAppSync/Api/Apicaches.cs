using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonAppSync.Core;
using AmazonAppSync.Core.Exceptions;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Core.Request;
using AmazonAppSync.Core.Response;
using AmazonAppSync.Errors;
using AmazonAppSync.Models;
using AmazonAppSync.Requests.Apicaches;

namespace AmazonAppSync.Api;

public sealed class Apicaches
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Apicaches(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Api Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateApiCacheResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApiCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a cache for the GraphQL API.
    /// </remarks>
    public Task<CreateApiCacheResponse> CreateApiCache(CreateApiCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/ApiCaches"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateApiCacheResponse>(),
            CreateApiCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Api Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an ApiCache object.
    /// </remarks>
    public Task<object> DeleteApiCache(DeleteApiCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/ApiCaches"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteApiCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Api Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetApiCacheResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves an ApiCache object.
    /// </remarks>
    public Task<GetApiCacheResponse> GetApiCache(GetApiCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/ApiCaches"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetApiCacheResponse>(),
            GetApiCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Api Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateApiCacheResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateApiCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the cache for the GraphQL API.
    /// </remarks>
    public Task<UpdateApiCacheResponse> UpdateApiCache(UpdateApiCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/ApiCaches/update"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateApiCacheResponse>(),
            UpdateApiCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
