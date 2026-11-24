using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Identities;

namespace Basiq.Api;

public sealed class Identities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Identities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve identities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdentitiesGetResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserIdentitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list with a data property that contains an array of user identities. Each entry in the array is a separate object. If no data is returned, the resulting array will be empty.
    /// </remarks>
    public Task<IdentitiesGetResponseResource> GetUserIdentities(GetUserIdentitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/identities"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IdentitiesGetResponseResource>(),
            GetUserIdentitiesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersIdentitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserIdentityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific identity object.
    /// </remarks>
    public Task<UsersIdentitiesResponse> GetUserIdentity(GetUserIdentityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/identities/{identityId}"),
            [new TemplateParam("userId", request.UserId), new TemplateParam("identityId", request.IdentityId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UsersIdentitiesResponse>(),
            GetUserIdentityError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
