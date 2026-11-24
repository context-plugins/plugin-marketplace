using AmazonAppSync.Core;
using AmazonAppSync.Core.Authentication;
using AmazonAppSync.Core.Authentication.ApiKey;

namespace AmazonAppSync;

internal sealed class AuthSchemes
{
    public IAuthScheme Sigv4 { get; }

    public AuthSchemes(AmazonAppSyncClientOptions options)
    {
        Sigv4 =
            ApiKeyHeaderScheme.Create(
                "Sigv4",
                "Authorization",
                options.Sigv4Provider,
                options.Sigv4 ?? EnvironmentVariables.Get("AMAZON_APP_SYNC_SIGV4"));
    }
}
