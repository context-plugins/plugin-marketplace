using Dynamics365BusinessCentral.Core;
using Dynamics365BusinessCentral.Core.Authentication;
using Dynamics365BusinessCentral.Core.Authentication.Bearer;
using Dynamics365BusinessCentral.Core.Authentication.OAuth2;
using Dynamics365BusinessCentral.Core.Authentication.OAuth2.AuthorizationCode;
using Dynamics365BusinessCentral.Core.Authentication.OAuth2.ClientCredentials;

namespace Dynamics365BusinessCentral;

internal sealed class AuthSchemes
{
    public IAuthScheme Oauth2AuthorizationCode { get; }
    public IAuthScheme Oauth2ClientCredentials { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(Dynamics365BusinessCentralClientOptions options,
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
                    "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID",
                    "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET",
                    "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_SCOPE"),
                OAuth2ClientCredentialsStrategy.ForBasicAuthRequest(server.AuthServer("/token"), rawClient),
                options.TimeProvider);
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("DYNAMICS365_BUSINESS_CENTRAL_BEARER_AUTH"));
    }
}
