using Cloro.Core;
using Cloro.Core.Authentication;
using Cloro.Core.Authentication.Bearer;

namespace Cloro;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(CloroClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("CLORO_BEARER_AUTH"));
    }
}
