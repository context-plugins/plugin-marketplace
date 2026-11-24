using Applike.Core;
using Applike.Core.Authentication;
using Applike.Core.Authentication.ApiKey;

namespace Applike;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(ApplikeClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("APPLIKE_API_KEY_AUTH"));
    }
}
