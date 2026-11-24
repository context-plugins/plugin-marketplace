using Stoplight.Core;
using Stoplight.Core.Authentication;
using Stoplight.Core.Authentication.ApiKey;

namespace Stoplight;

internal sealed class AuthSchemes
{
    public IAuthScheme Authorization { get; }

    public AuthSchemes(StoplightClientOptions options)
    {
        Authorization =
            ApiKeyHeaderScheme.Create(
                "Authorization",
                "Authorization",
                options.AuthorizationProvider,
                options.Authorization ?? EnvironmentVariables.Get("STOPLIGHT_AUTHORIZATION"));
    }
}
