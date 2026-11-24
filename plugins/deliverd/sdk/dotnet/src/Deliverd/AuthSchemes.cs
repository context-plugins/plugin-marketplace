using Deliverd.Core;
using Deliverd.Core.Authentication;
using Deliverd.Core.Authentication.Bearer;

namespace Deliverd;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(DeliverdClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("DELIVERD_BEARER_AUTH"));
    }
}
