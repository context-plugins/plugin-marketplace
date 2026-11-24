using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.UserSessions;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for authenticating users and managing session tokens within Contentstack.
/// </summary>
public sealed class UserSessions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UserSessions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Log in a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LoginResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LoginUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Authenticates a user with their email and password and returns an authtoken for use in subsequent API requests. The authtoken is valid for the duration of the session.
    /// </remarks>
    public Task<LoginResponse> LoginUser(LoginUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/user-session"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LoginResponse>(),
            LoginUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Log out a user
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LogoutUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.
    /// </remarks>
    public Task LogoutUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/user-session"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            LogoutUserError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);
}
