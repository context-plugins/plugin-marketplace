using FinixApiReference.Core.Authentication;
using FinixApiReference.Core.Authentication.Basic;

namespace FinixApiReference;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }

    public AuthSchemes(FinixApiReferenceClientOptions options)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults(
                    "FINIX_API_REFERENCE_BASIC_AUTH_USERNAME",
                    "FINIX_API_REFERENCE_BASIC_AUTH_PASSWORD"));
    }
}
