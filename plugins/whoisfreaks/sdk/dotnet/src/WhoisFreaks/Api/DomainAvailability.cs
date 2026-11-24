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
using WhoisFreaks.Requests.DomainAvailability;

namespace WhoisFreaks.Api;

/// <summary>
/// Check domain availability
/// </summary>
public sealed class DomainAvailability
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DomainAvailability(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Bulk Domain Availability Check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkDomainAvailabilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkDomainAvailabilityV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100 domains per request. 1 credit per domain checked.
    /// </remarks>
    public Task<BulkDomainAvailabilityResponse> BulkDomainAvailabilityV2(BulkDomainAvailabilityV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/domain/availability"),
            [],
            [new Param("domain", request.Domain), new Param("format", request.Format)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkDomainAvailabilityResponse>(),
            BulkDomainAvailabilityV2Error.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Domain Availability Check with Suggestions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DomainAvailabilityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DomainAvailabilityV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per domain checked. sug=false checks only the queried domain; sug=true returns up to <c>count</c> (max 100) TLD suggestions.
    /// </remarks>
    public Task<DomainAvailabilityResponse> DomainAvailabilityV2(DomainAvailabilityV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2.0/domain/availability"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("sug", request.Sug),
                new Param("count", request.Count),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DomainAvailabilityResponse>(),
            DomainAvailabilityV2Error.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
