using AtlassianCompass.Core.Authentication;
using AtlassianCompass.Core.Authentication.Basic;

namespace AtlassianCompass;

internal sealed class AuthSchemes
{
    public IAuthScheme BasicAuth { get; }

    public AuthSchemes(AtlassianCompassClientOptions options)
    {
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults(
                    "ATLASSIAN_COMPASS_BASIC_AUTH_USERNAME",
                    "ATLASSIAN_COMPASS_BASIC_AUTH_PASSWORD"));
    }
}
