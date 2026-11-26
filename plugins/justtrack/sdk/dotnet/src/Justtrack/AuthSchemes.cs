using Justtrack.Core;
using Justtrack.Core.Authentication;
using Justtrack.Core.Authentication.ApiKey;

namespace Justtrack;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(JusttrackClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("JUSTTRACK_API_KEY_AUTH"));
    }
}
