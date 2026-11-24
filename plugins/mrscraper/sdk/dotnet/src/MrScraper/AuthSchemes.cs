using MrScraper.Core;
using MrScraper.Core.Authentication;
using MrScraper.Core.Authentication.ApiKey;

namespace MrScraper;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKey { get; }
    public IAuthScheme BearerAuth { get; }

    public AuthSchemes(MrScraperClientOptions options)
    {
        ApiKey =
            ApiKeyHeaderScheme.Create(
                "ApiKey",
                "x-api-token",
                options.ApiKeyProvider,
                options.ApiKey ?? EnvironmentVariables.Get("MR_SCRAPER_API_KEY"));
        BearerAuth =
            ApiKeyHeaderScheme.Create(
                "BearerAuth",
                "Authorization",
                options.BearerAuthProvider,
                options.BearerAuth ?? EnvironmentVariables.Get("MR_SCRAPER_BEARER_AUTH"));
    }
}
