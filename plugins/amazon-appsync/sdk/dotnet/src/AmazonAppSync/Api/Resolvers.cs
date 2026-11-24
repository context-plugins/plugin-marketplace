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
using AmazonAppSync.Requests.Resolvers;

namespace AmazonAppSync.Api;

public sealed class Resolvers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Resolvers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Resolver
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResolverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResolverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.
    /// </remarks>
    public Task<CreateResolverResponse> CreateResolver(CreateResolverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("typeName", request.TypeName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResolverResponse>(),
            CreateResolverError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Resolver
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResolverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Resolver object.
    /// </remarks>
    public Task<object> DeleteResolver(DeleteResolverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            [
                new TemplateParam("apiId", request.ApiId),
                new TemplateParam("typeName", request.TypeName),
                new TemplateParam("fieldName", request.FieldName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteResolverError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Resolver
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetResolverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResolverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a Resolver object.
    /// </remarks>
    public Task<GetResolverResponse> GetResolver(GetResolverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            [
                new TemplateParam("apiId", request.ApiId),
                new TemplateParam("typeName", request.TypeName),
                new TemplateParam("fieldName", request.FieldName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetResolverResponse>(),
            GetResolverError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Resolvers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResolversResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResolversError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the resolvers for a given API and type.
    /// </remarks>
    public Task<ListResolversResponse> ListResolvers(ListResolversRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("typeName", request.TypeName)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResolversResponse>(),
            ListResolversError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Resolvers By Function
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResolversByFunctionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResolversByFunctionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the resolvers that are associated with a specific function.
    /// </remarks>
    public Task<ListResolversByFunctionResponse> ListResolversByFunction(ListResolversByFunctionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/functions/{functionId}/resolvers"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("functionId", request.FunctionId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResolversByFunctionResponse>(),
            ListResolversByFunctionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Resolver
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateResolverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateResolverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Resolver object.
    /// </remarks>
    public Task<UpdateResolverResponse> UpdateResolver(UpdateResolverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            [
                new TemplateParam("apiId", request.ApiId),
                new TemplateParam("typeName", request.TypeName),
                new TemplateParam("fieldName", request.FieldName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateResolverResponse>(),
            UpdateResolverError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
