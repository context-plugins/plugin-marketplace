using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core;
using Leadspace.Core.Authentication;
using Leadspace.Core.Exceptions;
using Leadspace.Core.Models;
using Leadspace.Core.Request;
using Leadspace.Core.Response;
using Leadspace.Errors;
using Leadspace.Models;
using Leadspace.Requests.Authorization;

namespace Leadspace.Api;

/// <summary>
/// OAuth 2.0 token issuance and refresh
/// </summary>
public sealed class Authorization
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Authorization(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Request an OAuth 2.0 access token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthorizationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAuthorizationTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire every 24 hours.
    /// </remarks>
    public Task<AuthorizationResponse> CreateAuthorizationToken(CreateAuthorizationTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/oauth/authorize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AuthorizationResponse>(),
            CreateAuthorizationTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refresh an OAuth 2.0 access token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthorizationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefreshAuthorizationTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchanges a refreshToken for a new bearer token.
    /// </remarks>
    public Task<AuthorizationResponse> RefreshAuthorizationToken(RefreshAuthorizationTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/oauth/authorize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AuthorizationResponse>(),
            RefreshAuthorizationTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
