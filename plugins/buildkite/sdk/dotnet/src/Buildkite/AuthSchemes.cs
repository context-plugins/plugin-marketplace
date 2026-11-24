using Buildkite.Core;
using Buildkite.Core.Authentication;
using Buildkite.Core.Authentication.Bearer;

namespace Buildkite;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(BuildkiteClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("BUILDKITE_BEARER_AUTH"));
    }
}
