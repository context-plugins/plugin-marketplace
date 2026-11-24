using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using TranscriptFetch.Core;
using TranscriptFetch.Core.Authentication;
using TranscriptFetch.Core.ErrorResponse;
using TranscriptFetch.Core.Exceptions;
using TranscriptFetch.Core.Request;
using TranscriptFetch.Core.Response;
using TranscriptFetch.Errors;
using TranscriptFetch.Models;

namespace TranscriptFetch.Api;

/// <summary>
/// Service health and metadata
/// </summary>
public sealed class SystemApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SystemApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Health check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.
    /// </remarks>
    public Task<Health> GetApiV2Health(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate your key &amp; check balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV2MeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.
    /// </remarks>
    public Task<SuccessEnvelope> GetApiV2Me(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessEnvelope>(),
            GetApiV2MeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Health check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Health"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication required and no credits used.
    /// </remarks>
    public Task<Health> HealthCheck(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Health>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Validate your key &amp; check balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessEnvelope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for programmatic balance checks and as a credential test in integrations.
    /// </remarks>
    public Task<SuccessEnvelope> Me(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessEnvelope>(),
            MeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
