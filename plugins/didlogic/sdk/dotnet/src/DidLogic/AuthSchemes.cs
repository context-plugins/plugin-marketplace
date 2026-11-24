using DidLogic.Core;
using DidLogic.Core.Authentication;
using DidLogic.Core.Authentication.Bearer;

namespace DidLogic;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(DidLogicClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("DID_LOGIC_BEARER_AUTH"));
    }
}
