using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using ZeroBounce.Core.ErrorResponse;
using ZeroBounce.Core.Models;
using ZeroBounce.Core.Request;
using ZeroBounce.Core.Response;

namespace ZeroBounce.Core.Authentication.OAuth2.AuthorizationCode;

internal sealed class OAuth2AuthorizationCodeStrategy
    : IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
{
    private readonly UrlTemplate _authorizationUrl;
    private readonly UrlTemplate _tokenUrl;
    private readonly RawClient _rawClient;
    private readonly UriFactory _uriFactory;
    private readonly CredentialParamsFactory<HeaderParam> _headerParams;
    private readonly CredentialParamsFactory<Param> _bodyParams;

    public static OAuth2AuthorizationCodeStrategy ForBasicAuthRequest(
        UrlTemplate authorizationUrl, UrlTemplate tokenUrl, RawClient rawClient, UriFactory uriFactory) =>
        new(authorizationUrl, tokenUrl, rawClient, uriFactory, HeaderParams, (_, _) => []);

    public static OAuth2AuthorizationCodeStrategy ForFormBodyRequest(
        UrlTemplate authorizationUrl, UrlTemplate tokenUrl, RawClient rawClient, UriFactory uriFactory) =>
        new(authorizationUrl, tokenUrl, rawClient, uriFactory, (_, _) => [], BodyParams);

    private OAuth2AuthorizationCodeStrategy(
        UrlTemplate authorizationUrl, UrlTemplate tokenUrl, RawClient rawClient,
        UriFactory uriFactory,
        CredentialParamsFactory<HeaderParam> authHeaders,
        CredentialParamsFactory<Param> authBodyParams)
        => (_authorizationUrl, _tokenUrl, _rawClient, _uriFactory, _headerParams, _bodyParams) =
            (authorizationUrl, tokenUrl, rawClient, uriFactory, authHeaders, authBodyParams);

    public async Task<OAuthTokenRefreshable> GetToken(
        OAuth2AuthorizationCodeCredentials credentials, string? scope, CancellationToken ct)
    {
        if (credentials.PromptForAuthorizationCode is null)
            throw new InvalidOperationException(
                $"{nameof(OAuth2AuthorizationCodeCredentials.PromptForAuthorizationCode)} is required " +
                "for the OAuth2 Authorization Code flow.");

        if (credentials.Pkce is null && credentials.ClientSecret is null or "")
            throw new InvalidOperationException(
                $"{nameof(OAuth2AuthorizationCodeCredentials.ClientSecret)} is required when PKCE is disabled.");

        var pkce = credentials.Pkce is { } method ? GeneratePkce(method) : null;
        var authUrl = _uriFactory.Create(
            _authorizationUrl, BuildAuthorizationQueryParams(credentials, scope, pkce), []).AbsoluteUri;
        var code = await credentials.PromptForAuthorizationCode(authUrl, ct).ConfigureAwait(false);

        return await _rawClient.Execute(
            _tokenUrl, [], [],
            [.. _headerParams(credentials.ClientId, credentials.ClientSecret), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create([
                new Param("grant_type", "authorization_code"),
                new Param("code", code),
                new Param("redirect_uri", credentials.RedirectUri),
                .. CodeVerifierParams(pkce),
                .. _bodyParams(credentials.ClientId, credentials.ClientSecret),
            ]),
            JsonResponse.Create<OAuthTokenRefreshable>(),
            RawErrorResponse.Instance, 
            AuthScheme.None,
            null,
            ct).ConfigureAwait(false);
    }

    public async Task<OAuthTokenRefreshable?> TryRefreshToken(
        OAuth2AuthorizationCodeCredentials credentials, string refreshToken, CancellationToken ct)
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

    private static IReadOnlyList<Param> CodeVerifierParams(PkceValues? pkce) =>
        pkce is null ? [] : [new Param("code_verifier", pkce.Verifier)];

    private static IReadOnlyList<HeaderParam> HeaderParams(string clientId, string? clientSecret)
    {
        if (clientSecret is null)
            throw new InvalidOperationException(
                $"Basic auth requires a client secret. For public clients, enable PKCE by setting " +
                $"{nameof(OAuth2AuthorizationCodeCredentials)}.{nameof(OAuth2AuthorizationCodeCredentials.Pkce)} " +
                $"to {nameof(PkceMethod)}.{nameof(PkceMethod.S256)}.");
        var credential = $"{clientId}:{clientSecret}";
        var encoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(credential));
        return [new HeaderParam("Authorization", $"Basic {encoded}")];
    }

    private static IReadOnlyList<Param> BodyParams(string clientId, string? clientSecret) =>
        [new("client_id", clientId), new("client_secret", clientSecret)];

    private static IReadOnlyCollection<Param> BuildAuthorizationQueryParams(
        OAuth2AuthorizationCodeCredentials credentials, string? scope, PkceValues? pkce)
    {
        List<Param> queryParams =
        [
            new("response_type", "code"),
            new("client_id", credentials.ClientId),
            new("redirect_uri", credentials.RedirectUri),
        ];
        if (scope is not null)
            queryParams.Add(new Param("scope", scope));
        if (credentials.State is { Length: > 0 })
            queryParams.Add(new Param("state", credentials.State));
        if (pkce is not null)
        {
            queryParams.Add(new Param("code_challenge", pkce.Challenge));
            queryParams.Add(new Param("code_challenge_method", pkce.Method.Value));
        }
        return queryParams;
    }
    
    private static PkceValues GeneratePkce(PkceMethod method)
    {
        var bytes = new byte[32];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(bytes);
        var verifier = Base64UrlEncode(bytes);
        var challenge = method.Match(
            onS256: () => Base64UrlEncode(Sha256Hash(Encoding.ASCII.GetBytes(verifier))),
            onPlain: () => verifier);
        return new PkceValues(verifier, challenge, method);
    }

    private static byte[] Sha256Hash(byte[] input)
    {
        using var sha256 = SHA256.Create();
        return sha256.ComputeHash(input);
    }

    private static string Base64UrlEncode(byte[] bytes) =>
        Convert.ToBase64String(bytes).TrimEnd('=').Replace('+', '-').Replace('/', '_');

    private sealed record PkceValues(string Verifier, string Challenge, PkceMethod Method);
}
