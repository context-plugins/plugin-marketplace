using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FlowAccount.Core;
using FlowAccount.Core.ErrorResponse;
using FlowAccount.Core.Exceptions;
using FlowAccount.Core.Models;
using FlowAccount.Core.Request;
using FlowAccount.Core.Response;
using FlowAccount.Models;
using FlowAccount.Requests.Products;

namespace FlowAccount.Api;

public sealed class Products
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Products(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Products create
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfISimpleListResultOfIProductResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfISimpleListResultOfIProductResult> ProductsCreate(ProductsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiResponseOfISimpleListResultOfIProductResult>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Products get by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfISimpleListResultOfIProductResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfISimpleListResultOfIProductResult> ProductsGetById(ProductsGetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseOfISimpleListResultOfIProductResult>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Products get list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfISimpleListResultOfIProductResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfISimpleListResultOfIProductResult> ProductsGetList(ProductsGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products"),
            [new TemplateParam("culture", request.Culture)],
            [
                new Param("SortBy", request.SortBy),
                new Param("CurrentPage", request.CurrentPage),
                new Param("PageSize", request.PageSize),
                new Param("Filter", request.Filter),
                new Param("SearchString", request.SearchString),
                new Param("CustomDocumentModels", request.CustomDocumentModels),
                new Param("Range", request.Range),
                new Param("Month", request.Month),
                new Param("Year", request.Year),
                new Param("StartDate", request.StartDate),
                new Param("EndDate", request.EndDate),
                new Param("id", request.Id),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseOfISimpleListResultOfIProductResult>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Products remove
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfBoolean"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfBoolean> ProductsRemove(ProductsRemoveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseOfBoolean>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Products search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfISimpleListResultOfIProductResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfISimpleListResultOfIProductResult> ProductsSearch(ProductsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products/search"),
            [new TemplateParam("culture", request.Culture)],
            [
                new Param("SortBy", request.SortBy),
                new Param("CurrentPage", request.CurrentPage),
                new Param("PageSize", request.PageSize),
                new Param("Filter", request.Filter),
                new Param("SearchString", request.SearchString),
                new Param("CustomDocumentModels", request.CustomDocumentModels),
                new Param("Range", request.Range),
                new Param("Month", request.Month),
                new Param("Year", request.Year),
                new Param("StartDate", request.StartDate),
                new Param("EndDate", request.EndDate),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseOfISimpleListResultOfIProductResult>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Products update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseOfISimpleListResultOfIProductResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiResponseOfISimpleListResultOfIProductResult> ProductsUpdate(ProductsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/Products/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiResponseOfISimpleListResultOfIProductResult>(),
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
