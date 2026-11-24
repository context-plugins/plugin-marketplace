using ReadMe.Core;
using ReadMe.Core.Authentication;
using ReadMe.Core.Authentication.Basic;
using ReadMe.Core.Authentication.Bearer;

namespace ReadMe;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(ReadMeClientOptions options)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults(
                    "READ_ME_BASIC_AUTH_USERNAME",
                    "READ_ME_BASIC_AUTH_PASSWORD"));
        BearerAuth =
            BearerAuthScheme.Create(
                "BearerAuth",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("READ_ME_BEARER_AUTH"));
    }
}
