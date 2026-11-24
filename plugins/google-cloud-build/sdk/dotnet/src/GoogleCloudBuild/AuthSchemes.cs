using GoogleCloudBuild.Core;
using GoogleCloudBuild.Core.Authentication;
using GoogleCloudBuild.Core.Authentication.ApiKey;
using GoogleCloudBuild.Core.Authentication.OAuth2;
using GoogleCloudBuild.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleCloudBuild;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleCloudBuildClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_CLOUD_BUILD_API_KEY"));
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
                scope: "https://www.googleapis.com/auth/cloud-platform");
    }
}
