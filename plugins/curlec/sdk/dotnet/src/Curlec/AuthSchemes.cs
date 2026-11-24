using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Authentication.Basic;
using Curlec.Core.Authentication.OAuth2;
using Curlec.Core.Authentication.OAuth2.AuthorizationCode;
using Curlec.Core.Authentication.OAuth2.ClientCredentials;

namespace Curlec;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }
    public IAuthScheme Oauth2AuthorizationCode { get; }
    public IAuthScheme Oauth2ClientCredentials { get; }

    public AuthSchemes(CurlecClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults("CURLEC_BASIC_AUTH_USERNAME", "CURLEC_BASIC_AUTH_PASSWORD"));
        Oauth2AuthorizationCode =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2AuthorizationCode",
                options.Oauth2AuthorizationCode,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/authorize"),
                    server.AuthServer("/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "read_only");
        Oauth2ClientCredentials =
            OAuth2Scheme<OAuth2ClientCredentials>.Create(
                "Oauth2ClientCredentials",
                options.Oauth2ClientCredentials.WithEnvironmentDefaults(
                    "CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID",
                    "CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET",
                    "CURLEC_OAUTH2_CLIENT_CREDENTIALS_SCOPE"),
                OAuth2ClientCredentialsStrategy.ForBasicAuthRequest(server.AuthServer("/token"), rawClient),
                options.TimeProvider);
    }
}
