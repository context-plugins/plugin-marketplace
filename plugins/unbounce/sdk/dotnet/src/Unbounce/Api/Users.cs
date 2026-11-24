using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Unbounce.Core;
using Unbounce.Core.Authentication;
using Unbounce.Core.ErrorResponse;
using Unbounce.Core.Exceptions;
using Unbounce.Core.Request;
using Unbounce.Core.Response;
using Unbounce.Models;

namespace Unbounce.Api;

/// <summary>
/// Users in the account
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
    /// List users
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<UsersResponse> ListUsers(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
