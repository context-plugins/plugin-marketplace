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
using AmazonAppSync.Requests.DataSources;

namespace AmazonAppSync.Api;

public sealed class DataSources
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataSources(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Data Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateDataSourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDataSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a DataSource object.
    /// </remarks>
    public Task<CreateDataSourceResponse> CreateDataSource(CreateDataSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/datasources"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateDataSourceResponse>(),
            CreateDataSourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Data Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDataSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a DataSource object.
    /// </remarks>
    public Task<object> DeleteDataSource(DeleteDataSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/datasources/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteDataSourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Data Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetDataSourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDataSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a DataSource object.
    /// </remarks>
    public Task<GetDataSourceResponse> GetDataSource(GetDataSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/datasources/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetDataSourceResponse>(),
            GetDataSourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Data Source Introspection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetDataSourceIntrospectionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDataSourceIntrospectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.
    /// </remarks>
    public Task<GetDataSourceIntrospectionResponse> GetDataSourceIntrospection(GetDataSourceIntrospectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/datasources/introspections/{introspectionId}"),
            [new TemplateParam("introspectionId", request.IntrospectionId)],
            [
                new Param("includeModelsSDL", request.IncludeModelsSdl),
                new Param("nextToken", request.NextToken),
                new Param("maxResults", request.MaxResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetDataSourceIntrospectionResponse>(),
            GetDataSourceIntrospectionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Data Sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDataSourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDataSourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the data sources for a given API.
    /// </remarks>
    public Task<ListDataSourcesResponse> ListDataSources(ListDataSourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/datasources"),
            [new TemplateParam("apiId", request.ApiId)],
            [new Param("nextToken", request.NextToken), new Param("maxResults", request.MaxResults)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDataSourcesResponse>(),
            ListDataSourcesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Data Source Introspection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartDataSourceIntrospectionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartDataSourceIntrospectionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new introspection. Returns the introspectionId of the new introspection after its creation.
    /// </remarks>
    public Task<StartDataSourceIntrospectionResponse> StartDataSourceIntrospection(StartDataSourceIntrospectionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/datasources/introspections"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartDataSourceIntrospectionResponse>(),
            StartDataSourceIntrospectionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Data Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UpdateDataSourceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDataSourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a DataSource object.
    /// </remarks>
    public Task<UpdateDataSourceResponse> UpdateDataSource(UpdateDataSourceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/datasources/{name}"),
            [new TemplateParam("apiId", request.ApiId), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UpdateDataSourceResponse>(),
            UpdateDataSourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
