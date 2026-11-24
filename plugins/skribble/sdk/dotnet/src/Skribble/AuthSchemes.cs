using Skribble.Core;
using Skribble.Core.Authentication;
using Skribble.Core.Authentication.Bearer;

namespace Skribble;

internal sealed class AuthSchemes
{
    public IAuthScheme Bearer { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(SkribbleClientOptions options)
    {
        Bearer =
            BearerAuthScheme.Create(
                "Bearer",
                options.BearerProvider,
                options.Bearer ?? EnvironmentVariables.Get("SKRIBBLE_BEARER"));
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("SKRIBBLE_BEARER_AUTH"));
    }
}
