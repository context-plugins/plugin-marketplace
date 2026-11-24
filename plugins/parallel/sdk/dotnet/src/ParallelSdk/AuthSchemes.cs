using ParallelSdk.Core;
using ParallelSdk.Core.Authentication;
using ParallelSdk.Core.Authentication.ApiKey;

namespace ParallelSdk;

internal sealed class AuthSchemes
{
    public IAuthScheme ApiKeyAuth { get; }

    public AuthSchemes(ParallelSdkClientOptions options)
    {
        ApiKeyAuth =
            ApiKeyHeaderScheme.Create(
                "ApiKeyAuth",
                "x-api-key",
                options.ApiKeyAuthProvider,
                options.ApiKeyAuth ?? EnvironmentVariables.Get("PARALLEL_SDK_API_KEY_AUTH"));
    }
}
