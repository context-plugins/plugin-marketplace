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
using AmazonAppSync.Requests.Schema;

namespace AmazonAppSync.Api;

public sealed class Schema
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Schema(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Introspection Schema
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetIntrospectionSchemaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntrospectionSchemaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the introspection schema for a GraphQL API.
    /// </remarks>
    public Task<GetIntrospectionSchemaResponse> GetIntrospectionSchema(GetIntrospectionSchemaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/schema"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("format", request.Format), new Param("includeDirectives", request.IncludeDirectives)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetIntrospectionSchemaResponse>(),
            GetIntrospectionSchemaError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Schema Creation Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSchemaCreationStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSchemaCreationStatus2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the current status of a schema creation operation.
    /// </remarks>
    public Task<GetSchemaCreationStatusResponse> GetSchemaCreationStatus2(GetSchemaCreationStatus2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/schemacreation"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSchemaCreationStatusResponse>(),
            GetSchemaCreationStatus2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Schema Creation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartSchemaCreationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSchemaCreation2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
    /// </remarks>
    public Task<StartSchemaCreationResponse> StartSchemaCreation2(StartSchemaCreation2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/schemacreation"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartSchemaCreationResponse>(),
            StartSchemaCreation2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
