using ForceDream.Core;
using ForceDream.Core.Authentication;
using ForceDream.Core.Authentication.Bearer;

namespace ForceDream;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(ForceDreamClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("FORCE_DREAM_BEARER_AUTH"));
    }
}
