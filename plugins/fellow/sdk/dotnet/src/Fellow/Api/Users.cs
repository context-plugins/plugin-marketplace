using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fellow.Core;
using Fellow.Core.ErrorResponse;
using Fellow.Core.Exceptions;
using Fellow.Core.Request;
using Fellow.Core.Response;
using Fellow.Models;

namespace Fellow.Api;

/// <summary>
/// Retrieve information about the currently authenticated user and their workspace.
/// </summary>
public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Users(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Authenticated User
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AuthenticatedUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about the authenticated user and their workspace.
    /// </remarks>
    public Task<AuthenticatedUserResponse> AppsDeveloperApiApiGetAuthenticatedUser(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/me"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AuthenticatedUserResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);
}
