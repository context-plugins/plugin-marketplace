using SalesforceServiceCloud.Core;
using SalesforceServiceCloud.Core.Authentication;
using SalesforceServiceCloud.Core.Authentication.ApiKey;
using SalesforceServiceCloud.Core.Authentication.Bearer;
using SalesforceServiceCloud.Core.Authentication.OAuth2;
using SalesforceServiceCloud.Core.Authentication.OAuth2.AuthorizationCode;

namespace SalesforceServiceCloud;

internal sealed class AuthSchemes
{
    public IAuthScheme ChatbotAuthAuthorizationCode { get; }
    public IAuthScheme ChatbotAuthImplicit { get; }
    public IAuthScheme JwtBearer { get; }

    public AuthSchemes(SalesforceServiceCloudClientOptions options,
        Server server,
        RawClient rawClient,
        UriFactory urlFactory)
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
                options.ChatbotAuthImplicit ??
                    EnvironmentVariables.Get("SALESFORCE_SERVICE_CLOUD_CHATBOT_AUTH_IMPLICIT"));
        JwtBearer =
            BearerAuthScheme.Create(
                "JwtBearer",
                options.JwtBearerProvider,
                options.JwtBearer ?? EnvironmentVariables.Get("SALESFORCE_SERVICE_CLOUD_JWT_BEARER"));
    }
}
