using ApiVerve.Core;
using ApiVerve.Core.Authentication;
using ApiVerve.Core.Authentication.ApiKey;

namespace ApiVerve;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(ApiVerveClientOptions options)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "x-api-key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("API_VERVE_API_KEY"));
    }
}
