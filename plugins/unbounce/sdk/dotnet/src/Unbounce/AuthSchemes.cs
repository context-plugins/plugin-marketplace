using Unbounce.Core;
using Unbounce.Core.Authentication;
using Unbounce.Core.Authentication.Basic;
using Unbounce.Core.Authentication.OAuth2;
using Unbounce.Core.Authentication.OAuth2.AuthorizationCode;

namespace Unbounce;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(UnbounceClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKeyAuth =
            BasicAuthScheme.Create(
                "ApiKeyAuth",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth.WithEnvironmentDefaults(
                    "UNBOUNCE_API_KEY_AUTH_USERNAME",
                    "UNBOUNCE_API_KEY_AUTH_PASSWORD"));
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
                scope: "full");
    }
}
