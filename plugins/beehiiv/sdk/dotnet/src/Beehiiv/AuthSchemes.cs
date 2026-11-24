using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Authentication.Bearer;

namespace Beehiiv;

internal sealed class AuthSchemes
{
    public IAuthScheme BearerAuthSchemeCredentials { get; }

    public AuthSchemes(BeehiivClientOptions options)
    {
        BearerAuthSchemeCredentials =
            BearerAuthScheme.Create(
                "BearerAuthSchemeCredentials",
                options.BearerAuthSchemeCredentialsProvider,
                options.BearerAuthSchemeCredentials ??
                    EnvironmentVariables.Get("BEEHIIV_BEARER_AUTH_SCHEME_CREDENTIALS"));
    }
}
