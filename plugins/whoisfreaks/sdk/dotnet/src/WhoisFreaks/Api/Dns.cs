using System;
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
using WhoisFreaks.Requests.Dns;

namespace WhoisFreaks.Api;

/// <summary>
/// DNS lookup APIs (live, historical, reverse, bulk)
/// </summary>
public sealed class Dns
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Dns(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkDnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsBulkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Up to 100 domains + 100 IPs in one request.
    /// </remarks>
    public Task<BulkDnsResponse> DnsBulk(DnsBulkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/dns/bulk/live"),
            [],
            [new Param("type", request.Type), new Param("format", request.Format)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkDnsResponse>(),
            DnsBulkError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Historical DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HistoricalDnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsHistoricalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// All historical DNS records. 2 credits per page (100 records/page).
    /// </remarks>
    public Task<HistoricalDnsResponse> DnsHistorical(DnsHistoricalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/dns/historical"),
            [],
            [
                new Param("domainName", request.DomainName),
                new Param("type", request.Type),
                new Param("page", request.Page),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HistoricalDnsResponse>(),
            DnsHistoricalError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Live DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsLiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time DNS record lookup. 1 credit per query.
    /// </remarks>
    public Task<DnsResponse> DnsLive(DnsLiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/dns/live"),
            [],
            [
                new Param("type", request.Type),
                new Param("domainName", request.DomainName),
                new Param("ipAddress", request.IpAddress),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DnsResponse>(),
            DnsLiveError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse DNS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReverseDnsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DnsReverseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search domains by IP or DNS value. 5 credits per page.
    /// </remarks>
    public Task<ReverseDnsResponse> DnsReverse(DnsReverseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.1/dns/reverse"),
            [],
            [
                new Param("value", request.Value),
                new Param("type", request.Type),
                new Param("exact", request.Exact),
                new Param("page", request.Page),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReverseDnsResponse>(),
            DnsReverseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
