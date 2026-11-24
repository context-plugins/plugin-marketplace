using JuriSign.Core;
using JuriSign.Core.Authentication;
using JuriSign.Core.Authentication.Bearer;

namespace JuriSign;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(JuriSignClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("JURI_SIGN_BEARER_AUTH"));
    }
}
