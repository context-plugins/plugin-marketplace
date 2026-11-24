using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core;
using WhoisFreaks.Core.Authentication;
using WhoisFreaks.Core.Exceptions;
using WhoisFreaks.Core.Request;
using WhoisFreaks.Core.Response;
using WhoisFreaks.Errors;
using WhoisFreaks.Models;

namespace WhoisFreaks.Api;

/// <summary>
/// Account, API key, and usage utilities
/// </summary>
public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Account Usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccountUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AccountUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Account Usage. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<AccountUsageResponse> AccountUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/whoisapi/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccountUsageResponse>(),
            AccountUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Database File Status (Public)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatabaseFileStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatabaseFileStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// No API key required. Returns freshness of all downloadable files.
    /// </remarks>
    public Task<DatabaseFileStatus> DatabaseFileStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3.4/status"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatabaseFileStatus>(),
            DatabaseFileStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rotate API Key
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RotateApiKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rotate API Key. Returns the file/snapshot described by this operation.
    /// </remarks>
    public Task<string> RotateApiKey(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1.0/api-key/rotate"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            RotateApiKeyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
