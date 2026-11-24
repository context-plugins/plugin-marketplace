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
using AmazonAppSync.Requests.Apis;

namespace AmazonAppSync.Api;

public sealed class Apis
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Apis(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.
    /// </remarks>
    public Task<CreateApiResponse> CreateApi(CreateApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateApiResponse>(),
            CreateApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a GraphqlApi object.
    /// </remarks>
    public Task<CreateGraphqlApiResponse> CreateGraphqlApi(CreateGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateGraphqlApiResponse>(),
            CreateGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an Api object
    /// </remarks>
    public Task<object> DeleteApi(DeleteApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a GraphqlApi object.
    /// </remarks>
    public Task<object> DeleteGraphqlApi(DeleteGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves an Api object.
    /// </remarks>
    public Task<GetApiResponse> GetApi(GetApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetApiResponse>(),
            GetApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a GraphqlApi object.
    /// </remarks>
    public Task<GetGraphqlApiResponse> GetGraphqlApi(GetGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetGraphqlApiResponse>(),
            GetGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListApisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.
    /// </remarks>
    public Task<ListApisResponse> ListApis(ListApisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis"),
            [],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListApisResponse>(),
            ListApisError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Graphql Apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListGraphqlApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGraphqlApisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists your GraphQL APIs.
    /// </remarks>
    public Task<ListGraphqlApisResponse> ListGraphqlApis(ListGraphqlApisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis"),
            [],
            [
                new Param("nextToken", request.NextToken),
                new Param("maxResults", request.MaxResults),
                new Param("apiType", request.ApiType),
                new Param("owner", request.Owner),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListGraphqlApisResponse>(),
            ListGraphqlApisError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an Api.
    /// </remarks>
    public Task<UpdateApiResponse> UpdateApi(UpdateApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateApiResponse>(),
            UpdateApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a GraphqlApi object.
    /// </remarks>
    public Task<UpdateGraphqlApiResponse> UpdateGraphqlApi(UpdateGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateGraphqlApiResponse>(),
            UpdateGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
