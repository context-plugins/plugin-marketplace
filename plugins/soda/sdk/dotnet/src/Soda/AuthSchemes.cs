using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Authentication.ApiKey;
using Soda.Core.Authentication.Basic;

namespace Soda;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuthApiKey { get; }
    public IAuthScheme CookieToken { get; }

    public AuthSchemes(SodaClientOptions options)
    {
        BasicAuthApiKey =
            BasicAuthScheme.Create(
                "BasicAuthApiKey",
                options.BasicAuthApiKeyProvider,
                options.BasicAuthApiKey.WithEnvironmentDefaults(
                    "SODA_BASIC_AUTH_API_KEY_USERNAME",
                    "SODA_BASIC_AUTH_API_KEY_PASSWORD"));
        CookieToken =
            ApiKeyCookieScheme.Create(
                "CookieToken",
                "token",
                options.CookieTokenProvider,
                options.CookieToken ?? EnvironmentVariables.Get("SODA_COOKIE_TOKEN"));
    }
}
