using Boomi.Core;
using Boomi.Core.Authentication;
using Boomi.Core.Authentication.Basic;
using Boomi.Core.Authentication.Bearer;

namespace Boomi;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(BoomiClientOptions options)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults("BOOMI_BASIC_AUTH_USERNAME", "BOOMI_BASIC_AUTH_PASSWORD"));
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("BOOMI_BEARER_AUTH"));
    }
}
