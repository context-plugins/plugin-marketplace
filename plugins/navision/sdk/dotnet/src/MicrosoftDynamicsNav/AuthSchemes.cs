using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Authentication.Bearer;
using MicrosoftDynamicsNav.Core.Authentication.OAuth2;
using MicrosoftDynamicsNav.Core.Authentication.OAuth2.AuthorizationCode;
using MicrosoftDynamicsNav.Core.Authentication.OAuth2.ClientCredentials;

namespace MicrosoftDynamicsNav;

internal sealed class AuthSchemes
{
    public IAuthScheme Oauth2AuthorizationCode { get; }
    public IAuthScheme Oauth2ClientCredentials { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(MicrosoftDynamicsNavClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
    {
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
                scope: "https://api.businesscentral.dynamics.com/.default");
        Oauth2ClientCredentials =
            OAuth2Scheme<OAuth2ClientCredentials>.Create(
                "Oauth2ClientCredentials",
                options.Oauth2ClientCredentials.WithEnvironmentDefaults(
                    "MICROSOFT_DYNAMICS_NAV_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID",
                    "MICROSOFT_DYNAMICS_NAV_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET",
                    "MICROSOFT_DYNAMICS_NAV_OAUTH2_CLIENT_CREDENTIALS_SCOPE"),
                OAuth2ClientCredentialsStrategy.ForBasicAuthRequest(server.AuthServer("/token"), rawClient),
                options.TimeProvider);
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("MICROSOFT_DYNAMICS_NAV_BEARER_AUTH"));
    }
}
