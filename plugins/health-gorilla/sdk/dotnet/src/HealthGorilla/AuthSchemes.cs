using HealthGorilla.Core;
using HealthGorilla.Core.Authentication;
using HealthGorilla.Core.Authentication.Bearer;

namespace HealthGorilla;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(HealthGorillaClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("HEALTH_GORILLA_BEARER_AUTH"));
    }
}
