using RocketReach.Core;
using RocketReach.Core.Authentication;
using RocketReach.Core.Authentication.ApiKey;

namespace RocketReach;

internal sealed class AuthSchemes
{
    public IAuthScheme RocketReachApiKey { get; }

    public AuthSchemes(RocketReachClientOptions options)
    {
        RocketReachApiKey =
            ApiKeyHeaderScheme.Create(
                "RocketReachApiKey",
                "Api-Key",
                options.RocketReachApiKeyProvider,
                options.RocketReachApiKey ?? EnvironmentVariables.Get("ROCKET_REACH_ROCKET_REACH_API_KEY"));
    }
}
