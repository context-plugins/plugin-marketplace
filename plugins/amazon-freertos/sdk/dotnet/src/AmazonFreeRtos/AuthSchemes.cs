using AmazonFreeRtos.Core;
using AmazonFreeRtos.Core.Authentication;
using AmazonFreeRtos.Core.Authentication.ApiKey;

namespace AmazonFreeRtos;

internal sealed class AuthSchemes
{
    public IAuthScheme AwsSigV4 { get; }

    public AuthSchemes(AmazonFreeRtosClientOptions options)
    {
        AwsSigV4 =
            ApiKeyHeaderScheme.Create(
                "AwsSigV4",
                "Authorization",
                options.AwsSigV4Provider,
                options.AwsSigV4 ?? EnvironmentVariables.Get("AMAZON_FREE_RTOS_AWS_SIG_V4"));
    }
}
