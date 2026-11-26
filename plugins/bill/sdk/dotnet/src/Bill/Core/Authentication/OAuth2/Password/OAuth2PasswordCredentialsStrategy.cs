using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core.ErrorResponse;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;

namespace Bill.Core.Authentication.OAuth2.Password;

internal sealed class OAuth2PasswordCredentialsStrategy
    : IOAuth2RefreshableTokenStrategy<OAuth2PasswordCredentials>
{
    private readonly UrlTemplate _tokenUrl;
    private readonly RawClient _rawClient;
    private readonly CredentialParamsFactory<HeaderParam> _headerParams;
    private readonly CredentialParamsFactory<Param> _bodyParams;

    public static OAuth2PasswordCredentialsStrategy ForBasicAuthRequest(UrlTemplate tokenUrl, RawClient rawClient) =>
        new(tokenUrl, rawClient, HeaderParams, (_, _) => []);

    public static OAuth2PasswordCredentialsStrategy ForFormBodyRequest(UrlTemplate tokenUrl, RawClient rawClient) =>
        new(tokenUrl, rawClient, (_, _) => [], BodyParams);

    private OAuth2PasswordCredentialsStrategy(
        UrlTemplate tokenUrl, RawClient rawClient,
        CredentialParamsFactory<HeaderParam> authHeaders,
        CredentialParamsFactory<Param> authBodyParams)
        => (_tokenUrl, _rawClient, _headerParams, _bodyParams) =
            (tokenUrl, rawClient, authHeaders, authBodyParams);

    public Task<OAuthTokenRefreshable> GetToken(OAuth2PasswordCredentials credentials, string? scope,
        CancellationToken ct) =>
        _rawClient.Execute(
            _tokenUrl, [], [],
            [
                .. _headerParams(credentials.ClientId, credentials.ClientSecret),
                new HeaderParam("Idempotency-Key", Guid.NewGuid())
            ],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create([
                new Param("grant_type", "password"),
                new Param("username", credentials.Username),
                new Param("password", credentials.Password),
                .. ScopeParams(scope),
                .. _bodyParams(credentials.ClientId, credentials.ClientSecret),
            ]),
            JsonResponse.Create<OAuthTokenRefreshable>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            null,
            ct);

    public async Task<OAuthTokenRefreshable?> TryRefreshToken(
        OAuth2PasswordCredentials credentials, string refreshToken, CancellationToken ct)
    {
        var result = await _rawClient.ExecuteResult(
            _tokenUrl, [], [],
            [
                .. _headerParams(credentials.ClientId, credentials.ClientSecret),
                new HeaderParam("Idempotency-Key", Guid.NewGuid())
            ],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create([
                new Param("grant_type", "refresh_token"),
                new Param("refresh_token", refreshToken),
                .. _bodyParams(credentials.ClientId, credentials.ClientSecret),
            ]),
            JsonResponse.Create<OAuthTokenRefreshable>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            null,
            ct).ConfigureAwait(false);

        return result.TryGetResponse(out var token) ? token : null;
    }

    private static IReadOnlyList<Param> ScopeParams(string? scope) =>
        scope is null ? [] : [new Param("scope", scope)];

    private static IReadOnlyList<HeaderParam> HeaderParams(string clientId, string? clientSecret)
    {
        var credential = $"{clientId}:{clientSecret ?? string.Empty}";
        var encoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(credential));
        return [new HeaderParam("Authorization", $"Basic {encoded}")];
    }

    private static IReadOnlyList<Param> BodyParams(string clientId, string? clientSecret) =>
        [new("client_id", clientId), new("client_secret", clientSecret)];
}
