using Fillo.Core;
using Fillo.Core.Authentication;
using Fillo.Core.Authentication.Bearer;

namespace Fillo;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(FilloClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("FILLO_BEARER_AUTH"));
    }
}
