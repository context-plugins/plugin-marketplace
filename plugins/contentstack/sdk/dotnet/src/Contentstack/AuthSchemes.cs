using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Authentication.ApiKey;
using Contentstack.Core.Authentication.Bearer;

namespace Contentstack;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }
    public IAuthScheme AuthtokenAuth { get; }
    public IAuthScheme ApiKey { get; }
    public IAuthScheme DeliveryToken { get; }
    public IAuthScheme ManagementTokenAuth { get; }

    public AuthSchemes(ContentstackClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("CONTENTSTACK_BEARER_AUTH"));
        AuthtokenAuth =
            ApiKeyHeaderScheme.Create(
                "AuthtokenAuth",
                "authtoken",
                options.AuthtokenAuthProvider,
                options.AuthtokenAuth ?? EnvironmentVariables.Get("CONTENTSTACK_AUTHTOKEN_AUTH"));
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "api_key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("CONTENTSTACK_API_KEY"));
        DeliveryToken =
            ApiKeyHeaderScheme.Create(
                "DeliveryToken",
                "access_token",
                options.DeliveryTokenProvider,
                options.DeliveryToken ?? EnvironmentVariables.Get("CONTENTSTACK_DELIVERY_TOKEN"));
        ManagementTokenAuth =
            ApiKeyHeaderScheme.Create(
                "ManagementTokenAuth",
                "authorization",
                options.ManagementTokenAuthProvider,
                options.ManagementTokenAuth ?? EnvironmentVariables.Get("CONTENTSTACK_MANAGEMENT_TOKEN_AUTH"));
    }
}
