using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;

namespace Hud.Api;

public sealed class OAuth
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal OAuth(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Join Oauth App Team
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OAuthJoinResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JoinOauthAppTeamV2OauthJoinPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Make the OAuth access token's user a member of its application's team.
    /// <para>
    /// Idempotent. A user who is already a member keeps their role; a new user
    /// joins as an external member, whom a team admin can promote. A user who was
    /// removed from the team is refused until a team admin invites them again.
    /// Every other endpoint answers ``principal_not_found`` for the token until
    /// its user has joined.
    /// </para>
    /// </remarks>
    public Task<OAuthJoinResponse> JoinOauthAppTeamV2OauthJoinPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/oauth/join"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OAuthJoinResponse>(),
            JoinOauthAppTeamV2OauthJoinPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
