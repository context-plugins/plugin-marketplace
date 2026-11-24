using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Ipo;

namespace Upstox.Api;

public sealed class Ipo
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ipo(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Apply for IPO
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoApplyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApplyForIpoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Places an IPO application for the authenticated user.
    /// </remarks>
    public Task<IpoApplyResponse> ApplyForIpo(ApplyForIpoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos/orders"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IpoApplyResponse>(),
            ApplyForIpoError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel IPO Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoCancelResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelIpoOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels/deletes an IPO order of the authenticated user by order id.
    /// </remarks>
    public Task<IpoCancelResponse> CancelIpoOrder(CancelIpoOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos/orders/{order_id}"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<IpoCancelResponse>(),
            CancelIpoOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get IPO Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIpoDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches detailed information for an IPO by its slug ID.
    /// </remarks>
    public Task<IpoDetailsResponse> GetIpoDetails(GetIpoDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpoDetailsResponse>(),
            GetIpoDetailsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get IPO Listing
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoListingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIpoListingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches list of IPOs filtered by status.
    /// </remarks>
    public Task<IpoListingResponse> GetIpoListing(GetIpoListingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos"),
            [],
            [
                new Param("status", request.Status),
                new Param("issue_type", request.IssueType),
                new Param("page_number", request.PageNumber),
                new Param("records", request.Records),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpoListingResponse>(),
            GetIpoListingError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get IPO Order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoOrderDetailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIpoOrderByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a single IPO order of the authenticated user by order id.
    /// </remarks>
    public Task<IpoOrderDetailResponse> GetIpoOrderById(GetIpoOrderByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos/orders/{order_id}"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpoOrderDetailResponse>(),
            GetIpoOrderByIdError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get IPO Orders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpoOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIpoOrdersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the authenticated user's IPO orders/applications.
    /// </remarks>
    public Task<IpoOrderResponse> GetIpoOrders(GetIpoOrdersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/ipos/orders"),
            [],
            [new Param("page_number", request.PageNumber), new Param("records", request.Records)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpoOrderResponse>(),
            GetIpoOrdersError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
