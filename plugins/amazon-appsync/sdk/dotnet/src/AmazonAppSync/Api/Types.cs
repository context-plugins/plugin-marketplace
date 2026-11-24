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
using AmazonAppSync.Requests.Types;

namespace AmazonAppSync.Api;

public sealed class Types
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Types(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Type object.
    /// </remarks>
    public Task<CreateTypeResponse> CreateType(CreateTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateTypeResponse>(),
            CreateTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Type object.
    /// </remarks>
    public Task<object> DeleteType(DeleteTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("typeName", request.TypeName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a Type object.
    /// </remarks>
    public Task<GetTypeResponse> GetType(GetTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("typeName", request.TypeName)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTypeResponse>(),
            GetTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the types for a given API.
    /// </remarks>
    public Task<ListTypesResponse> ListTypes(ListTypesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types"),
            [new TemplateParam("apiId", request.ApiId)],
            [
                new Param("format", request.Format),
                new Param("nextToken", request.NextToken),
                new Param("maxResults", request.MaxResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTypesResponse>(),
            ListTypesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Types By Association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTypesByAssociationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTypesByAssociationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Type objects by the source API association ID.
    /// </remarks>
    public Task<ListTypesByAssociationResponse> ListTypesByAssociation(ListTypesByAssociationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types"),
            [
                new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier),
                new TemplateParam("associationId", request.AssociationId),
            ],
            [
                new Param("format", request.Format),
                new Param("nextToken", request.NextToken),
                new Param("maxResults", request.MaxResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTypesByAssociationResponse>(),
            ListTypesByAssociationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a Type object.
    /// </remarks>
    public Task<UpdateTypeResponse> UpdateType(UpdateTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/types/{typeName}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("typeName", request.TypeName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateTypeResponse>(),
            UpdateTypeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
