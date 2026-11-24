using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;

namespace DoiT.Core.Authentication.OAuth2.ClientCredentials;

internal sealed class OAuth2ClientCredentialsStrategy : IOAuth2TokenStrategy<OAuth2ClientCredentials>
{
    private readonly UrlTemplate _tokenUrl;
    private readonly RawClient _rawClient;
    private readonly CredentialParamsFactory<HeaderParam> _headerParams;
    private readonly CredentialParamsFactory<Param> _bodyParams;

    public static OAuth2ClientCredentialsStrategy ForBasicAuthRequest(UrlTemplate tokenUrl, RawClient rawClient) =>
        new(tokenUrl, rawClient, HeaderParams, (_, _) => []);

    public static OAuth2ClientCredentialsStrategy ForFormBodyRequest(UrlTemplate tokenUrl, RawClient rawClient) =>
        new(tokenUrl, rawClient, (_, _) => [], BodyParams);

    private OAuth2ClientCredentialsStrategy(
        UrlTemplate tokenUrl, RawClient rawClient,
        CredentialParamsFactory<HeaderParam> authHeaders,
        CredentialParamsFactory<Param> authBodyParams)
        => (_tokenUrl, _rawClient, _headerParams, _bodyParams) =
            (tokenUrl, rawClient, authHeaders, authBodyParams);

    public Task<OAuthToken> GetToken(OAuth2ClientCredentials credentials, string? scope, CancellationToken ct) =>
        _rawClient.Execute(
            _tokenUrl, [], [],
            [
                .. _headerParams(credentials.ClientId, credentials.ClientSecret),
                new HeaderParam("Idempotency-Key", Guid.NewGuid())
            ],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create([
                new Param("grant_type", "client_credentials"),
                .. ScopeParams(scope),
                .. _bodyParams(credentials.ClientId, credentials.ClientSecret),
            ]),
            JsonResponse.Create<OAuthToken>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            null,
            ct);

    private static IReadOnlyList<Param> ScopeParams(string? scope) =>
        scope is null ? [] : [new Param("scope", scope)];

    private static IReadOnlyList<HeaderParam> HeaderParams(string clientId, string? clientSecret)
    {
        var credential = $"{clientId}:{clientSecret}";
        var encoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(credential));
        return [new HeaderParam("Authorization", $"Basic {encoded}")];
    }

    private static IReadOnlyList<Param> BodyParams(string clientId, string? clientSecret) =>
        [new("client_id", clientId), new("client_secret", clientSecret)];
}
