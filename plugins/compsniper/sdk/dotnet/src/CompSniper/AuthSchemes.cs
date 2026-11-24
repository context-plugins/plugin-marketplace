using CompSniper.Core;
using CompSniper.Core.Authentication;
using CompSniper.Core.Authentication.Bearer;

namespace CompSniper;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(CompSniperClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("COMP_SNIPER_BEARER_AUTH"));
    }
}
