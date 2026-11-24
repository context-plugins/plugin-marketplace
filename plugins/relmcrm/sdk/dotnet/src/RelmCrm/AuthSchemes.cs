using RelmCrm.Core;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.Authentication.Bearer;
using RelmCrm.Core.Authentication.OAuth2;
using RelmCrm.Core.Authentication.OAuth2.AuthorizationCode;

namespace RelmCrm;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(RelmCrmClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("RELM_CRM_BEARER_AUTH"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/authorize"),
                    server.AuthServer("/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "crm");
    }
}
