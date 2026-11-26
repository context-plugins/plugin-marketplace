using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Dynamics365BusinessCentral.Core;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Exceptions;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Core.Request;
using Dynamics365BusinessCentral.Core.Response;
using Dynamics365BusinessCentral.Errors;
using Dynamics365BusinessCentral.Models;
using Dynamics365BusinessCentral.Requests.PurchaseOrders;

namespace Dynamics365BusinessCentral.Api;

/// <summary>
/// Manage purchase orders and lines
/// </summary>
public sealed class PurchaseOrders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PurchaseOrders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Purchase Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PurchaseOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePurchaseOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new purchase order in the specified company.
    /// </remarks>
    public Task<PurchaseOrder> CreatePurchaseOrder(CreatePurchaseOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PurchaseOrder>(),
            CreatePurchaseOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Purchase Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePurchaseOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a purchase order by ID.
    /// </remarks>
    public Task DeletePurchaseOrder(DeletePurchaseOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("purchaseOrder_id", request.PurchaseOrderId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeletePurchaseOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Purchase Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PurchaseOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPurchaseOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific purchase order by ID.
    /// </remarks>
    public Task<PurchaseOrder> GetPurchaseOrder(GetPurchaseOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("purchaseOrder_id", request.PurchaseOrderId),
            ],
            [new Param("$select", request.Select), new Param("$expand", request.Expand)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PurchaseOrder>(),
            GetPurchaseOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Purchase Order Lines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPurchaseOrderLinesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of purchase order line items.
    /// </remarks>
    public Task<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse> ListPurchaseOrderLines(ListPurchaseOrderLinesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("purchaseOrder_id", request.PurchaseOrderId),
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
            JsonResponse.Create<CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse>(),
            ListPurchaseOrderLinesError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Purchase Orders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiPurchaseOrdersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPurchaseOrdersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of purchase order objects from the specified company.
    /// </remarks>
    public Task<CompaniesApiPurchaseOrdersResponse> ListPurchaseOrders(ListPurchaseOrdersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders"),
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
            JsonResponse.Create<CompaniesApiPurchaseOrdersResponse>(),
            ListPurchaseOrdersError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Purchase Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PurchaseOrder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePurchaseOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing purchase order.
    /// </remarks>
    public Task<PurchaseOrder> UpdatePurchaseOrder(UpdatePurchaseOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            [
                new TemplateParam("company_id", request.CompanyId),
                new TemplateParam("purchaseOrder_id", request.PurchaseOrderId),
            ],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PurchaseOrder>(),
            UpdatePurchaseOrderError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
