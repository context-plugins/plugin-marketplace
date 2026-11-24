using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.SalesOrders;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage sales orders and lines
/// </summary>
public sealed class SalesOrders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SalesOrders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Sales Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SalesOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSalesOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new sales order in the specified company.
    /// </remarks>
    public Task<SalesOrder> CreateSalesOrder(CreateSalesOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SalesOrder>(),
            CreateSalesOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Sales Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSalesOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a sales order by ID.
    /// </remarks>
    public Task DeleteSalesOrder(DeleteSalesOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders({salesOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("salesOrder_id", request.SalesOrderId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSalesOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Sales Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SalesOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSalesOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific sales order by ID.
    /// </remarks>
    public Task<SalesOrder> GetSalesOrder(GetSalesOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders({salesOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("salesOrder_id", request.SalesOrderId),
            ],
            [new Param("$select", request.Select), new Param("$expand", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SalesOrder>(),
            GetSalesOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sales Order Lines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiSalesOrdersApiSalesOrderLinesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSalesOrderLinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of sales order line items.
    /// </remarks>
    public Task<CompaniesApiSalesOrdersApiSalesOrderLinesResponse> ListSalesOrderLines(ListSalesOrderLinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("salesOrder_id", request.SalesOrderId),
            ],
            [
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$filter", request.Filter),
                new Param("$select", request.Select),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiSalesOrdersApiSalesOrderLinesResponse>(),
            ListSalesOrderLinesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sales Orders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiSalesOrdersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSalesOrdersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of sales order objects from the specified company.
    /// </remarks>
    public Task<CompaniesApiSalesOrdersResponse> ListSalesOrders(ListSalesOrdersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders"),
            [new TemplateParam("company_id", request.CompanyId)],
            [
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$select", request.Select),
                new Param("$expand", request.Expand),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiSalesOrdersResponse>(),
            ListSalesOrdersError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Sales Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SalesOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSalesOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing sales order.
    /// </remarks>
    public Task<SalesOrder> UpdateSalesOrder(UpdateSalesOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/salesOrders({salesOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("salesOrder_id", request.SalesOrderId),
            ],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SalesOrder>(),
            UpdateSalesOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
