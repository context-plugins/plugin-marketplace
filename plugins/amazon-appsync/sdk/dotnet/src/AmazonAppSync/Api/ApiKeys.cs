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
using AmazonAppSync.Requests.ApiKeys;

namespace AmazonAppSync.Api;

public sealed class ApiKeys
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ApiKeys(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Api Key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateApiKeyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a unique key that you can distribute to clients who invoke your API.
    /// </remarks>
    public Task<CreateApiKeyResponse> CreateApiKey(CreateApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/apikeys"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateApiKeyResponse>(),
            CreateApiKeyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Api Key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an API key.
    /// </remarks>
    public Task<object> DeleteApiKey(DeleteApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/apikeys/{id}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteApiKeyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Api Keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListApiKeysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListApiKeysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the API keys for a given API. API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted.
    /// </remarks>
    public Task<ListApiKeysResponse> ListApiKeys(ListApiKeysRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/apikeys"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListApiKeysResponse>(),
            ListApiKeysError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Api Key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateApiKeyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an API key. You can update the key as long as it's not deleted.
    /// </remarks>
    public Task<UpdateApiKeyResponse> UpdateApiKey(UpdateApiKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/apikeys/{id}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateApiKeyResponse>(),
            UpdateApiKeyError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
