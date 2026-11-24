using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Checkouts;

namespace Paid.Api;

public sealed class Checkouts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Checkouts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive checkout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveCheckoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive a checkout by ID
    /// </remarks>
    public Task<object> ArchiveCheckout(ArchiveCheckoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/checkouts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ArchiveCheckoutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a checkout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Checkout"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCheckoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a checkout link that generates a URL for a customer to complete a purchase
    /// </remarks>
    public Task<Checkout> CreateCheckout(CreateCheckoutOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/checkouts/"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Checkout>(),
            CreateCheckoutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get checkout
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutDetails"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCheckoutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a checkout by ID
    /// </remarks>
    public Task<CheckoutDetails> GetCheckout(GetCheckoutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/checkouts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutDetails>(),
            GetCheckoutError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List checkouts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCheckoutsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of checkouts for the organization
    /// </remarks>
    public Task<CheckoutListResponse> ListCheckouts(ListCheckoutsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/checkouts/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("status", request.Status),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutListResponse>(),
            ListCheckoutsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
