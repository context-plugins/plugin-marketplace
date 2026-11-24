using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CloudKit.Core;
using CloudKit.Core.Authentication;
using CloudKit.Core.ErrorResponse;
using CloudKit.Core.Exceptions;
using CloudKit.Core.Models;
using CloudKit.Core.Request;
using CloudKit.Core.Response;

namespace CloudKit.Api;

public sealed class Tokens
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tokens(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an APNs token for subscriptions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task CreateToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tokens/create"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.CloudKitApiToken, _auth.ServerToServer),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Register an APNs token
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task RegisterToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tokens/register"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.CloudKitApiToken, _auth.ServerToServer),
            requestOptions,
            cancellationToken);
}
