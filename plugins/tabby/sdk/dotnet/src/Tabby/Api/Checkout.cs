using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Tabby.Core;
using Tabby.Core.Exceptions;
using Tabby.Core.Models;
using Tabby.Core.Request;
using Tabby.Core.Response;
using Tabby.Errors;
using Tabby.Models;
using Tabby.Requests.Checkout;

namespace Tabby.Api;

/// <summary>
/// Checkout is a whole process of customer data collection and payment authorization.
/// </summary>
public sealed class Checkout
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Checkout(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an existing checkout session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutSession"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCheckoutSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to retrieve the token (only if tokens used in your integration )
    /// </remarks>
    public Task<CheckoutSession> GetCheckoutSession(GetCheckoutSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/checkout/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutSession>(),
            GetCheckoutSessionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutSession"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCheckoutSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment and Session.
    /// </remarks>
    public Task<CheckoutSession> PostCheckoutSession(PostCheckoutSessionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/checkout"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CheckoutSession>(),
            PostCheckoutSessionError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
