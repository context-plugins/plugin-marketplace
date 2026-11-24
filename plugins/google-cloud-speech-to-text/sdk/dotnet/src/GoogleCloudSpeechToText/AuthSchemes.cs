using GoogleCloudSpeechToText.Core;
using GoogleCloudSpeechToText.Core.Authentication;
using GoogleCloudSpeechToText.Core.Authentication.ApiKey;
using GoogleCloudSpeechToText.Core.Authentication.OAuth2;
using GoogleCloudSpeechToText.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleCloudSpeechToText;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleCloudSpeechToTextClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_CLOUD_SPEECH_TO_TEXT_API_KEY"));
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
