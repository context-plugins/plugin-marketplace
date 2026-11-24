using GoogleCloudDataproc.Core;
using GoogleCloudDataproc.Core.Authentication;
using GoogleCloudDataproc.Core.Authentication.ApiKey;
using GoogleCloudDataproc.Core.Authentication.OAuth2;
using GoogleCloudDataproc.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleCloudDataproc;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleCloudDataprocClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_CLOUD_DATAPROC_API_KEY"));
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
                scope: "https://www.googleapis.com/auth/dataproc https://www.googleapis.com/auth/dataproc.read-only https://www.googleapis.com/auth/cloud-platform");
    }
}
