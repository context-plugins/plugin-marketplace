using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instagram.Core;
using Instagram.Core.Authentication;
using Instagram.Core.ErrorResponse;
using Instagram.Core.Exceptions;
using Instagram.Core.Models;
using Instagram.Core.Request;
using Instagram.Core.Response;
using Instagram.Models;
using Instagram.Requests.Users;

namespace Instagram.Api;

/// <summary>
/// Instagram Business and Creator account profiles
/// </summary>
public sealed class Users
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Users(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Instagram Get Business Discovery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BusinessDiscoveryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get data about other Instagram Business or Creator accounts.
    /// </remarks>
    public Task<BusinessDiscoveryResponse> GetBusinessDiscovery(GetBusinessDiscoveryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{user_id}/business_discovery"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("fields", request.Fields), new Param("access_token", request.AccessToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BusinessDiscoveryResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get User Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="User"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get fields and edges on an Instagram Business or Creator account.
    /// </remarks>
    public Task<User> GetUser(GetUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("access_token", request.AccessToken), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<User>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
