using BundleSocial.Core;
using BundleSocial.Core.Authentication;
using BundleSocial.Core.Authentication.ApiKey;

namespace BundleSocial;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(BundleSocialClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "x-api-key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("BUNDLE_SOCIAL_API_KEY_AUTH"));
    }
}
