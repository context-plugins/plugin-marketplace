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
using AmazonAppSync.Requests.Functions;

namespace AmazonAppSync.Api;

public sealed class Functions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Functions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Function
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateFunctionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFunctionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the resolver logic.
    /// </remarks>
    public Task<CreateFunctionResponse> CreateFunction(CreateFunctionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateFunctionResponse>(),
            CreateFunctionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Function
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteFunctionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Function.
    /// </remarks>
    public Task<object> DeleteFunction(DeleteFunctionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions/{functionId}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("functionId", request.FunctionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteFunctionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Function
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetFunctionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFunctionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a Function.
    /// </remarks>
    public Task<GetFunctionResponse> GetFunction(GetFunctionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions/{functionId}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("functionId", request.FunctionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetFunctionResponse>(),
            GetFunctionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Functions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFunctionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFunctionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List multiple functions.
    /// </remarks>
    public Task<ListFunctionsResponse> ListFunctions(ListFunctionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListFunctionsResponse>(),
            ListFunctionsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Function
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateFunctionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateFunctionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Function object.
    /// </remarks>
    public Task<UpdateFunctionResponse> UpdateFunction(UpdateFunctionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions/{functionId}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("functionId", request.FunctionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateFunctionResponse>(),
            UpdateFunctionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
