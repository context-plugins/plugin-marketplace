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
using Upstox.Requests.Charge;

namespace Upstox.Api;

public sealed class Charge
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Charge(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Brokerage details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetBrokerageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBrokerageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Compute Brokerage Charges
    /// </remarks>
    public Task<GetBrokerageResponse> GetBrokerage(GetBrokerageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/charges/brokerage"),
            [],
            [
                new Param("instrument_token", request.InstrumentToken),
                new Param("quantity", request.Quantity),
                new Param("product", request.Product),
                new Param("transaction_type", request.TransactionType),
                new Param("price", request.Price),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetBrokerageResponse>(),
            GetBrokerageError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Calculate Margin
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostMarginResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostMarginError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Compute Margin
    /// </remarks>
    public Task<PostMarginResponse> PostMargin(PostMarginRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/charges/margin"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PostMarginResponse>(),
            PostMarginError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
