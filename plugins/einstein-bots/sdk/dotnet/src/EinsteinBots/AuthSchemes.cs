using EinsteinBots.Core;
using EinsteinBots.Core.Authentication;
using EinsteinBots.Core.Authentication.ApiKey;
using EinsteinBots.Core.Authentication.Bearer;
using EinsteinBots.Core.Authentication.OAuth2;
using EinsteinBots.Core.Authentication.OAuth2.AuthorizationCode;

namespace EinsteinBots;

internal sealed class AuthSchemes
{
    public IAuthScheme ChatbotAuthAuthorizationCode { get; }
    public IAuthScheme ChatbotAuthImplicit { get; }
    public IAuthScheme JwtBearer { get; }

    public AuthSchemes(EinsteinBotsClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ChatbotAuthAuthorizationCode =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "ChatbotAuthAuthorizationCode",
                options.ChatbotAuthAuthorizationCode,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/authorize"),
                    server.AuthServer("/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "chatbot_api");
        ChatbotAuthImplicit =
            ApiKeyHeaderScheme.Create(
                "ChatbotAuthImplicit",
                "Authorization",
                options.ChatbotAuthImplicitProvider,
                options.ChatbotAuthImplicit ?? EnvironmentVariables.Get("EINSTEIN_BOTS_CHATBOT_AUTH_IMPLICIT"));
        JwtBearer =
            BearerAuthScheme.Create(
                "JwtBearer",
                options.JwtBearerProvider,
                options.JwtBearer ?? EnvironmentVariables.Get("EINSTEIN_BOTS_JWT_BEARER"));
    }
}
