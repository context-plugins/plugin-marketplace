using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.OauthUsers;

namespace Beehiiv.Api;

public sealed class OauthUsers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal OauthUsers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Identify user OAuth Scope: identify:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserIdentifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IdentifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve information about the user who authorized the OAuth access token.
    /// </remarks>
    public Task<UserIdentifyResponse> Identify(IdentifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/identify"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserIdentifyResponse>(),
            IdentifyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
