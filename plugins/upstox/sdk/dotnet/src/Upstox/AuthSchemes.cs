using Upstox.Core;
using Upstox.Core.Authentication;
using Upstox.Core.Authentication.OAuth2;
using Upstox.Core.Authentication.OAuth2.AuthorizationCode;

namespace Upstox;

internal sealed class AuthSchemes
{
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(UpstoxClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.Default("/v2/login/authorization/dialog"),
                    server.Default("/v2/login/authorization/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "read write");
    }
}
