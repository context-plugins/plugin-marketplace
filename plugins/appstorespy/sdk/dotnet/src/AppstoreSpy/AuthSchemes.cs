using AppstoreSpy.Core;
using AppstoreSpy.Core.Authentication;
using AppstoreSpy.Core.Authentication.ApiKey;

namespace AppstoreSpy;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyHeader { get; }

    public AuthSchemes(AppstoreSpyClientOptions options)
    {
        ApiKeyHeader =
            ApiKeyHeaderScheme.Create(
                "ApiKeyHeader",
                "API-KEY",
                options.ApiKeyHeaderProvider,
                options.ApiKeyHeader ?? EnvironmentVariables.Get("APPSTORE_SPY_API_KEY_HEADER"));
    }
}
