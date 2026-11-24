using Lusha.Core;
using Lusha.Core.Authentication;
using Lusha.Core.Authentication.ApiKey;

namespace Lusha;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(LushaClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "api_key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("LUSHA_API_KEY_AUTH"));
    }
}
