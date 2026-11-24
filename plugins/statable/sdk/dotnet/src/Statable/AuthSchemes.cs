using Statable.Core;
using Statable.Core.Authentication;
using Statable.Core.Authentication.Bearer;

namespace Statable;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(StatableClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("STATABLE_BEARER_AUTH"));
    }
}
