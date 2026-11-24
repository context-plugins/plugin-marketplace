using Leadspace.Core;
using Leadspace.Core.Authentication;
using Leadspace.Core.Authentication.Bearer;

namespace Leadspace;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(LeadspaceClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("LEADSPACE_BEARER_AUTH"));
    }
}
