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
using Beehiiv.Requests.Authorizations;

namespace Beehiiv.Api;

public sealed class Authorizations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Authorizations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Authorize
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AuthorizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed), then redirects back to your <c>redirect_uri</c> with a <c>code</c> and <c>state</c>.
    /// </remarks>
    public Task Authorize(AuthorizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultOAuth2AuthorizationsApi("/oauth/authorize"),
            [],
            [
                new Param("client_id", request.ClientId),
                new Param("redirect_uri", request.RedirectUri),
                new Param("response_type", request.ResponseType),
                new Param("scope", request.Scope),
                new Param("state", request.State),
                new Param("code_challenge", request.CodeChallenge),
                new Param("code_challenge_method", request.CodeChallengeMethod),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AuthorizeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
