using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using OddsRelay.Core;
using OddsRelay.Core.Authentication;
using OddsRelay.Core.Exceptions;
using OddsRelay.Core.Models;
using OddsRelay.Core.Request;
using OddsRelay.Core.Response;
using OddsRelay.Errors;
using OddsRelay.Models;
using OddsRelay.Models.AnyOf;
using OddsRelay.Requests.Service;

namespace OddsRelay.Api;

/// <summary>
/// Coverage, status, health, liveness and this document.
/// </summary>
public sealed class Service
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Service(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Coverage per venue and sport
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2CoverageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCoverageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One document per region, in two views. <b>Keyless</b> (no <c>Authorization</c> and no <c>x-api-key</c> header): per product, each (venue, sport) <c>live</c> or <c>interrupted_24h</c>, no counts and no times, then <c>markets</c>: per product, the market keys it carries, each one a value its <c>markets</c> filter takes now; the per-address shield only; <c>Cache-Control: public, max-age=60</c> and <c>Vary: Authorization, X-Api-Key, Accept-Encoding</c> on a 200; <c>Access-Control-Allow-Origin: *</c> on every reply, refusals and errors included. <b>Keyed</b> (either header present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their <c>events</c> and <c>last_seen</c>; on an account with a scope, only its products and, per product, the venues and sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is 503 <c>temporarily_unavailable</c>); free; the flood cap applies. Both: <c>region</c> missing means <c>uk</c>, gzip over 1 kB unless refused, 503 until the first document is built.
    /// </remarks>
    public Task<V2CoverageResponse> GetCoverage(GetCoverageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/coverage"),
            [],
            [new Param("region", request.Region)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2CoverageResponse>(),
            GetCoverageError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Board freshness
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Each board's <c>processed_at</c>, odds age (<c>age_s</c>) and event <c>count</c>, and a verdict: <c>degraded</c> when a board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.
    /// </remarks>
    public Task<Health> GetHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            GetHealthError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Liveness, keyless
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLivenessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Is the service up. KEYLESS and before every other check. <c>text/plain</c>, <c>Cache-Control: no-store</c>: the first line is <c>ok</c> (200) or <c>warming</c> (503), then how many boards can be served and any that cannot. Liveness only: board freshness is <c>/v2/health</c> and <c>/v2/status</c>.
    /// </remarks>
    public Task<string> GetLiveness(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/healthz"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            GetLivenessError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// This document, keyless
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOpenApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. <c>ETag</c> is its SHA-256 (<c>-gz</c> on the gzip copy); 304 on a match; gzip unless refused; <c>Cache-Control: public, max-age=300</c>; <c>Access-Control-Allow-Origin: *</c> on every reply, refusals and errors included. Takes no parameters.
    /// </remarks>
    public Task<object> GetOpenApi(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/openapi.json"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetOpenApiError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Product status, keyless
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusOddsRelayServiceApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per product the region serves: <c>ok</c>, <c>slow</c> or <c>stale</c>, judged on each board's odds age (not servable or not held is <c>stale</c>). While boards warm every product reads <c>stale</c> in a 200. KEYLESS: the per-address shield only, a key header is ignored, no token is spent. <c>Cache-Control: public, max-age=10</c> on a 200; <c>Access-Control-Allow-Origin: *</c> on every reply, refusals and errors included. Plain JSON (never gzip).
    /// </remarks>
    public Task<StatusOddsRelayServiceApi> GetStatus(GetStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/status"),
            [],
            [new Param("region", request.Region)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StatusOddsRelayServiceApi>(),
            GetStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
