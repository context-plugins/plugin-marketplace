using Instagram.Core;
using Instagram.Core.Authentication;
using Instagram.Core.Authentication.OAuth2;
using Instagram.Core.Authentication.OAuth2.AuthorizationCode;

namespace Instagram;

internal sealed class AuthSchemes
{
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(InstagramClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/oauth"),
                    server.AccessTokenServer("/access_token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "instagram_basic instagram_content_publish instagram_manage_comments instagram_manage_insights instagram_manage_messages pages_show_list pages_read_engagement");
    }
}
