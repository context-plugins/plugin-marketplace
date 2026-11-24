using Apigee.Core;
using Apigee.Core.Authentication;
using Apigee.Core.Authentication.ApiKey;
using Apigee.Core.Authentication.OAuth2;
using Apigee.Core.Authentication.OAuth2.AuthorizationCode;

namespace Apigee;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(ApigeeClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("APIGEE_API_KEY"));
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
                scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/apihub.readonly https://www.googleapis.com/auth/apihub.readwrite");
    }
}
