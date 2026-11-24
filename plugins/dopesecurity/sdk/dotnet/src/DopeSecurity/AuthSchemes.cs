using DopeSecurity.Core;
using DopeSecurity.Core.Authentication;
using DopeSecurity.Core.Authentication.Bearer;

namespace DopeSecurity;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(DopeSecurityClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("DOPE_SECURITY_BEARER_AUTH"));
    }
}
