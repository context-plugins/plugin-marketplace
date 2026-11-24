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
using WhoisFreaks.Requests.Geolocation;

namespace WhoisFreaks.Api;

/// <summary>
/// IP geolocation lookup
/// </summary>
public sealed class Geolocation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Geolocation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk IP Geolocation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="GeolocationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkGeolocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Up to 100 IPs.
    /// </remarks>
    public Task<IReadOnlyList<GeolocationResponse>> BulkGeolocation(BulkGeolocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/geolocation"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<GeolocationResponse>>(),
            BulkGeolocationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Geolocation Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeolocationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GeolocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get location, ASN, currency for an IP. 1 credit.
    /// </remarks>
    public Task<GeolocationResponse> GeolocationInvoke(GeolocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/geolocation"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeolocationResponse>(),
            GeolocationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
