using Hightouch.Core;
using Hightouch.Core.Authentication;
using Hightouch.Core.Authentication.Bearer;

namespace Hightouch;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(HightouchClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("HIGHTOUCH_BEARER_AUTH"));
    }
}
