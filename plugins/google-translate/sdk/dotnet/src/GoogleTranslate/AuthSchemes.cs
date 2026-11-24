using GoogleTranslate.Core;
using GoogleTranslate.Core.Authentication;
using GoogleTranslate.Core.Authentication.ApiKey;
using GoogleTranslate.Core.Authentication.OAuth2;
using GoogleTranslate.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleTranslate;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleTranslateClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_TRANSLATE_API_KEY"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/auth"),
                    server.AccessTokenServer("/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "https://www.googleapis.com/auth/cloud-translation https://www.googleapis.com/auth/cloud-platform");
    }
}
