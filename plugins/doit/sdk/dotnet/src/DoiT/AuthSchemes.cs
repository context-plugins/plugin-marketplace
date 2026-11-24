using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Authentication.ApiKey;
using DoiT.Core.Authentication.OAuth2;
using DoiT.Core.Authentication.OAuth2.AuthorizationCode;

namespace DoiT;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme TenantId { get; }
    public IAuthScheme Oauth2 { get; }

    public AuthSchemes(DoiTClientOptions options, Server server, RawClient rawClient, UriFactory urlFactory)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "Authorization",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("DOI_T_API_KEY"));
        TenantId =
            ApiKeyHeaderScheme.Create(
                "TenantId",
                "X-Tenant-Id",
                options.TenantIdProvider,
                options.TenantId ?? EnvironmentVariables.Get("DOI_T_TENANT_ID"));
        Oauth2 =
            OAuth2RefreshableScheme<OAuth2AuthorizationCodeCredentials>.Create(
                "Oauth2",
                options.Oauth2,
                OAuth2AuthorizationCodeStrategy.ForBasicAuthRequest(
                    server.AuthServer("/oauth"),
                    server.AccessTokenServer("/token"),
                    rawClient,
                    urlFactory),
                options.TimeProvider,
                scope: "dci");
    }
}
