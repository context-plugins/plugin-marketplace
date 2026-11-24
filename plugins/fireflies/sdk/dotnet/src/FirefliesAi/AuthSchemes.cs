using FirefliesAi.Core;
using FirefliesAi.Core.Authentication;
using FirefliesAi.Core.Authentication.Bearer;

namespace FirefliesAi;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(FirefliesAiClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("FIREFLIES_AI_BEARER_AUTH"));
    }
}
