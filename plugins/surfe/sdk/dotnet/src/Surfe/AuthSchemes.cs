using Surfe.Core;
using Surfe.Core.Authentication;
using Surfe.Core.Authentication.Bearer;

namespace Surfe;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(SurfeClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("SURFE_BEARER_AUTH"));
    }
}
