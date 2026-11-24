using GoogleCloudStorageTransferService.Core;
using GoogleCloudStorageTransferService.Core.Authentication;
using GoogleCloudStorageTransferService.Core.Authentication.ApiKey;
using GoogleCloudStorageTransferService.Core.Authentication.OAuth2;
using GoogleCloudStorageTransferService.Core.Authentication.OAuth2.AuthorizationCode;

namespace GoogleCloudStorageTransferService;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(GoogleCloudStorageTransferServiceClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("GOOGLE_CLOUD_STORAGE_TRANSFER_SERVICE_API_KEY"));
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
