using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.ErrorResponse;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Models;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Models;
using WhoisFreaks.Requests.Whois;

namespace WhoisFreaks.Api;

/// <summary>
/// WHOIS lookup APIs (live, historical, reverse, bulk)
/// </summary>
public sealed class Whois
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Whois(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk WHOIS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkWhoisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkWhoisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Up to 100 domains in one request. 1 credit per successful domain.
    /// </remarks>
    public Task<BulkWhoisResponse> BulkWhois(BulkWhoisRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/bulkwhois/live"),
            [],
            [new Param("format", request.Format)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkWhoisResponse>(),
            BulkWhoisError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Historical WHOIS records for a domain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WhoisHistoricalResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<WhoisHistoricalResponse> WhoisHistory(WhoisHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/whois/history"),
            [],
            [
                new Param("domainName", request.DomainName),
                new Param("page", request.Page),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WhoisHistoricalResponse>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Live WHOIS Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WhoisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WhoisLiveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time WHOIS lookup from authoritative servers. Cost 1 credit.
    /// </remarks>
    public Task<WhoisResponse> WhoisLive(WhoisLiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/whois/live"),
            [],
            [new Param("domainName", request.DomainName), new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WhoisResponse>(),
            WhoisLiveError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse WHOIS lookup by keyword
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReverseWhoisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ReverseWhoisResponse> WhoisReverse(WhoisReverseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/whois/reverse"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("page", request.Page),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReverseWhoisResponse>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
