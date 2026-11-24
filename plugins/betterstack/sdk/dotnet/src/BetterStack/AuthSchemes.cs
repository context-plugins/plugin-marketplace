using BetterStack.Core;
using BetterStack.Core.Authentication;
using BetterStack.Core.Authentication.Bearer;

namespace BetterStack;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(BetterStackClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("BETTER_STACK_BEARER_AUTH"));
    }
}
