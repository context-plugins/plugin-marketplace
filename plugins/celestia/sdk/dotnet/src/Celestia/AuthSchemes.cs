using Celestia.Core;
using Celestia.Core.Authentication;
using Celestia.Core.Authentication.Bearer;

namespace Celestia;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(CelestiaClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("CELESTIA_BEARER_AUTH"));
    }
}
