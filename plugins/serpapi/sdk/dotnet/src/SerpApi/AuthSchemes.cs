using SerpApi.Core;
using SerpApi.Core.Authentication;
using SerpApi.Core.Authentication.ApiKey;

namespace SerpApi;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }

    public AuthSchemes(SerpApiClientOptions options)
    {
        ApiKey =
            ApiKeyQueryScheme.Create(
                "ApiKey",
                "api_key",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("SERP_API_API_KEY"));
    }
}
