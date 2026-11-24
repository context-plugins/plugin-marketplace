using BrowserUse.Core;
using BrowserUse.Core.Authentication;
using BrowserUse.Core.Authentication.ApiKey;

namespace BrowserUse;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyHeader { get; }

    public AuthSchemes(BrowserUseClientOptions options)
    {
        ApiKeyHeader =
            ApiKeyHeaderScheme.Create(
                "ApiKeyHeader",
                "X-Browser-Use-API-Key",
                options.ApiKeyHeaderProvider,
                options.ApiKeyHeader ?? EnvironmentVariables.Get("BROWSER_USE_API_KEY_HEADER"));
    }
}
