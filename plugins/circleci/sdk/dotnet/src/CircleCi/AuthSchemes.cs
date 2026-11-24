using CircleCi.Core;
using CircleCi.Core.Authentication;
using CircleCi.Core.Authentication.ApiKey;
using CircleCi.Core.Authentication.Basic;

namespace CircleCi;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiToken { get; }
    public IAuthScheme BasicAuth { get; }

    public AuthSchemes(CircleCiClientOptions options)
    {
        ApiToken =
            ApiKeyHeaderScheme.Create(
                "ApiToken",
                "Circle-Token",
                options.ApiTokenProvider,
                options.ApiToken ?? EnvironmentVariables.Get("CIRCLE_CI_API_TOKEN"));
        BasicAuth =
            BasicAuthScheme.Create(
                "BasicAuth",
                options.BasicAuthProvider,
                options.BasicAuth.WithEnvironmentDefaults(
                    "CIRCLE_CI_BASIC_AUTH_USERNAME",
                    "CIRCLE_CI_BASIC_AUTH_PASSWORD"));
    }
}
