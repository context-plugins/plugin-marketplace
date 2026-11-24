using Bitly.Core;
using Bitly.Core.Authentication;
using Bitly.Core.Authentication.Bearer;

namespace Bitly;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(BitlyClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("BITLY_BEARER_AUTH"));
    }
}
