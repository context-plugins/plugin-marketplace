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
using AmazonAppSync.Requests.GraphqlApis;

namespace AmazonAppSync.Api;

public sealed class GraphqlApis
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GraphqlApis(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGraphqlApi2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a GraphqlApi object.
    /// </remarks>
    public Task<CreateGraphqlApiResponse> CreateGraphqlApi2(CreateGraphqlApi2Request request,
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
            CreateGraphqlApi2Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGraphqlApi2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a GraphqlApi object.
    /// </remarks>
    public Task<object> DeleteGraphqlApi2(DeleteGraphqlApi2Request request,
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
            DeleteGraphqlApi2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Evaluate Mapping Template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EvaluateMappingTemplateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EvaluateMappingTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evaluates a given template and returns the response. The mapping template can be a request or response template. Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type. Mapping templates are written in the Apache Velocity Template Language (VTL).
    /// </remarks>
    public Task<EvaluateMappingTemplateResponse> EvaluateMappingTemplate(EvaluateMappingTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dataplane-evaluatetemplate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EvaluateMappingTemplateResponse>(),
            EvaluateMappingTemplateError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetGraphqlApi2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a GraphqlApi object.
    /// </remarks>
    public Task<GetGraphqlApiResponse> GetGraphqlApi2(GetGraphqlApi2Request request,
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
            GetGraphqlApi2Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ListGraphqlApis2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists your GraphQL APIs.
    /// </remarks>
    public Task<ListGraphqlApisResponse> ListGraphqlApis2(ListGraphqlApis2Request request,
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
            ListGraphqlApis2Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGraphqlApi2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a GraphqlApi object.
    /// </remarks>
    public Task<UpdateGraphqlApiResponse> UpdateGraphqlApi2(UpdateGraphqlApi2Request request,
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
            UpdateGraphqlApi2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
