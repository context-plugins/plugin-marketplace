using S1.Core;
using S1.Core.Authentication;
using S1.Core.Authentication.Bearer;

namespace S1;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(S1ClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("S1_BEARER_AUTH"));
    }
}
