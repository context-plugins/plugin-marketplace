using WhoisFreaks.Core;
using WhoisFreaks.Core.Authentication;
using WhoisFreaks.Core.Authentication.ApiKey;

namespace WhoisFreaks;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(WhoisFreaksClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyQueryScheme.Create(
                "ApiKeyAuth",
                "apiKey",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("WHOIS_FREAKS_API_KEY_AUTH"));
    }
}
