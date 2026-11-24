using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DopeSecurity.Core;
using DopeSecurity.Core.Authentication;
using DopeSecurity.Core.Exceptions;
using DopeSecurity.Core.Models;
using DopeSecurity.Core.Request;
using DopeSecurity.Core.Response;
using DopeSecurity.Errors;
using DopeSecurity.Models;
using DopeSecurity.Requests.Authorization;

namespace DopeSecurity.Api;

/// <summary>
/// Everything about authorizing calls to Flightdeck
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
    /// Generate Flightdeck API access token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PartnerOauthTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GenerateAccessTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to generate an access token for use with the Flightdeck API. A valid access token returned from
    /// this API is required in all other Flightdeck API calls.
    /// <para>
    /// Token generation is based on the OAuth 2.0 Client Credentials Flow. The returned token is used within the
    /// HTTP Authorization header as follows:
    /// </para>
    /// <para>
    /// <c>Authorization: Bearer </c>
    /// </para>
    /// <para>
    /// Note:
    /// - The required <c>client_id</c> and <c>client_secret</c> are created by an admin via the dope console.
    /// - Returned access tokens are valid for a limited time period. Clients must check the <c>expires_in</c> value in
    /// the response to generate a new access token before the current one expires.
    /// - The OAuth scopes parameter is not supported and if provided will be ignored. The scopes returned in the access
    /// token are set directly by the authorization server.
    /// </para>
    /// </remarks>
    public Task<PartnerOauthTokenResponse> GenerateAccessToken(GenerateAccessTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/partner/oauth/token"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PartnerOauthTokenResponse>(),
            GenerateAccessTokenError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
