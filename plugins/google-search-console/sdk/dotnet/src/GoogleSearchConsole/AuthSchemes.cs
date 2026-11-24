using GoogleSearchConsole.Core;
using GoogleSearchConsole.Core.Authentication;
using GoogleSearchConsole.Core.Authentication.ApiKey;
using GoogleSearchConsole.Core.Authentication.OAuth2;
using GoogleSearchConsole.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleSearchConsole;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleSearchConsoleClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_SEARCH_CONSOLE_API_KEY"));
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
                scope: "https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly");
    }
}
