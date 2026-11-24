using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving information about the authenticated user.
/// </summary>
public sealed class UserApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal UserApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List collaborations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Collaboration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCollaborationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of organizations and accounts the current user collaborates with.
    /// </remarks>
    public Task<IReadOnlyList<Collaboration>> GetCollaborations(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me/collaborations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Collaboration>>(),
            GetCollaborationsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get authenticated user
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the currently authenticated user, including name, login, and avatar URL.
    /// </remarks>
    public Task<User> GetCurrentUser(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            GetCurrentUserError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
