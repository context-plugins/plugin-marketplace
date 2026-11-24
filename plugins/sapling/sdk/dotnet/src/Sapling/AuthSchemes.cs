using Sapling.Core;
using Sapling.Core.Authentication;
using Sapling.Core.Authentication.ApiKey;
using Sapling.Core.Authentication.Bearer;
using Sapling.Core.Authentication.OAuth2;
using Sapling.Core.Authentication.OAuth2.AuthorizationCode;

namespace Sapling;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyQuery { get; }
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(SaplingClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKeyQuery =
            ApiKeyQueryScheme.Create(
                "ApiKeyQuery",
                "key",
                options.ApiKeyQueryProvider,
                options.ApiKeyQuery ?? EnvironmentVariables.Get("SAPLING_API_KEY_QUERY"));
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("SAPLING_BEARER_AUTH"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.Default("/oauth/authorize"),
                    server.Default("/oauth/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "offline_access sapling:api");
    }
}
