using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Authentication.Bearer;
using Asana.Core.Authentication.OAuth2;
using Asana.Core.Authentication.OAuth2.AuthorizationCode;

namespace Asana;

internal sealed class AuthSchemes
{
    public IAuthScheme PersonalAccessToken { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(AsanaClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        PersonalAccessToken =
            BearerAuthScheme.Create(
                "PersonalAccessToken",
                options.PersonalAccessTokenProvider,
                options.PersonalAccessToken ?? EnvironmentVariables.Get("ASANA_PERSONAL_ACCESS_TOKEN"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/oauth_authorize"),
                    server.AuthServer("/oauth_token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "default openid email profile");
    }
}
