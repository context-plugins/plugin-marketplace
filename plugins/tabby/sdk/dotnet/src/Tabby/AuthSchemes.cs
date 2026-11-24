using Tabby.Core;
using Tabby.Core.Authentication;
using Tabby.Core.Authentication.Bearer;

namespace Tabby;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(TabbyClientOptions options)
    {
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("TABBY_BEARER_AUTH"));
    }
}
