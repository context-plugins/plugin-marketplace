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
using FlowAccount.Requests.ProductInventory;

namespace FlowAccount.Api;

public sealed class ProductInventory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProductInventory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Product inventory adjust
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ProductInventoryAdjust(ProductInventoryAdjustRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/product-inventories/adjust"),
            [new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Product inventory delete product inventory
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ProductInventoryDeleteProductInventory(ProductInventoryDeleteProductInventoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/product-inventories/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Product inventory get list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<BinaryContent> ProductInventoryGetList(ProductInventoryGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{culture}/product-inventories/{id}"),
            [new TemplateParam("id", request.Id), new TemplateParam("culture", request.Culture)],
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
            BinaryResponse.Instance,
            RawErrorResponse.Instance,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
