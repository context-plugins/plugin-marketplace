using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Models;
using WhoisFreaks.Requests.IpReputation;

namespace WhoisFreaks.Api;

/// <summary>
/// IP threat intelligence
/// </summary>
public sealed class IpReputation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IpReputation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk IP Reputation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IpReputationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkIpReputationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Up to 100 IPs.
    /// </remarks>
    public Task<IReadOnlyList<IpReputationResponse>> BulkIpReputation(BulkIpReputationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/security"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<IpReputationResponse>>(),
            BulkIpReputationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Reputation Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IpReputationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IpReputationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.
    /// </remarks>
    public Task<IpReputationResponse> IpReputationInvoke(IpReputationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/security"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IpReputationResponse>(),
            IpReputationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
