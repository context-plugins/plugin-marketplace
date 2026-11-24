using GoogleCloudTasks.Core;
using GoogleCloudTasks.Core.Authentication;
using GoogleCloudTasks.Core.Authentication.ApiKey;
using GoogleCloudTasks.Core.Authentication.OAuth2;
using GoogleCloudTasks.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleCloudTasks;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleCloudTasksClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_CLOUD_TASKS_API_KEY"));
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
