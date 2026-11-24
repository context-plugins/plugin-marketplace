using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.Authentication.ApiKey;

namespace PlinthUsGrantsData;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(PlinthUsGrantsDataClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "X-API-Key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("PLINTH_US_GRANTS_DATA_API_KEY_AUTH"));
    }
}
