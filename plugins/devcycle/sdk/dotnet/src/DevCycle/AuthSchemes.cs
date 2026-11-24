using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Authentication.ApiKey;

namespace DevCycle;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(DevCycleClientOptions options)
    {
        BearerAuth =
            ApiKeyHeaderScheme.Create(
                "BearerAuth",
                "Authorization",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("DEV_CYCLE_BEARER_AUTH"));
    }
}
